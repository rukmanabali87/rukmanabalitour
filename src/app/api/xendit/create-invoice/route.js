import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        // Ambil data yang sama persis seperti saat menggunakan Midtrans
        const { id, productName, price, quantity, customerName, email, phone, date, pickupTime, pickupPoint, note } = await request.json();

        // Generate Order ID
        const orderId = Date.now().toString() + Math.floor(Math.random() * 10000);
        const grossAmount = price * quantity;

        // Gabungkan custom fields Midtrans ke dalam description Xendit
        const tourDescription = `Tour Date: ${date} | Time: ${pickupTime} | Pickup at: ${pickupPoint} | Note: ${note || '-'}`;

        // Format data transaksi sesuai standar Xendit Invoice
        const payload = {
            external_id: orderId,
            amount: grossAmount,
            payer_email: email,
            description: tourDescription,
            customer: {
                given_names: customerName,
                email: email,
                mobile_number: phone
            },
            items: [
                {
                    name: productName,
                    quantity: quantity,
                    price: price,
                    category: "Tour"
                }
            ],
            // Opsional: Anda bisa menambahkan redirect URL setelah user selesai bayar
            // success_redirect_url: "https://rukmanabalitour.com/success",
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

        // Jika Midtrans mengembalikan { token }, Xendit mengembalikan { invoiceUrl }
        return NextResponse.json({ invoiceUrl: data.invoice_url });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}