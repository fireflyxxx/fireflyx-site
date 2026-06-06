import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="wrap intro">
        <span className="idx rv">404 — NOT FOUND</span>
        <h1 className="rv d1">
          页面不存在 <span className="en">Not Found</span>
        </h1>
        <p className="desc rv d2">
          这个页面可能已经移动、删除，或者链接输入有误。你可以返回首页重新浏览。
        </p>
        <div style={{ marginTop: "clamp(28px,4vw,46px)" }}>
          <Link className="btn-link rv d3" href="/">
            <span className="arr">←</span> 返回首页
          </Link>
        </div>
      </section>
    </main>
  );
}
