import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { orbitron, lexend, plusJakarta } from "@/app/fonts";
import { Suspense } from "react";
import Loading from "./loading";
import { ScrollToTopButton } from "@/components/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Emerald IT",
    description:
      "Emerald IT is a responsible AI-driven Business Intelligence (BI) service provider, leveraging the power of technology to drive meaningful change for their clients.",
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
      <body
        className={cn(
          "bg-custom-dark text-white font-orbitron antialiased overflow-x-hidden min-h-screen",
          orbitron.variable,
          lexend.variable,
          plusJakarta.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Footer />
          {/* <CookieConsentPopup /> */}
          <Toaster />
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
