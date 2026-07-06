"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Home() {
  const quotes = [
    '"Every kid deserves to know what it feels like to float."',
    '"The water doesn\'t check your zip code. Neither do we."',
    '"A $25 kit shouldn\'t be the reason a child never learns to swim."',
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4500);

    return () => clearInterval(intervalId);
  }, [quotes.length]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[56vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden pt-6 pb-16 md:pb-20">
        <div className="absolute inset-0">
          <img 
            src="/images/helping-kids1.png" 
            alt="Children learning to swim with instructor" 
            className="w-full h-full object-cover object-[center_64%] md:object-[center_52%]"
          />
          <div className="absolute inset-0 bg-black/45"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <div className="w-full flex justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight text-center whitespace-nowrap inline-block">
              Swimming access for every child
            </h1>
          </div>
          <p className="text-sm sm:text-base md:text-lg mb-5 opacity-95 leading-relaxed text-center max-w-5xl mx-auto flex flex-col items-center">
            <span className="block whitespace-nowrap text-center">We remove the upfront costs that keep kids out of lessons by providing swim gear kits</span>
            <span className="block whitespace-nowrap text-center">and connecting families to local programs to get them started with swim.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex-1 sm:flex-none text-center">
              <Button asChild size="lg" style={{backgroundColor: 'var(--brand-accent)'}}>
                <Link href="/donate">Donate</Link>
              </Button>
              <p className="text-xs text-white/80 mt-2">Support our mission</p>
            </div>
            <div className="flex-1 sm:flex-none text-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                <Link href="/get-kit">Get a Kit</Link>
              </Button>
              <p className="text-xs text-white/80 mt-2">For families</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* What We Provide */}
      <section className="relative z-20 -mt-10 md:-mt-14 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-white/95 backdrop-blur p-4 md:p-5 rounded-2xl shadow-lg border border-white/70">
              <p className="text-xl md:text-2xl font-bold text-[var(--brand-primary)] mb-2">Community Partners</p>
              <p className="text-gray-600">We work with pools, YMCAs, schools, and local programs.</p>
            </div>
            <div className="bg-white/95 backdrop-blur p-4 md:p-5 rounded-2xl shadow-lg border border-white/70">
              <p className="text-xl md:text-2xl font-bold text-[var(--brand-primary)] mb-2">Swim Gear Kits</p>
              <p className="text-gray-600">We provide goggles, cap, kickboard, towel, stickers, and a mesh bag.</p>
            </div>
            <div className="bg-white/95 backdrop-blur p-4 md:p-5 rounded-2xl shadow-lg border border-white/70">
              <p className="text-xl md:text-2xl font-bold text-[var(--brand-primary)] mb-2">Guided Start</p>
              <p className="text-gray-600">We guide with  clear steps and local options so families can begin quickly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rotating Quote Section */}
      <section className="flex items-center justify-center py-10 md:py-14 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            key={currentQuoteIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[var(--brand-primary)] leading-relaxed"
          >
            {quotes[currentQuoteIndex]}
          </motion.p>
        </div>
      </section>

    </div>
  );
}
