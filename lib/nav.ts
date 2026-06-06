export type Section = {
  href: string;
  zh: string;
  en: string;
  no?: string;
  desc?: string;
};

/** 全站页面顺序（用于 footer 上一页/下一页，循环）。 */
export const ORDER: Section[] = [
  { href: "/", zh: "首页", en: "Home" },
  {
    href: "/work",
    zh: "作品",
    en: "Work",
    no: "01",
    desc: "精选项目、开源贡献与实验",
  },
  {
    href: "/about",
    zh: "关于",
    en: "About",
    no: "02",
    desc: "我的背景、信念与工作方式",
  },
  {
    href: "/stack",
    zh: "技术栈",
    en: "Stack",
    no: "03",
    desc: "语言、框架与 AI 能力图谱",
  },
  {
    href: "/blog",
    zh: "博客",
    en: "Blog",
    no: "04",
    desc: "关于 Agent、RAG 与工程的文章",
  },
  {
    href: "/contact",
    zh: "联系",
    en: "Contact",
    no: "05",
    desc: "合作邀约、邮件与社交链接",
  },
];

/** 顶部导航（不含首页）。 */
export const NAV = ORDER.slice(1);

/** 根据当前路径，返回循环的上一页 / 下一页。 */
export function pager(pathname: string) {
  const idx = ORDER.findIndex((s) => s.href === pathname);
  if (idx === -1) return null;
  const len = ORDER.length;
  return {
    prev: ORDER[(idx - 1 + len) % len],
    next: ORDER[(idx + 1) % len],
  };
}
