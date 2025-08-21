import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Dock from "./_components/Dock";
export const metadata: Metadata = {
  title: "Pavan Kumar Chennupati",
  description: "Pavan Kumar Chennupati's portfolio, built with Next.js, Tailwind",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Pavan Kumar Chennupati",
    "Pavan",
    "Chennupati",
    "Pavan Ch",
    "pavanc",
    "pavancos",
    "pavankch",
    "pavankc",
    "Pavan Kumar",
    "Pavan Chennupati",
    "pavankc005",
    "Pavan Portfolio",
    "Pavan Kumar Portfolio",
    "Pavan Chennupati Portfolio",
    "Pavan Kumar Chennupati Portfolio",
  ],
  openGraph: {
    title: "Pavan Kumar Chennupati",
    description: "Pavan Kumar Chennupati's portfolio, built with Next.js, Tailwind",
    url: "https://pavanc.me",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="Pavan Kumar Chennupati, Pavan, Chennupati, Pavan Ch, pavanc, pavancos, pavankch, pavankc, Pavan Kumar" />
        <meta property="og:title" content="Pavan Kumar Chennupati | Portfolio" />
        <meta property="og:description" content="Pavan Kumar's portfolio, built with Next.js, Tailwind, and Love" />
        <meta property="og:url" content="https://pavanc.me" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://pavanc.me" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Pavan Kumar Chennupati",
              "url": "https://pavanc.me",
              "sameAs": [
                "https://linkedin.com/in/pavankch",
                "https://github.com/pavancos",
                "https://x.com/pavancos",
                "https://www.instagram.com/pavan.cos/"
              ],
              "jobTitle": "Web Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "PVPSIT"
              }
            }
          `}
        </script>
      </head>
      <body
        className={`antialiased w-screen bg-[#090909] text-neutral-200 overflow-x-hidden`}
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