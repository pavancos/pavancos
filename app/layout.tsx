import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Dock from "./_components/Dock";
export const metadata: Metadata = {
  title: "Pavan Kumar Chennupati",
  description:
    "Official Portfolio of Pavan Kumar Chennupati, Full-Stack Developer. Projects, Experience, and Contact Information. Pavan Kumar Chennupati is a Full-Stack Developer, building websites, mobile applications, and generative AI tools that are user-friendly and efficient.",
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
  metadataBase: new URL("https://pavanc.in/"),
  openGraph: {
    title: "Pavan Kumar Chennupati",
    description:
      "Pavan Kumar Chennupati is a Full-Stack Developer, building websites, mobile applications, and generative AI tools that are user-friendly and efficient.",
    url: "https://pavanc.in/",
    type: "website",
    locale: "en_US",
    siteName: "Pavan Kumar Chennupati",
    images: [
      {
        url: "https://pavanc.in/thumbnail.png",
        width: 2434,
        height: 1618,
        alt: "Pavan Kumar Chennupati",
      },
    ],
    alternateLocale: "en_UK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavan Kumar Chennupati",
    description:
      "Pavan Kumar Chennupati is a Full-Stack Developer, building websites, mobile applications, and generative AI tools that are user-friendly and efficient.",
    images: ["https://pavanc.in/thumbnail.png"],
    creator: "@pavancos",
  },
  alternates: {
    canonical: "https://pavanc.in/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased w-screen bg-[#090909] text-neutral-200 overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://pavanc.in/#pavan-kumar-chennupati",
              name: "Pavan Kumar Chennupati",
              url: "https://pavanc.in/",
              description:
                "Official Portfolio of Pavan Kumar Chennupati, Full-Stack Developer. Projects, Experience, and Contact Information. Pavan Kumar Chennupati is a Full-Stack Developer, building websites, mobile applications, and generative AI tools that are user-friendly and efficient.",
              sameAs: [
                "https://linkedin.com/in/pavankch",
                "https://github.com/pavancos",
                "https://x.com/pavancos",
                "https://www.instagram.com/pavan.cos/",
              ],
              jobTitle: "Full-Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Accenture",
              },
            }),
          }}
        />
        <Navbar></Navbar>
        <div className={`px-4 md:px-48 `}>{children}</div>
        <Dock></Dock>
      </body>
    </html>
  );
}
