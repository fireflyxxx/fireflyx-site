import * as runtime from "react/jsx-runtime";

/** 把 velite 在构建期编译出的 MDX code 渲染成 React 组件。 */
export function MDXContent({ code }: { code: string }) {
  const fn = new Function(code);
  const Content = fn({ ...runtime }).default;
  return <Content />;
}
