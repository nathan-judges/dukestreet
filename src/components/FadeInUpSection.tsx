import React, { useRef, useState, useEffect } from 'react';

type FadeInUpVariant = 'v1' | 'v2' | 'v3';

export default function FadeInUpSection({
  children,
  variant = 'v1',
}: {
  children: React.ReactNode;
  variant?: FadeInUpVariant;
}) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fade-in-up-section ${variant} ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  );
} 