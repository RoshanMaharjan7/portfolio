import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: [ "300", "400", "500", "600", "700", "800", "900"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Roshan Maharjan - Portfolio",
  description:
    "A portfolio website showcasing the projects and skills of Roshan Maharjan, a software developer specializing in web development and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} dark ${geistMono.variable} ${rubik.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
       <div className="fixed left-1/2 -translate-x-1/2 h-screen w-full max-w-6xl border-x -z-50" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}


