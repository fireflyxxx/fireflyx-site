import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "作品 / Work — fireflyx",
};

const projects = [
  {
    title: "RAG 知识助手",
    year: "2025",
    cover: "项目截图 02\nRAG 知识助手",
    desc: "面向文档库的检索增强问答：混合检索、重排序与引用溯源，让回答可被核查。",
    tags: ["RAG", "Vector DB", "FastAPI"],
    delay: "",
  },
  {
    title: "开源 MCP 工具集",
    year: "2024",
    cover: "项目截图 03\n开源 MCP 工具集",
    desc: "一组 Model Context Protocol 服务端实现，让任意 LLM 安全连接真实工具与数据。",
    tags: ["MCP", "TypeScript", "OSS"],
    delay: "d1",
  },
  {
    title: "实时多模态 Demo",
    year: "2024",
    cover: "项目截图 04\n实时多模态 Demo",
    desc: "低延迟语音 + 视觉的对话原型，展示端到端的多模态 Agent 交互。",
    tags: ["WebRTC", "LLM", "Next.js"],
    delay: "",
  },
  {
    title: "Prompt 评测平台",
    year: "2023",
    cover: "项目截图 05\nPrompt 评测平台",
    desc: "对 Prompt 与模型版本做可重复的离线评测与回归，配套数据看板。",
    tags: ["Evals", "Python", "SQLite"],
    delay: "d1",
  },
];

export default function WorkPage() {
  return (
    <>
      <main>
        <section className="wrap intro">
          <span className="idx rv">01 — WORK</span>
          <h1 className="rv d1">
            作品 <span className="en">Selected Work</span>
          </h1>
          <p className="desc rv d2">
            围绕 Agent
            与全栈展开的项目、开源贡献与实验。以下为占位项目，替换为你的真实标题、截图与链接即可。
          </p>
        </section>

        <section className="wrap">
          <div className="work-grid">
            <a className="proj proj--feature rv" href="#">
              <div className="thumb">
                <div className="ph">
                  精选项目封面图 · AGENT 工作流引擎
                  <br />
                  FEATURED — PROJECT COVER
                </div>
              </div>
              <div className="cap">
                <span className="badge">Featured · 开源</span>
                <div className="head">
                  <h3>Agent 工作流引擎</h3>
                </div>
                <p>
                  可视化编排多步骤智能体：节点、分支、人类介入与回放。把复杂的
                  Agent 逻辑变成可读、可调试的有向图，并支持实时执行与回溯。
                </p>
                <div className="tags">
                  <span>LangGraph</span>
                  <span>Python</span>
                  <span>React</span>
                  <span>WebSocket</span>
                </div>
                <div style={{ marginTop: 24 }}>
                  <span className="btn-link">
                    查看项目 <span className="arr">↗</span>
                  </span>
                </div>
              </div>
            </a>

            {projects.map((p) => (
              <a
                key={p.title}
                className={`proj rv${p.delay ? ` ${p.delay}` : ""}`}
                href="#"
              >
                <div className="thumb">
                  <div className="ph">
                    {p.cover.split("\n").map((line, i) => (
                      <span key={line}>
                        {i > 0 && <br />}
                        {line}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="head">
                  <h3>{p.title}</h3>
                  <span className="yr">{p.year}</span>
                </div>
                <p>{p.desc}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
