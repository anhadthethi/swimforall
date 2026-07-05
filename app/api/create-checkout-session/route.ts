import { NextResponse } from "next/server";
import Stripe from "stripe";
import { headers } from "next/headers";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const {
    mode = "donation",
    amount,
    firstName = "",
    lastName = "",
    email = "",
    anonymous = false,
    updates = false,
    items = [],
  } = body;

  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: "Missing STRIPE_SECRET_KEY" }, { status: 500 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-12-15.clover",
  });

  const headersList = await headers();
  const origin = headersList.get("origin") || "http://localhost:3000";

  try {
    if (mode === "merch") {
      if (!Array.isArray(items) || items.length === 0) {
        return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
      }

      const line_items = items
        .filter((item: any) => item && Number(item.quantity) > 0 && Number(item.price) > 0)
        .map((item: any) => ({
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name || "Swim For All Merch",
              description: item.size ? `Size ${item.size}` : "Swim For All Coastal Shop",
            },
            unit_amount: Math.round(Number(item.price) * 100),
          },
          quantity: Math.max(1, Number(item.quantity) || 1),
        }));

      if (!line_items.length) {
        return NextResponse.json({ error: "Invalid cart items" }, { status: 400 });
      }

      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],
        line_items,
        metadata: {
          source: "merch",
          itemCount: String(line_items.length),
        },
        success_url: `${origin}/?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/?checkout=canceled`,
      });

      return NextResponse.json({ sessionId: session.id, url: session.url });
    }

    if (!amount || typeof amount !== "number" || amount <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const amountInCents = Math.round(Number(amount) * 100);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Swim for all Donation",
              description: "Supports swim kits, preparation, and program operations",
            },
            unit_amount: amountInCents,
          },
          quantity: 1,
        },
      ],
      metadata: {
        firstName,
        lastName,
        anonymous: String(!!anonymous),
        updates: String(!!updates),
        amount: String(amount),
      },
      success_url: `${origin}/donate/confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/donate/checkout?canceled=1`,
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error: any) {
    console.error("Stripe session error", error);
    return NextResponse.json({ error: "Unable to create checkout session." }, { status: 500 });
  }
}
