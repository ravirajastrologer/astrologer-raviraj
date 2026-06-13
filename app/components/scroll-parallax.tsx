"use client";

import { useEffect, useState } from "react";

type ScrollParallaxProps = {
  children: React.ReactNode;
  className?: string;
  speed?: number;
};

export function ScrollParallax({
  children,
  className = "",
  speed = 0.08,
}: ScrollParallaxProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateOffset = () => {
      setOffset(window.scrollY * speed);
      frame = 0;
    };

    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateOffset);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [speed]);

  return (
    <div
      className={className}
      style={{ transform: `translate3d(0, ${offset}px, 0)` }}
    >
      {children}
    </div>
  );
}
