"use client";

import { useEffect, useRef } from "react";

/** 自定义光标：跟随的小圆点，悬停可交互元素时放大成圆环。仅桌面精确指针生效。 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia?.("(hover:hover) and (pointer:fine)").matches)
      return;
    const dot = dotRef.current;
    if (!dot) return;

    let tx = innerWidth / 2;
    let ty = innerHeight / 2;
    let dx = tx;
    let dy = ty;
    let seen = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!seen) {
        seen = true;
        dx = tx;
        dy = ty;
      }
      dot.classList.remove("hidden");
    };
    const onOut = (e: MouseEvent) => {
      if (!e.relatedTarget) dot.classList.add("hidden");
    };
    const onBlur = () => dot.classList.add("hidden");
    const onOver = (e: MouseEvent) => {
      const hit = (e.target as Element)?.closest?.(
        "a,button,.mod,.clink,[data-cursor]",
      );
      dot.classList.toggle("big", !!hit);
    };

    document.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onOut);
    window.addEventListener("blur", onBlur);
    document.addEventListener("mouseover", onOver);

    const loop = () => {
      dx += (tx - dx) * 0.2;
      dy += (ty - dy) * 0.2;
      dot.style.left = `${dx}px`;
      dot.style.top = `${dy}px`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onOut);
      window.removeEventListener("blur", onBlur);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot hidden" aria-hidden />;
}
