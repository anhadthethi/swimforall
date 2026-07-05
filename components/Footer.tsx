"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center">
          <p className="text-slate-300">
            &copy; 2026 Swim for all. All rights reserved.{" "}
            <span className="mx-2">|</span>
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <span className="mx-2">|</span>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
