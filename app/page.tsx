import Link from "next/link";
import Fireflies from "@/components/Fireflies";
import { NAV } from "@/lib/nav";

export default function Home() {
  return (
    <>
      <Fireflies />
      <main className="wrap home">
        <div className="home-top">
          <div className="statement rv">
            这里是fireflyx的
            <br />
            个人网站，我擅长<em>AI全栈开发与Agent开发</em>。
          </div>
          <div className="aside rv d1">
            <span className="label">
              AI 全栈 + Agent 开发 · Full-stack &amp; Agent Engineer
            </span>
            <p>
              从大模型编排、检索增强，到产品落地的最后一公里。选择一个模块开始浏览。
            </p>
          </div>
        </div>

        <nav className="modlist rv d2" aria-label="Sections">
          {NAV.map((s) => (
            <Link key={s.href} className="mod" href={s.href}>
              <span className="mod-no">{s.no}</span>
              <span className="mod-name">
                {s.zh}
                <span className="mod-en">{s.en}</span>
              </span>
              <span className="mod-desc">{s.desc}</span>
              <span className="mod-arr">↗</span>
            </Link>
          ))}
        </nav>
      </main>
    </>
  );
}
