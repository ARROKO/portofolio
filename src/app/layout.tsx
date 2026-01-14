import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Joseph Kemgang - Développeur Full Stack",
    template: "%s | Joseph Kemgang"
  },
  description: "Portfolio de Joseph Kemgang, développeur full stack spécialisé en React, Flutter et technologies modernes. Découvrez mes projets innovants et mes compétences techniques.",
  keywords: ["développeur full stack", "React", "Next.js", "Flutter", "JavaScript", "TypeScript", "portfolio", "développeur web", "développeur mobile"],
  authors: [{ name: "Joseph Kemgang" }],
  creator: "Joseph Kemgang",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://joseph-kemgang.dev",
    title: "Joseph Kemgang - Développeur Full Stack",
    description: "Portfolio de Joseph Kemgang, spécialisé en Next.js et Flutter.",
    siteName: "Joseph Kemgang Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joseph Kemgang - Développeur Full Stack",
    description: "Portfolio de Joseph Kemgang, spécialisé en Next.js et Flutter.",
    creator: "@joseph_kemgang",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}