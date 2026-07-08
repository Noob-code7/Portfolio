"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from '@/lib/gsap';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const touchCheck = () => {
      setIsTouchDevice(
        window.matchMedia('(pointer: coarse)').matches ||
        navigator.maxTouchPoints > 0
      );
    };

    touchCheck();
    window.addEventListener('resize', touchCheck);

    if (isTouchDevice) return;

    const ring = ringRef.current;
    const dot = dotRef.current;

    if (!ring || !dot) return;

    gsap.set(ring, { xPercent: -50, yPercent: -50 });
    gsap.set(dot, { xPercent: -50, yPercent: -50 });

    const ringX = gsap.quickTo(ring, 'x', { duration: 0.4, ease: 'power3.out' });
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.4, ease: 'power3.out' });

    const dotX = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power2.out' });
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power2.out' });

    const onMouseMove = (e: MouseEvent) => {
      ringX(e.clientX);
      ringY(e.clientY);
      dotX(e.clientX);
      dotY(e.clientY);
    };

    window.addEventListener('mousemove', onMouseMove);

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const cursorTextAttr = target.getAttribute('data-cursor');
      
      if (cursorTextAttr) {
        setCursorText(cursorTextAttr);
        gsap.to(ring, { scale: 3.5, border: 'none', backgroundColor: 'rgba(255, 255, 255, 0.1)', duration: 0.3, ease: 'power2.out' });
        gsap.to(dot, { scale: 0, duration: 0.2 });
      } else {
        gsap.to(ring, { scale: 1.8, duration: 0.3, ease: 'power2.out' });
      }
    };

    const handleMouseLeave = () => {
      setCursorText('');
      gsap.to(ring, { scale: 1, border: '1px solid rgba(255, 255, 255, 1)', backgroundColor: 'transparent', duration: 0.3, ease: 'power2.out' });
      gsap.to(dot, { scale: 1, duration: 0.2 });
    };

    const addHoverListeners = () => {
      const hoverables = document.querySelectorAll('a, button, [data-cursor], .hoverable');
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter as EventListener);
        el.removeEventListener('mouseleave', handleMouseLeave as EventListener);
        el.addEventListener('mouseenter', handleMouseEnter as EventListener);
        el.addEventListener('mouseleave', handleMouseLeave as EventListener);
      });
    };

    addHoverListeners();

    const observer = new MutationObserver(() => {
      addHoverListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('resize', touchCheck);
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
      const hoverables = document.querySelectorAll('a, button, [data-cursor], .hoverable');
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter as EventListener);
        el.removeEventListener('mouseleave', handleMouseLeave as EventListener);
      });
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-white rounded-full pointer-events-none z-[99999] mix-blend-difference hidden md:block"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[99998] mix-blend-difference flex items-center justify-center hidden md:flex"
      >
        {cursorText && (
          <span className="text-[8px] font-sans font-bold uppercase tracking-wider text-white select-none pointer-events-none">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
