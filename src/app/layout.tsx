import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/app_layer/providers/QueryProvider";
import SmoothScroll from "@/shared/ui/SmoothScroll";
import CustomCursor from "@/shared/ui/CustomCursor";
import { cn } from "@/shared/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Aether | Creative Agency",
  description: "Futuristic Creative Agency",
};

import Header from "@/widgets/Header/ui/Header";

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
