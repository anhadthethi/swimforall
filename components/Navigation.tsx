"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 md:justify-center">
          <div className="flex items-center md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2">
            <div className="flex-shrink-0">
              <Link href="/" className="block" aria-label="Swim for all Home">
                <Image
                  src="/images/swim-for-all-logo-nav.png"
                  alt="Swim for all"
                  width={220}
                  height={67}
                  className="h-12 w-auto"
                  priority
                />
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center gap-2">
            <Link href="/" className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-t-lg text-sm font-medium border-b-2 border-transparent hover:border-[var(--brand-primary)] transition-all">
                Home
            </Link>
            <Link href="/mission" className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-t-lg text-sm font-medium border-b-2 border-transparent hover:border-[var(--brand-primary)] transition-all">
              Mission
            </Link>
            <Link href="/get-kit" className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-t-lg text-sm font-medium border-b-2 border-transparent hover:border-[var(--brand-primary)] transition-all">
                Get a Kit
            </Link>
            <Link href="/donate" className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-t-lg text-sm font-medium border-b-2 border-transparent hover:border-[var(--brand-primary)] transition-all">
                Donate
            </Link>
            <Link href="/volunteer" className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-t-lg text-sm font-medium border-b-2 border-transparent hover:border-[var(--brand-primary)] transition-all">
              Volunteer
            </Link>
            <Link href="/about" className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-t-lg text-sm font-medium border-b-2 border-transparent hover:border-[var(--brand-primary)] transition-all">
                About
            </Link>
            <Link href="/contact" className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-t-lg text-sm font-medium border-b-2 border-transparent hover:border-[var(--brand-primary)] transition-all">
                Contact
            </Link>
            <Button asChild size="lg" className="px-6 py-2 font-bold shadow-lg hover:shadow-xl transition-shadow ml-2" style={{ backgroundColor: "var(--brand-accent)" }}>
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button - for simplicity, just show donate button */}
            <Button asChild size="sm" style={{ backgroundColor: "var(--brand-accent)" }}>
              <Link href="/donate">Donate</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
