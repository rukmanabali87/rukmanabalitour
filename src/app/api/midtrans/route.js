import Midtrans from "midtrans-client";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        const { orderId, amount, name, email } = body;

        if (!orderId || !amount) {
        return NextResponse.json(
            { error: "Invalid request" },
            { status: 400 }
        );
        }

        const snap = new Midtrans.Snap({
        isProduction: false,
        serverKey: process.env.MIDTRANS_SERVER_KEY,
        });

        const parameter = {
        transaction_details: {
            order_id: orderId,
            gross_amount: amount,
        },
        customer_details: {
            first_name: name || "Guest",
            email: email || "guest@email.com",
        },
        };

        const transaction = await snap.createTransaction(parameter);

        return NextResponse.json({
        token: transaction.token,
        });
    } catch (error) {
        console.error("Midtrans error:", error);
        return NextResponse.json(
        { error: error.message },
        { status: 500 }
        );
    }
}