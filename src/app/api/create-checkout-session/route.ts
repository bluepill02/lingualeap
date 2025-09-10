
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { headers } from 'next/headers';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

export async function POST(req: NextRequest) {
  const { userId } = await req.json();

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }

  const YOUR_DOMAIN = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:9004';

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'upi'],
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: 'LinguaLeap Pro',
              description: 'Unlimited access to all premium AI features.',
            },
            unit_amount: 9900, // 99 INR in paise
            recurring: {
              interval: 'month',
            },
          },
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${YOUR_DOMAIN}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${YOUR_DOMAIN}/upgrade`,
      client_reference_id: userId,
      metadata: {
        userId: userId,
      }
    });

    // In a real app, you would not send the session object directly,
    // but just the ID. For this demo, we'll return it so the client
    // can simulate redirection.
    return NextResponse.json({ sessionId: session.id });
  } catch (err: any) {
    console.error('Stripe session creation error:', err);
    return NextResponse.json({ error: { message: err.message } }, { status: 500 });
  }
}
