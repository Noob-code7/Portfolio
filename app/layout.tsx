import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/ui/SmoothScrollProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import ThemeToggle from "@/components/ui/ThemeToggle";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Justin Gomes | Full-Stack Software Engineer Portfolio",
  description: "A highly animated, scroll-reactive developer portfolio website for Justin Gomes, showcasing full-stack software engineering and interactive design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-zinc-950 text-zinc-50 selection:bg-zinc-50 selection:text-zinc-950">
        <div className="noise-overlay" />
        <SmoothScrollProvider>
          <CustomCursor />
          <ScrollProgressBar />
          <ThemeToggle />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}



