import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "技术栈 / Stack — fireflyx",
};

const groups = [
  {
    h: "AI / Agent",
    lvl: "核心",
    delay: "",
    items: [
      ["LLM Orchestration", "编排 · 工具调用"],
      ["RAG", "检索增强生成"],
      ["Multi-Agent", "协作 · 角色分工"],
      ["Evals & Guardrails", "评测 · 护栏"],
      ["MCP", "模型上下文协议"],
    ],
  },
  {
    h: "语言 / Languages",
    lvl: "每日",
    delay: "d1",
    items: [
      ["Java", "主力"],
      ["Python", "AI 相关"],
      ["TypeScript", "主力"],
      ["SQL", "数据"],
    ],
  },
  {
    h: "前端 / Frontend",
    lvl: "熟练",
    delay: "",
    items: [
      ["React", "组件 · 状态"],
      ["Next.js", "全栈渲染"],
      ["Tailwind CSS", "样式"],
    ],
  },
  {
    h: "后端 / Backend",
    lvl: "熟练",
    delay: "d1",
    items: [
      ["Spring Boot", "Java 后端"],
      ["FastAPI", "Python 服务"],
      ["MySQL", "数据库"],
      ["PostgreSQL", "数据库"],
      ["Redis", "缓存 · 队列 · 记忆"],
    ],
  },
  {
    h: "AI 基础设施 / Infra",
    lvl: "实战",
    delay: "",
    items: [
      ["LangGraph", "Agent 编排"],
      ["Vector DB", "向量检索"],
      ["Embeddings", "语义向量"],
      ["vLLM", "推理服务"],
    ],
  },
  {
    h: "工程 / DevOps",
    lvl: "够用",
    delay: "d1",
    items: [
      ["Docker", "容器化"],
      ["CI/CD", "自动化"],
      ["Cloud", "部署"],
      ["Observability", "可观测"],
    ],
  },
  {
    h: "AI 工具 / AI Tools",
    lvl: "日常",
    delay: "",
    items: [
      ["Claude Code", "Anthropic"],
      ["Codex", "OpenAI"],
      ["opencode", "开源"],
    ],
  },
];

export default function StackPage() {
  return (
    <>
      <main>
        <section className="wrap intro">
          <span className="idx rv">03 — STACK</span>
          <h1 className="rv d1">
            技术栈 <span className="en">Stack &amp; Toolkit</span>
          </h1>
          <p className="desc rv d2">日常使用的语言、框架与 AI 工具。</p>
        </section>

        <section className="wrap">
          <div className="stack-grid">
            {groups.map((g) => (
              <div
                className={`sgroup rv${g.delay ? ` ${g.delay}` : ""}`}
                key={g.h}
              >
                <h3>
                  {g.h} <span className="lvl">{g.lvl}</span>
                </h3>
                <ul>
                  {g.items.map(([name, note]) => (
                    <li key={name}>
                      {name} <span className="note">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="wrap stack-note">
          <p className="rv">
            最近在深入：<b>多智能体协作</b>、<b>Agent 评测体系</b>
            ，以及如何把这些能力<b>稳定地产品化</b>。
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
