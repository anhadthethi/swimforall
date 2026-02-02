"use client";

import { useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@/components/ui/button";

const stripePromise = typeof window !== "undefined" && process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  : null;

const presetAmounts = [
  { amount: 25, label: "$25", desc: "One complete beginner swim kit" },
  { amount: 50, label: "$50", desc: "Kit plus cleaning and transport" },
  { amount: 100, label: "$100", desc: "Multiple kits and delivery run" },
];

export default function DonateCheckoutPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const canceled = searchParams?.get("canceled");

  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [updates, setUpdates] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const activeAmount = useMemo(() => {
    if (customAmount) {
      const val = Number(customAmount);
      return Number.isFinite(val) ? val : null;
    }
    return selectedAmount;
  }, [selectedAmount, customAmount]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const amount = activeAmount;
    if (!amount || amount <= 0) {
      setError("Please enter a valid donation amount.");
      return;
    }
    if (!email.trim()) {
      setError("Email is required for your receipt.");
      return;
    }

    if (!stripePromise) {
      setError("Stripe is not configured. Add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          firstName,
          lastName,
          email,
          anonymous,
          updates,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Unable to start checkout. Please try again.");
      }

      const data = await res.json();
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error("Stripe failed to initialize.");
      }

      const { sessionId, url } = data;
      // Prefer redirectToCheckout when sessionId is available
      if (sessionId) {
        const { error: stripeError } = await stripe.redirectToCheckout({ sessionId });
        if (stripeError) throw new Error(stripeError.message);
      } else if (url) {
        window.location.href = url;
      } else {
        throw new Error("Missing checkout session.");
      }
    } catch (err: any) {
      setError(err.message || "Checkout failed. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Secure Donation Checkout</h1>
          <p className="text-lg md:text-xl opacity-90">
            Your donation funds beginner swim kits, preparation, and local delivery.
          </p>
        </div>
      </header>

      <main className="py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-gray-500">Donation</p>
                  <h2 className="text-2xl font-bold text-gray-900">{activeAmount ? `$${activeAmount}` : "Select an amount"}</h2>
                  <p className="text-sm text-gray-600">Funds swim kits and local delivery</p>
                </div>
                <Button variant="ghost" onClick={() => { setSelectedAmount(null); setCustomAmount(""); }}>
                  Change amount
                </Button>
              </div>

              <form className="space-y-8" onSubmit={handleSubmit}>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Choose an amount</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                    {presetAmounts.map((opt) => (
                      <button
                        key={opt.amount}
                        type="button"
                        onClick={() => { setSelectedAmount(opt.amount); setCustomAmount(""); }}
                        className={`p-4 rounded-lg border-2 text-left transition ${
                          selectedAmount === opt.amount && !customAmount
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-200 hover:border-blue-300"
                        }`}
                      >
                        <div className="text-lg font-semibold text-gray-900">{opt.label}</div>
                        <div className="text-sm text-gray-600">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Or enter a custom amount</label>
                    <div className="flex items-center">
                      <span className="text-gray-600 mr-2">$</span>
                      <input
                        type="number"
                        min="1"
                        inputMode="decimal"
                        value={customAmount}
                        onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email (for receipt)</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="space-y-2 text-sm text-gray-700">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={anonymous}
                      onChange={(e) => setAnonymous(e.target.checked)}
                      className="h-4 w-4"
                    />
                    <span>Make this donation anonymous</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={updates}
                      onChange={(e) => setUpdates(e.target.checked)}
                      className="h-4 w-4"
                    />
                    <span>Send me occasional impact updates (optional)</span>
                  </label>
                </div>

                {error && (
                  <div className="rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                    {error}
                  </div>
                )}

                {canceled && (
                  <div className="rounded-md bg-amber-50 border border-amber-200 p-3 text-sm text-amber-700">
                    You canceled the last checkout. You can try again whenever you're ready.
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full py-3 font-semibold"
                  style={{ backgroundColor: "var(--brand-accent)" }}
                  disabled={submitting}
                >
                  {submitting ? "Redirecting..." : "Complete Donation"}
                </Button>
                <p className="text-xs text-gray-500 text-center">Secure checkout powered by Stripe. We never store your payment information.</p>
              </form>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">How your donation is used</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li><span className="font-semibold">Swim Kits:</span> Beginner kits (goggles, cap, kickboard, fins, towel) for kids 8–12.</li>
              <li><span className="font-semibold">Cleaning & Preparation:</span> Inspection, sanitization, and safe repackaging.</li>
              <li><span className="font-semibold">Local Transportation:</span> Getting kits to families, pools, or pickup spots without added cost.</li>
            </ul>
            <div className="border-t border-gray-200 pt-4 space-y-2 text-sm text-gray-700">
              <p><span className="font-semibold">$25</span> funds one complete beginner kit.</p>
              <p><span className="font-semibold">$50</span> funds a kit plus cleaning, prep, and transport.</p>
              <p><span className="font-semibold">$100</span> supports multiple kits and a local delivery run.</p>
            </div>
            <div className="border-t border-gray-200 pt-4 text-sm text-gray-600">
              Have gear to donate instead? <button className="text-blue-600 hover:underline" onClick={() => router.push("/donate#donate-gear")}>Donate equipment</button>.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
