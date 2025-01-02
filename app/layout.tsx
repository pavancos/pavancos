import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Dock from "./_components/Dock";

export const metadata: Metadata = {
  title: "Pavan's Portfolio",
  description: "This is my portfolio, built with Next.js, Tailwind, and Love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased w-screen h-[1000px] bg-black text-neutral-200`}
      >
        <Navbar></Navbar>
        <div className={
          `px-4 md:px-48 `
        }>

          {children}
        </div>
        <Dock></Dock>
      </body>
    </html>
  );
}
