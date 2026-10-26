import "./globals.css";
import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import { ThemeProvider } from "next-themes";
import { Chatbot } from "@/components/chatbot";
import { TooltipProvider } from "@/components/ui/tooltip";
import FloatingDockDemo from "@/components/floating-dock-demo";
import GradientASCII from "../components/GradientASCII";
import HomeHeroSection from "@/sections/HomeHeroSection";

export const metadata: Metadata = {
  title: "Vijay Bansal",
  description: "Portfolio of Vijay Bansal",
};

const inter = Inter({ subsets: ["latin"] });

const GRADIENT_COLORS = ["#1e3fd8", "#f6f8ff", "#a5d8ff", "#38bdf8"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white antialiased dark:bg-black`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <TooltipProvider>
            <div className="relative mx-auto h-full min-h-screen w-full">
              <div
                // style={{ width: "100%", height: "400px", position: "relative" }}
                className="relative h-70 w-full md:h-90"
              >
                <GradientASCII
                  colors={GRADIENT_COLORS}
                  shape="horizon"
                  characters=" =+xX0S8#@"
                  cellSize={20}
                  density={0.8}
                  glyphOpacity={0.1}
                  glow={0.2}
                  depthOfField={0}
                  flicker={0.2}
                  softness={1}
                  scale={1}
                  flow={0.5}
                  speed={0.1}
                  gradientOpacity={0.9}
                  grain={0.2}
                  variation={0}
                  mouseInteraction
                  scrambleRadius={0.1}
                  clickEffect="wave"
                  intro
                  lightMode={false}
                />
              </div>
              <div className="relative mx-auto h-full w-full max-w-4xl px-0 pt-0 md:px-8 md:pb-0">
                <HomeHeroSection />
                {children}
                <Footer />
              </div>
            </div>
            <Toaster position="top-center" />
            <Chatbot />
            <FloatingDockDemo />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
