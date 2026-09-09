import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { id, productName, price, quantity, customerName, email, phone, nationality, date, pickupTime, pickupPoint, note } = await request.json();

        const orderId = Date.now().toString() + Math.floor(Math.random() * 10000);
        const grossAmount = price * quantity;

        // Gabungkan custom fields ke dalam description Xendit
        const tourDescription = `Nationality: ${nationality} | Date: ${date} | Time: ${pickupTime} | Pickup: ${pickupPoint || '-'} | Note: ${note || '-'}`;

        // 1. Definisikan URL dasar (localhost untuk testing, domain asli untuk production)
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
        
        // 2. Buat URL redirect yang membawa data pesanan pelanggan ke halaman /success
        const redirectUrl = `${baseUrl}/success?orderId=${orderId}`;

        // Format data transaksi sesuai standar Xendit Invoice
        const payload = {
            external_id: orderId,
            amount: grossAmount,
            payer_email: email,
            description: tourDescription,
            success_redirect_url: redirectUrl, // 3. Aktifkan redirect otomatis dari Xendit
            customer: {
                given_names: customerName,
                email: email,
                mobile_number: phone
            },
            items: [
                {
                    id: id,
                    name: productName,
                    quantity: quantity,
                    price: price,
                    category: "Tour"
                }
            ]
        };

        // Encode Xendit Secret Key ke format Base64 (Syarat autentikasi API Xendit)
        const secretKey = process.env.XENDIT_SECRET_KEY + ":";
        const encodedKey = Buffer.from(secretKey).toString('base64');

        // Minta URL pembayaran (Invoice) dari Xendit
        const response = await fetch('https://api.xendit.co/v2/invoices', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedKey}`
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Gagal membuat invoice Xendit");
        }

        // Kembalikan invoiceUrl ke frontend
        return NextResponse.json({ invoiceUrl: data.invoice_url });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}