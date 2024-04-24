import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "git-res",
  description: "Generate your GitHub profile into a resume effortlessly.",
  generator: "Next.js",
  applicationName: "git-res",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "resume",
    "github",
    "profile",
    "generator",
    "project",
  ],
  authors: [
    { name: "Agastya Sharma", url: "https://github.com/Agastya221" },
  ],
  creator: "Agastya Sharma",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://git-re.vercel.app/"),
  openGraph: {
    title: "git-re",
    description: "Generate your GitHub profile into a resume effortlessly.",
    url: "https://git-re.vercel.app/",
    siteName: "git-re",
    images: [
      {
        url: "https://res.cloudinary.com/dhnkuonev/image/upload/v1707138008/Screenshot_2024-02-05_182909_kajlun.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://res.cloudinary.com/dhnkuonev/image/upload/v1707138008/Screenshot_2024-02-05_182909_kajlun.png",
        width: 1800,
        height: 1600,
        alt: "git-res",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "git-res",
    description: "Generate your GitHub profile into a resume effortlessly.",
    creator: "@Agastya221",
    images: [
      "https://res.cloudinary.com/dhnkuonev/image/upload/v1707138008/Screenshot_2024-02-05_182909_kajlun.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
