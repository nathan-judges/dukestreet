"use client";

import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-dark w-screen min-h-screen m-0 p-0">
      <Navbar />
      <HeroSection />
    </main>
  );
}
