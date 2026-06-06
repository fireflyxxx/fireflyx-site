"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** 滚动揭示：进入视口时给 .rv 元素加 .in。每次路由切换后重新扫描。 */
export default function Reveal() {
  const pathname = usePathname();

  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname 仅作为触发器，路由切换后需重新扫描新页面的 .rv 元素
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".rv"));
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            obs.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    for (const el of els) {
      if (!el.classList.contains("in")) io.observe(el);
    }

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
