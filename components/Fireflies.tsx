"use client";

import { useEffect, useRef } from "react";

/** 首页背景漂浮的流萤光点。省电模式自动关闭。 */
export default function Fireflies() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const layer = layerRef.current;
    if (!layer) return;

    const N = window.innerWidth < 700 ? 10 : 18;
    const rand = (min: number, max: number) =>
      min + Math.random() * (max - min);

    for (let i = 0; i < N; i++) {
      const f = document.createElement("span");
      f.className = "firefly";
      const s = 0.5 + Math.random() * 1.6;
      f.style.left = `${Math.random() * 100}vw`;
      f.style.top = `${Math.random() * 100}vh`;
      f.style.width = f.style.height = `${(5 * s).toFixed(1)}px`;
      f.style.setProperty("--dx", `${rand(-60, 60).toFixed(0)}px`);
      f.style.setProperty("--dy", `${rand(-140, -20).toFixed(0)}px`);
      f.style.setProperty("--dur", `${rand(10, 22).toFixed(1)}s`);
      f.style.setProperty("--delay", `${(-Math.random() * 14).toFixed(1)}s`);
      f.style.setProperty("--fmax", `${rand(0.45, 0.95).toFixed(2)}`);
      layer.appendChild(f);
    }

    return () => {
      layer.replaceChildren();
    };
  }, []);

  return <div ref={layerRef} className="fireflies" aria-hidden />;
}
