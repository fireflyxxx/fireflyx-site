"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/nav";

export default function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="site-head">
      <div className="wrap row">
        <Link className="brand" href="/">
          <span className="x">f</span>irefl<span className="x">y</span>
          <span className="x">x</span>
        </Link>
        <nav className="site-nav">
          {NAV.map((s) => {
            const active =
              pathname === s.href || pathname.startsWith(`${s.href}/`);
            return (
              <Link
                key={s.href}
                href={s.href}
                className={active ? "active" : undefined}
              >
                {s.zh}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
