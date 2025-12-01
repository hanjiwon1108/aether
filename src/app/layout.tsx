import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Aether | Creative Agency",
  description: "Futuristic Creative Agency",
};

import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, "bg-background text-foreground overflow-x-hidden")}>
        <QueryProvider>
          <SmoothScroll>
            <CustomCursor />
            <Header />
            {children}
          </SmoothScroll>
        </QueryProvider>
      </body>
    </html>
  );
}
