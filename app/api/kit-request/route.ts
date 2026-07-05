import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formId = process.env.KIT_REQUEST_FORMSPREE_FORM_ID;

  if (!formId) {
    return NextResponse.json(
      { error: "Kit request form is not configured. Missing KIT_REQUEST_FORMSPREE_FORM_ID." },
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
        source: "swimforall-web",
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "Form provider error");
      return NextResponse.json({ error: errorText || "Unable to submit kit request" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Kit request submission failed", error);
    return NextResponse.json({ error: "Unable to submit kit request" }, { status: 500 });
  }
}
