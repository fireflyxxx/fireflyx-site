/** 每次路由切换时重新挂载，触发 .page 的淡入动画。 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page">{children}</div>;
}
