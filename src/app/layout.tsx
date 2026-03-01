import type { Metadata } from "next";
import localFont from "next/font/local";
import EmotionRegistry from "@/components/providers/EmotionRegistry";
import Header from "@/components/header/Header";
import "./globals.css";

const paperlogy = localFont({
  src: [
    {
      path: "./font/Paperlogy-5Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./font/Paperlogy-7Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-paperlogy",
});

export const metadata: Metadata = {
  title: "귀영 | 포트폴리오",
  description: "프론트엔드 개발자 귀영의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={paperlogy.variable}>
        <EmotionRegistry>
          <Header />
          {children}
        </EmotionRegistry>
      </body>
    </html>
  );
}
