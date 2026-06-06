import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/.velite";
import SiteFooter from "@/components/SiteFooter";
import { fmtDate } from "@/lib/date";

export const metadata: Metadata = {
  title: "博客 / Blog — fireflyx",
};

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const featured = sorted.find((p) => p.featured) ?? sorted[0];
  const rest = sorted.filter((p) => p.slug !== featured.slug);

  return (
    <>
      <main>
        <section className="wrap intro">
          <span className="idx rv">04 — BLOG</span>
          <h1 className="rv d1">
            博客 <span className="en">Writing &amp; Notes</span>
          </h1>
          <p className="desc rv d2">
            关于 Agent、RAG 与工程实践的笔记。点击文章进入阅读。
          </p>
        </section>

        <section className="wrap">
          <Link className="feat rv" href={`/blog/${featured.slug}`}>
            <div className="thumb">
              <div className="ph">
                {featured.cover ?? "置顶文章封面图"}
                <br />
                FEATURED — COVER
              </div>
            </div>
            <div className="cap">
              <span className="badge">置顶 · Featured</span>
              <div className="pmeta">
                <span>{fmtDate(featured.date)}</span>
                <span className="sep" />
                <span>{featured.read} read</span>
              </div>
              <h2>{featured.title}</h2>
              <p>{featured.summary}</p>
              <div className="more">
                <span className="btn-link">
                  阅读全文 <span className="arr">↗</span>
                </span>
              </div>
            </div>
          </Link>

          <div className="posts rv">
            {rest.map((p) => (
              <Link className="post" href={`/blog/${p.slug}`} key={p.slug}>
                <span className="date">{fmtDate(p.date)}</span>
                <span className="body">
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  <span className="tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </span>
                </span>
                <span className="read">{p.read}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
