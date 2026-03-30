import { NextResponse } from "next/server";
import Xendit from "xendit-node";

const x = new Xendit({
    secretKey: process.env.XENDIT_SECRET_KEY,
});

export async function POST(req) {
    try {
        const { amount, name, email, slug } = await req.json();

            const invoice = await x.Invoice.create({
            externalID: `tour-${slug}-${Date.now()}`,
            amount: Number(amount),
            payerEmail: email,
            description: `Booking ${name}`,
            successRedirectURL: "https://www.rukmanabalitour.com/success",
            failureRedirectURL: "https://www.rukmanabalitour.com/failed",
        });

        return NextResponse.json(invoice);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
        { error: "Failed to create invoice" },
        { status: 500 }
        );
    }
}