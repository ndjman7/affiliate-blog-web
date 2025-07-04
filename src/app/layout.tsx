import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleTagManagerScript from "./GoogleTagManagerScript";
import GoogleTagManagerNoScript from "./GoogleTagManagerNoScript";
import LayoutClient from "./layout-client";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Picksight - 이슈와 유머를 한눈에",
  description:
    "Picksight는 최신 이슈와 유머를 한 곳에서 볼 수 있는 커뮤니티입니다.",
  keywords: [
    "이슈",
    "유머",
    "커뮤니티",
    "트렌드",
    "Picksight",
    "실시간 이슈",
    "재미",
    "밈",
    "토론",
    "정보",
  ],
  openGraph: {
    title: "Picksight - 이슈와 유머를 한눈에",
    description:
      "Picksight는 최신 이슈와 유머를 한 곳에서 볼 수 있는 커뮤니티입니다.",
    url: "https://picksight.kr",
    type: "website",
    images: [
      {
        url: "https://picksight.kr/og-image.png",
        width: 1200,
        height: 630,
        alt: "Picksight - 이슈와 유머를 한눈에",
      },
    ],
  },
  verification: {
    other: {
      "google-adsense-account": "ca-pub-7086279730997994",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isProduction = process.env.NODE_ENV === "production";
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {isProduction && <GoogleTagManagerScript />}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {isProduction && <GoogleTagManagerNoScript />}
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
