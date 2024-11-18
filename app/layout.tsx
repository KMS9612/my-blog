import type { Metadata } from "next";
import { Sour_Gummy } from "next/font/google";
import "./globals.css";
import SideBar from "@/src/layouts/sidebar/sidebar";

const sourGummy = Sour_Gummy({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kimdev WebDevelop Blog",
  description: "김민승의 웹개발 기록 블로그(기술블로그)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${sourGummy.className} antialiased w-screen h-screen grid grid-cols-[300px_1fr] grid-rows-1`}
      >
        <div className="w-full h-full">
          <SideBar />
        </div>
        <div className="h-full">{children}</div>
      </body>
    </html>
  );
}
