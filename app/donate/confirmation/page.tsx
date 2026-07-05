"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DonationConfirmationPage() {
  const [showToast, setShowToast] = useState(true);
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowToast(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSessionId(params.get("session_id"));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {showToast && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-20">
          <div className="rounded-lg bg-green-600 text-white px-4 py-3 shadow-lg flex items-center gap-2 animate-[fadeInDown_0.25s_ease-out]">
            <span className="text-lg">✅</span>
            <span className="font-semibold">Payment complete — thank you for your support</span>
          </div>
        </div>
      )}

      <header className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Thank you for supporting Swim for all</h1>
          <p className="text-lg md:text-xl opacity-90">Your donation has been processed successfully.</p>
        </div>
      </header>

      <main className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-gray-900">What happens next</h2>
              <p className="text-gray-700">A receipt has been sent to your email. We’ll keep you updated if you opted in for impact updates.</p>
              <p className="text-gray-700">Your contribution helps remove cost and gear barriers so kids can start swimming.</p>
              {sessionId && (
                <p className="text-sm text-gray-500">Reference: {sessionId}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
                <h3 className="font-semibold text-gray-900 mb-1">Gear sourced</h3>
                <p className="text-sm text-gray-700">Donated + purchased items assembled into beginner kits.</p>
              </div>
              <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
                <h3 className="font-semibold text-gray-900 mb-1">Cleaned & prepared</h3>
                <p className="text-sm text-gray-700">Each kit is inspected, sanitized, and packed safely.</p>
              </div>
              <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
                <h3 className="font-semibold text-gray-900 mb-1">Program support</h3>
                <p className="text-sm text-gray-700">Your gift helps us prepare and distribute kits through trusted local partners.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild style={{ backgroundColor: "var(--brand-accent)" }} className="w-full sm:w-auto">
                <Link href="/">Return Home</Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link href="/donate#donate-gear">Donate Gear</Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link href="/about">Share Our Mission</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
