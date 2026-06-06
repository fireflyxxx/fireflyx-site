import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "关于 / About — fireflyx",
};

const principles = [
  {
    no: "01",
    h: "先想清楚，再写代码",
    p: "把模糊的需求收敛成清晰的问题边界，是工程里最值钱的一步。",
  },
  {
    no: "02",
    h: "让智能可被验证",
    p: "为 Agent 与 Prompt 建立评测与护栏，让“看起来对”变成“可以证明对”。",
  },
  {
    no: "03",
    h: "克制即风格",
    p: "少即是多。一个清晰的界面，胜过十个炫技的功能。",
  },
  {
    no: "04",
    h: "开放地协作",
    p: "把工具与经验沉淀为开源，在社区里被验证、被改进。",
  },
];

export default function AboutPage() {
  return (
    <>
      <main>
        <section className="wrap intro">
          <span className="idx rv">02 — ABOUT</span>
          <h1 className="rv d1">
            关于 <span className="en">About</span>
          </h1>
          <p className="desc rv d2">
            软件工程在读，专注 AI 全栈与 Agent
            开发。下面是一点背景与我做事的方式。
          </p>
        </section>

        <section className="wrap">
          <div className="about-hero">
            <div className="portrait ph rv">
              个人照片 / 头像
              <br />
              PORTRAIT
            </div>
            <div>
              <p className="lead rv d1">
                我在模型与产品之间，<em>寻找优雅的接缝</em>——
                让不确定的智能，收敛成确定、可用、可被信任的体验。
              </p>
              <div className="body">
                <p className="rv d2">
                  我是 <b>fireflyx</b>
                  ，一名软件工程方向的学生与开发者。日常游走于<b>大模型编排</b>
                  、<b>检索增强生成（RAG）</b>
                  、工具调用与评测，以及把它们包裹起来、让人愿意使用的
                  <b>前后端界面</b>之间。
                </p>
                <p className="rv d2">
                  I care about restrained design, legible code, and open
                  collaboration.
                  我相信好的工程有它自己的美学：克制、清晰、恰到好处。常在开源社区出没，乐于把踩过的坑写成工具与文章。
                </p>
                <p className="rv d2">
                  目前正在构建 AI Agent
                  相关的产品与基础设施，也对开发者体验（DX）格外上心。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="wrap principles">
          <div className="ptitle rv">
            工作方式{" "}
            <span style={{ color: "var(--color-faint)" }}>/ How I work</span>
          </div>
          <div className="plist rv">
            {principles.map((it) => (
              <div className="pitem" key={it.no}>
                <span className="pno">{it.no}</span>
                <h4>{it.h}</h4>
                <p>{it.p}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
