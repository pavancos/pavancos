import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Dock from "./_components/Dock";
export const metadata: Metadata = {
  title: "Pavan Kumar Chennupati | Portfolio",
  description: "Pavan Kumar Chennupati's portfolio, built with Next.js, Tailwind, and Love",
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
    title: "Pavan Kumar Chennupati | Portfolio",
    description: "Pavan Kumar Chennupati's portfolio, built with Next.js, Tailwind, and Love",
    url: "https://pavanc.me",
    type: "website",
    images: [
      {
        url: "https://media.licdn.com/dms/image/v2/D5603AQFcsTsJdnfLMg/profile-displayphoto-shrink_400_400/B56ZOA1ZPzGoAg-/0/1733033302581?e=1745452800&v=beta&t=VsSDdbAPvHMxsyFrMy4DY5Kn0ke7gz6xbVm2mYX4wXU",
        width: 400,
        height: 400,
        alt: "Pavan Kumar Chennupati"
      }
    ]

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
        <meta property="og:image" content="https://media.licdn.com/dms/image/v2/D5603AQFcsTsJdnfLMg/profile-displayphoto-shrink_400_400/B56ZOA1ZPzGoAg-/0/1733033302581?e=1745452800&v=beta&t=VsSDdbAPvHMxsyFrMy4DY5Kn0ke7gz6xbVm2mYX4wXU" />
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