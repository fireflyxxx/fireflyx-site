import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "作品 / Work — fireflyx",
};

const projects = [
  {
    title: "PicSeal",
    year: "2026",
    desc: "面向创作者的 AI 图像 / 视频混淆保护平台：在不影响人眼观感的前提下，让 AI 模型无法识别、学习与仿制内容，守护作品版权与肖像隐私。",
    tags: ["AI 安全", "图像处理", "版权保护"],
    href: "https://github.com/Mao-Xiaoxi/PicSeal",
    delay: "",
  },
  {
    title: "TripAgent",
    year: "2025",
    desc: "对话式 AI 旅行助手：从航班、酒店到行程编排与活动发现，用 Agent 把繁琐的旅行规划变成一段轻松的对话。",
    tags: ["AI Agent", "TypeScript", "Python"],
    href: "https://github.com/XXLXXN/Trip_Agent",
    delay: "d1",
  },
  {
    title: "医疗影像系统",
    year: "2026",
    desc: "软件开发实践课程项目：面向医疗影像的管理与处理系统，团队协作开发，本人负责后端部分。",
    tags: ["医疗影像", "后端", "团队协作"],
    href: "https://github.com/fireflyxxx/the-medical-project",
    delay: "",
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
            围绕 Agent 与全栈展开的项目实践与开源协作。
          </p>
        </section>

        <section className="wrap">
          <div className="work-grid">
            {projects.map((p) => (
              <a
                key={p.title}
                className={`proj rv${p.delay ? ` ${p.delay}` : ""}`}
                href={p.href}
                target="_blank"
                rel="noreferrer"
              >
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
                <span className="repo">
                  查看仓库 <span className="arr">↗</span>
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
