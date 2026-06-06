"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { pager, SOCIALS } from "@/lib/nav";

export default function SiteFooter({ path }: { path?: string }) {
  const realPath = usePathname();
  const pathname = path ?? realPath;
  const pg = pager(pathname);
  if (!pg) return null;

  return (
    <footer className="site-foot">
      <div className="wrap">
        <div className="pager">
          <Link className="pg pg--prev" href={pg.prev.href}>
            <span className="label">上一页 / Prev</span>
            <span className="pg-t">
              <span className="ar">←</span>
              {pg.prev.zh} — {pg.prev.en}
            </span>
          </Link>
          <Link className="pg pg--next" href={pg.next.href}>
            <span className="label">下一页 / Next</span>
            <span className="pg-t">
              {pg.next.zh} — {pg.next.en}
              <span className="ar">→</span>
            </span>
          </Link>
        </div>
        <div className="row">
          <div className="socials">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href}>
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <div className="meta">
          <span>© 2026 fireflyx</span>
          <span>AI 全栈 + Agent 开发</span>
          <Link href="/" style={{ textDecoration: "none" }}>
            返回首页 ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
