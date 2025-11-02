import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Sameer Ansari - Portfolio",
  description: "Full Stack Developer Portfolio - Showcasing projects, skills, and experience in web development",
  keywords: ["web developer", "full stack", "portfolio", "react", "next.js", "typescript"],
  authors: [{ name: "Sameer Ansari" }],
  openGraph: {
    title: "Sameer Ansari - Portfolio",
    description: "Full Stack Developer Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
