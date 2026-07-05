import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formId = process.env.NEWSLETTER_FORMSPREE_FORM_ID;

  if (!formId) {
    return NextResponse.json(
      { error: "Newsletter form is not configured. Missing NEWSLETTER_FORMSPREE_FORM_ID." },
      { status: 500 }
    );
  }

  const body = await req.json().catch(() => null);
  const email = body?.email;

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
  }

  try {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        source: "swimforall-newsletter",
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "Form provider error");
      return NextResponse.json({ error: errorText || "Unable to subscribe" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Newsletter subscription failed", error);
    return NextResponse.json({ error: "Unable to subscribe" }, { status: 500 });
  }
}
