"use client";

import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-dark">
      <Navbar />
      <HeroSection />
    </main>
  );
}
