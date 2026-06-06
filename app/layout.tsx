import type { Metadata } from "next";
import { Archivo, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import Reveal from "@/components/Reveal";
import SiteHeader from "@/components/SiteHeader";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: "fireflyx — AI 全栈 + Agent 开发",
  description:
    "fireflyx：AI 全栈 + Agent 开发。从大模型编排、检索增强，到产品落地的最后一公里。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className={`${archivo.variable} ${bricolage.variable}`}>
      <body>
        <Cursor />
        <SiteHeader />
        {children}
        <Reveal />
      </body>
    </html>
  );
}
