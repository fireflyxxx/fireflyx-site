# fireflyx — 个人作品集

AI 全栈 + Agent 开发方向的个人网站。纯白极简、双语、富动效（流萤背景、自定义光标、滚动揭示、页面淡入）。

## 技术栈

- **Next.js 16**（App Router）+ **React 19** + **TypeScript**
- **Tailwind CSS v4**（`@theme` 设计令牌主导）+ 少量自定义 CSS（复杂视觉：聚光灯联动、流萤动画、自定义光标、伪元素色条）
- **next/font**：Bricolage Grotesque（标题）+ Archivo（正文），中文走系统字体回退
- **velite + MDX**：博客文章写在 `content/blog/*.mdx`，构建期编译为类型化数据
- **Biome**：lint + format
- **pnpm** + 部署到 **Vercel**

## 命令

```bash
pnpm dev      # velite 生成内容 → 启动开发服务器 (http://localhost:3000)
pnpm build    # velite → 生产构建（全站静态生成）
pnpm start    # 运行生产构建
pnpm lint     # Biome 检查
pnpm format   # Biome 格式化
```

> 注：`dev` 会先跑一次 velite。**修改 `content/` 下的文章后需重启 `pnpm dev`** 才能看到更新（velite 未开 watch 模式）。

## 目录结构

```
app/
  layout.tsx          # 根布局：字体 + 持久的 Header / 光标 / 滚动揭示
  template.tsx        # 路由切换时的页面淡入
  page.tsx            # 首页（聚光灯模块索引 + 流萤）
  work|about|stack|contact/page.tsx
  blog/page.tsx       # 文章列表
  blog/[slug]/page.tsx# 文章详情（渲染 MDX）
  globals.css         # 设计系统：@theme 令牌 + 组件类
components/            # SiteHeader / SiteFooter / Cursor / Fireflies / Reveal / MDXContent
lib/                  # nav（导航与翻页顺序）、date（日期格式化）
content/blog/         # MDX 文章
velite.config.ts      # 内容集合定义
design-reference/     # 原始 HTML/CSS/JS 设计原型（像素参照，不参与构建）
```

## 待替换的占位内容

- 项目封面 / 截图、头像、博客封面（目前是条纹占位框）
- `app/work/page.tsx`、`content/blog/*.mdx` 里的标题与正文
- `lib/nav.ts` 的 `SOCIALS`、`app/contact/page.tsx` 的邮箱与社交账号（`hello@fireflyx.dev`、GitHub/X/LinkedIn 等）

## 强调色

中紫色 MediumPurple `rgb(147 112 219)` / `#9370DB`，定义在 `app/globals.css` 的 `@theme` 中，改一处即全站生效。
