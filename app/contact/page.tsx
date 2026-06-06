import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "联系 / Contact — fireflyx",
};

const links = [
  { plat: "GitHub", handle: "github.com/fireflyx" },
  { plat: "X / Twitter", handle: "@fireflyx" },
  { plat: "LinkedIn", handle: "in/fireflyx" },
  { plat: "微信公众号", handle: "fireflyx" },
];

export default function ContactPage() {
  return (
    <>
      <main>
        <section className="wrap intro">
          <span className="idx rv">05 — CONTACT</span>
          <h1 className="rv d1">
            联系 <span className="en">Let&apos;s build something</span>
          </h1>
          <p className="desc rv d2">
            对合作、开源或单纯聊聊技术都欢迎。最快的方式是邮件。
          </p>
        </section>

        <section className="wrap contact-main">
          <div className="big-mail rv">
            <a href="mailto:hello@fireflyx.dev">hello@fireflyx.dev</a>
          </div>
          <div className="status rv d1">
            <span className="dot" />
            当前开放合作与实习机会 · Open to work
          </div>

          <div className="clinks rv d2">
            {links.map((l) => (
              <a className="clink" href="#" key={l.plat}>
                <span className="l">
                  <span className="plat">{l.plat}</span>
                  <span className="handle">{l.handle}</span>
                </span>
                <span className="go">↗</span>
              </a>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
