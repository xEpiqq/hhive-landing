import Stripe from 'stripe';
import { SITEURL, STRIPE_SECRET_KEY, PRICE_ID } from '$env/static/private';

const stripe = new Stripe(STRIPE_SECRET_KEY);

export const POST = async ({ request }) => {
  try {
    const { email } = await request.json();

    const session = await stripe.checkout.sessions.create({
      billing_address_collection: 'auto',
      customer_email: email,  // Pass the user's email here
      line_items: [
        {
          price: PRICE_ID,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      subscription_data: {
        trial_period_days: 14,  // Set the trial period to 14 days
      },
      success_url: `${SITEURL}/next-step/?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITEURL}/?canceled=true`,
    });

    // Return the session URL as JSON
    return new Response(JSON.stringify({ url: session.url }), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error creating Stripe checkout session:', error);
    return new Response('Failed to create Stripe checkout session', { status: 500 });
  }
};
