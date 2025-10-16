import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "云境华庭酒店 - 五星级奢华酒店体验",
  description: "云境华庭酒店，坐落于城市之巅的五星级奢华酒店。提供豪华客房、精致餐饮、水疗中心、会议设施等服务，为您打造完美的入住体验。",
  keywords: "五星级酒店, 奢华酒店, 上海酒店, 陆家嘴酒店, 商务酒店, 会议酒店, 水疗中心, 精致餐饮",
  authors: [{ name: "云境华庭酒店" }],
  creator: "云境华庭酒店",
  publisher: "云境华庭酒店",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://yunjinggrand-hotel.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "云境华庭酒店 - 五星级奢华酒店体验",
    description: "坐落于城市之巅的五星级奢华酒店，为您打造完美的入住体验。",
    url: "https://yunjinggrand-hotel.com",
    siteName: "云境华庭酒店",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "云境华庭酒店",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "云境华庭酒店 - 五星级奢华酒店体验",
    description: "坐落于城市之巅的五星级奢华酒店，为您打造完美的入住体验。",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
