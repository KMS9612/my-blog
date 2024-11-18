import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SideBar from "@/src/layouts/sidebar/sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen h-screen grid grid-cols-[200px_1fr] grid-rows-1`}
      >
        <div className="h-full">
          <SideBar />
        </div>
        <div className="h-full">{children}</div>
      </body>
    </html>
  );
}
