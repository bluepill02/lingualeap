
import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: NextRequest) {
    try {
        const { amount } = await req.json();

        if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
            throw new Error('Razorpay API keys are not configured.');
        }

        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });

        const options = {
            amount: amount, // amount in the smallest currency unit
            currency: "INR",
            receipt: `receipt_order_${uuidv4()}`
        };

        const order = await razorpay.orders.create(options);

        if (!order) {
            return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
        }

        return NextResponse.json(order);

    } catch (error: any) {
        console.error("Error creating Razorpay order:", error);
        return NextResponse.json({ error: error.message || "An unknown error occurred" }, { status: 500 });
    }
}
