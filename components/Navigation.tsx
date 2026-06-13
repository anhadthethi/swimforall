"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-[var(--brand-primary)]">
              Swim Access
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/about" className="text-gray-700 hover:text-[var(--brand-primary)] px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/get-kit" className="text-gray-700 hover:text-[var(--brand-primary)] px-3 py-2 rounded-md text-sm font-medium">
                Get a Kit
              </Link>
              <Link href="/donate" className="text-gray-700 hover:text-[var(--brand-primary)] px-3 py-2 rounded-md text-sm font-medium">
                Donate
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-[var(--brand-primary)] px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Button asChild style={{backgroundColor: 'var(--brand-accent)'}}>
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button - for simplicity, just show donate button */}
            <Button asChild size="sm" style={{backgroundColor: 'var(--brand-accent)'}}>
              <Link href="/donate">Donate</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
