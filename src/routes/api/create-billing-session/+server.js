// src/routes/api/create-billing-session/+server.js
import Stripe from 'stripe';
import { json } from '@sveltejs/kit';
import { SITEURL, STRIPE_SECRET_KEY } from '$env/static/private';

const stripe = new Stripe(STRIPE_SECRET_KEY); // Replace with your actual Stripe secret key

export async function POST({ request }) {
    const { email } = await request.json();

    try {
        // Fetch the customer from Stripe using their email
        const customers = await stripe.customers.list({ email });

        if (customers.data.length === 0) {
            return json({ error: 'Customer not found' }, { status: 404 });
        }

        const customer = customers.data[0];

        // Create a billing portal session
        const session = await stripe.billingPortal.sessions.create({
            customer: customer.id,
            return_url: `${SITEURL}`, // Replace with your actual return URL
        });

        return json({ url: session.url });
    } catch (error) {
        console.error('Error creating billing session:', error);
        return json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
