"use client";

import React, { useEffect, useRef } from 'react';
import gsap from '@/lib/gsap';

export default function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    gsap.set(bar, { scaleX: 0, transformOrigin: 'left center' });

    const anim = gsap.to(bar, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 w-full h-1 bg-white z-[9999] pointer-events-none"
    />
  );
}
