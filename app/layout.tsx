import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sameeransari-phi.vercel.app'), // Update this with your actual domain
  title: {
    default: "Sameer Ansari - iOS/Android & Full-Stack Developer | Portfolio",
    template: "%s | Sameer Ansari"
  },
  description: "Result-driven Computer Science student with 2 years of industry experience in mobile and full-stack development. Specialized in iOS (SwiftUI/UIKit), Android (Kotlin/Jetpack Compose), and React Native applications. Portfolio showcasing innovative projects and exceptional user experiences.",
  keywords: [
    "Sameer Ansari",
    "iOS Developer",
    "Android Developer", 
    "Full Stack Developer",
    "SwiftUI",
    "UIKit",
    "Kotlin",
    "Jetpack Compose",
    "React Native",
    "Mobile App Development",
    "Flutter",
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Firebase",
    "MongoDB",
    "PostgreSQL",
    "Python",
    "Django",
    "Portfolio",
    "Software Engineer",
    "Lahore Pakistan",
    "Computer Science",
    "University of Central Punjab"
  ],
  authors: [{ name: "Sameer Ansari", url: "https://github.com/Sameer-Ansari506" }],
  creator: "Sameer Ansari",
  publisher: "Sameer Ansari",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sameeransari.vercel.app",
    siteName: "Sameer Ansari Portfolio",
    title: "Sameer Ansari - iOS/Android & Full-Stack Developer",
    description: "Experienced mobile and full-stack developer specializing in iOS, Android, and cross-platform applications. Explore my portfolio of innovative projects.",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Sameer Ansari - Developer Portfolio"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sameer Ansari - iOS/Android & Full-Stack Developer",
    description: "Result-driven developer with 2 years of experience in mobile and full-stack development. Check out my portfolio!",
    creator: "@sameeransari",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when you get them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: 'https://sameeransari.vercel.app',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sameer Ansari",
    "jobTitle": "iOS/Android & Full-Stack Developer",
    "url": "https://sameeransari.vercel.app",
    "image": "https://sameeransari.vercel.app/profile.jpg",
    "sameAs": [
      "https://github.com/Sameer-Ansari506",
      "https://linkedin.com/in/sameer-ahmad-651194269"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "University of Central Punjab",
      "location": "Lahore, Pakistan"
    },
    "knowsAbout": [
      "iOS Development",
      "Android Development",
      "SwiftUI",
      "UIKit",
      "Kotlin",
      "Jetpack Compose",
      "React Native",
      "Flutter",
      "Full Stack Development",
      "Mobile App Development",
      "Web Development"
    ],
    "description": "Result-driven Computer Science student with 2 years of industry experience in mobile and full-stack development",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lahore",
      "addressCountry": "Pakistan"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="canonical" href="https://sameeransari.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
