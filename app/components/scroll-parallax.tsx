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
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 981px)");

    const updateEnabled = () => {
      const enabled = mediaQuery.matches;
      setIsEnabled(enabled);

      if (!enabled) {
        setOffset(0);
      }
    };

    updateEnabled();
    mediaQuery.addEventListener("change", updateEnabled);

    return () => {
      mediaQuery.removeEventListener("change", updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) {
      return;
    }

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
  }, [isEnabled, speed]);

  return (
    <div
      className={className}
      style={{ transform: isEnabled ? `translate3d(0, ${offset}px, 0)` : "none" }}
    >
      {children}
    </div>
  );
}
