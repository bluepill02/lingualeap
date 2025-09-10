
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { updateUserSettings } from "@/services/user";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId } = data;

        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !userId) {
            return NextResponse.json({ error: 'Missing required payment details' }, { status: 400 });
        }

        const secret = process.env.RAZORPAY_KEY_SECRET;
        if (!secret) {
            throw new Error('Razorpay secret key is not configured.');
        }
        
        const shasum = crypto.createHmac('sha256', secret);
        shasum.update(`${razorpay_order_id}|${razorpay_payment_id}`);
        const digest = shasum.digest('hex');

        if (digest === razorpay_signature) {
            // Payment is legit
            await updateUserSettings(userId, { isPro: true });

            return NextResponse.json({ success: true, message: "Payment verified successfully." });
        } else {
            // Payment is not legit
            return NextResponse.json({ success: false, error: 'Invalid payment signature.' }, { status: 400 });
        }
    } catch (error: any) {
        console.error("Error verifying Razorpay payment:", error);
        return NextResponse.json({ error: error.message || "An unknown error occurred" }, { status: 500 });
    }
}
