import Midtrans from "midtrans-client";
import { NextResponse } from "next/server";

export async function POST(req) {
    const body = await req.json();

    const snap = new Midtrans.Snap({
        isProduction: false,
        serverKey: process.env.MIDTRANS_SERVER_KEY,
    });

    const parameter = {
    transaction_details: {
        order_id: "ORDER-" + Date.now(),
        gross_amount: body.amount,
    },
    customer_details: {
        first_name: body.name,
        email: body.email,
    },
    };

    try {
        const transaction = await snap.createTransaction(parameter);
        return NextResponse.json(transaction);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}