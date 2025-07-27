"use client";

import { useState } from "react";
import Aurora from "@/components/Aurora";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [auroraSettings] = useState({
    blend: 0.3,
    amplitude: 0.4,
    speed: 0.15
  });

  return (
    <main className="bg-dark">
      <Navbar />
      <Aurora 
        colorStops={["#3971F9", "#D974FB", "#F84F07"]}
        blend={auroraSettings.blend}
        amplitude={auroraSettings.amplitude}
        speed={auroraSettings.speed}
      >
        <HeroSection />
      </Aurora>
    </main>
  );
}
