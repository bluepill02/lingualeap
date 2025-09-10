
import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { randomBytes } from 'crypto';

export async function POST(req: NextRequest) {
  const { amount, currency } = await req.json();

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  });

  const options = {
    amount: amount, // amount in the smallest currency unit
    currency: currency,
    receipt: `receipt_${randomBytes(10).toString('hex')}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    return NextResponse.json({ orderId: order.id, amount: order.amount, currency: order.currency });
  } catch (error: any) {
    console.error('Error creating Razorpay order:', error);
    return NextResponse.json({ error: { message: error.message } }, { status: 500 });
  }
}
