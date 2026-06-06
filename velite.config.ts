import { defineCollection, defineConfig, s } from "velite";

const posts = defineCollection({
  name: "Post",
  pattern: "blog/**/*.mdx",
  schema: s
    .object({
      title: s.string(),
      date: s.isodate(),
      summary: s.string(),
      tags: s.array(s.string()).default([]),
      read: s.string(),
      featured: s.boolean().default(false),
      cover: s.string().optional(),
      path: s.path(),
      content: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      slug: data.path.split("/").pop() as string,
    })),
});

export default defineConfig({
  root: "content",
  collections: { posts },
});
