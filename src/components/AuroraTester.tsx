"use client";

import { useState } from "react";

interface AuroraTesterProps {
  onSettingsChange?: (settings: { blend: number; amplitude: number; speed: number }) => void;
}

export default function AuroraTester({ onSettingsChange }: AuroraTesterProps) {
  const [blend, setBlend] = useState(0.4);
  const [amplitude, setAmplitude] = useState(0.6);
  const [speed, setSpeed] = useState(0.2);

  const handleBlendChange = (value: number) => {
    setBlend(value);
    onSettingsChange?.({ blend: value, amplitude, speed });
  };

  const handleAmplitudeChange = (value: number) => {
    setAmplitude(value);
    onSettingsChange?.({ blend, amplitude: value, speed });
  };

  const handleSpeedChange = (value: number) => {
    setSpeed(value);
    onSettingsChange?.({ blend, amplitude, speed: value });
  };

  return (
    <div className="fixed top-20 right-4 z-50 bg-dark/90 backdrop-blur-sm p-4 rounded-xl border border-white/20 text-white">
      <h3 className="text-sm font-archivo font-semibold mb-3">Aurora Controls</h3>
      
      <div className="space-y-3 text-xs">
        <div>
          <label className="block mb-1">Blend: {blend.toFixed(2)}</label>
          <input
            type="range"
            min="0.1"
            max="1.0"
            step="0.1"
            value={blend}
            onChange={(e) => handleBlendChange(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
        
        <div>
          <label className="block mb-1">Amplitude: {amplitude.toFixed(2)}</label>
          <input
            type="range"
            min="0.1"
            max="2.0"
            step="0.1"
            value={amplitude}
            onChange={(e) => handleAmplitudeChange(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
        
        <div>
          <label className="block mb-1">Speed: {speed.toFixed(2)}</label>
          <input
            type="range"
            min="0.05"
            max="1.0"
            step="0.05"
            value={speed}
            onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
      
      <div className="mt-3 text-xs text-gray-400">
        <p>Current Settings:</p>
        <p>blend={blend.toFixed(2)}</p>
        <p>amplitude={amplitude.toFixed(2)}</p>
        <p>speed={speed.toFixed(2)}</p>
      </div>
    </div>
  );
} 