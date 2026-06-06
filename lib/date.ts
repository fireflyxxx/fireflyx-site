/** "2026-03-18" → "2026 · 03 · 18" */
export const fmtDate = (iso: string) => iso.slice(0, 10).replace(/-/g, " · ");
