// src/routes/api/check-stripe-payment/+server.js
import Stripe from 'stripe';
import { json } from '@sveltejs/kit';
import { STRIPE_SECRET_KEY } from '$env/static/private';

const stripe = new Stripe(STRIPE_SECRET_KEY); // Replace with your actual Stripe secret key

export async function POST({ request }) {
    const { email } = await request.json();

    try {
        // Fetch the customer from Stripe using their email
        const customers = await stripe.customers.list({ email });

        if (customers.data.length === 0) {
            return json({ isPaid: false });
        }

        const customer = customers.data[0];

        // Check if the customer has an active subscription
        const subscriptions = await stripe.subscriptions.list({
            customer: customer.id,
            status: 'active',
            limit: 1
        });

        const isPaid = subscriptions.data.length > 0;

        return json({ isPaid });
    } catch (error) {
        console.error('Error checking Stripe payment:', error);
        return json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
