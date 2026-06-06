import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/.velite";
import { MDXContent } from "@/components/MDXContent";
import SiteFooter from "@/components/SiteFooter";
import { fmtDate } from "@/lib/date";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — fireflyx`,
    description: post.summary,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <main>
        <section className="wrap intro">
          <span className="idx rv">04 — BLOG</span>
          <h1 className="rv d1">{post.title}</h1>
          <p className="desc rv d2">
            {fmtDate(post.date)} · {post.read} read · {post.tags.join(" / ")}
          </p>
        </section>

        <section className="wrap">
          <article className="article rv">
            <MDXContent code={post.content} />
          </article>
          <div style={{ marginTop: "clamp(40px,6vw,72px)" }}>
            <Link className="btn-link" href="/blog">
              <span className="arr">←</span> 返回博客
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter path="/blog" />
    </>
  );
}
