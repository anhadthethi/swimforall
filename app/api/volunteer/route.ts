import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formId = process.env.VOLUNTEER_FORMSPREE_FORM_ID;

  if (!formId) {
    return NextResponse.json(
      { error: "Volunteer form is not configured. Missing VOLUNTEER_FORMSPREE_FORM_ID." },
      { status: 500 }
    );
  }

  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  try {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...body,
        source: "swimforall-volunteer",
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "Form provider error");
      return NextResponse.json({ error: errorText || "Unable to submit volunteer form" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Volunteer form submission failed", error);
    return NextResponse.json({ error: "Unable to submit volunteer form" }, { status: 500 });
  }
}
