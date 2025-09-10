
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { updateUserSettings } from '@/services/user';
import { headers } from 'next/headers';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = headers().get('stripe-signature') as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    console.error(`❌ Error message: ${err.message}`);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    
    // Retrieve the userId from the session's metadata
    const userId = session.metadata?.userId;

    if (!userId) {
      console.error('❌ Webhook Error: userId not found in session metadata');
      return NextResponse.json({ error: 'User ID not found in session metadata' }, { status: 400 });
    }

    try {
      // Update the user's status to Pro in your database
      await updateUserSettings(userId, { isPro: true });
      console.log(`✅ User ${userId} has been upgraded to Pro.`);
    } catch (error) {
      console.error(`❌ Error upgrading user ${userId} to Pro:`, error);
      return NextResponse.json({ error: 'Database error while upgrading user.' }, { status: 500 });
    }
  }

  return NextResponse.json({ received: true });
}
