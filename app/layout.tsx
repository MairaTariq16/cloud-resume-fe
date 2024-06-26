import Sidebar from "@/components/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maira Tariq | DevOps Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "flex",
          "bg-primary",
          "p-10",
          "space-x-10",
          "max-h-screen",
          "min-h-screen",
          "overflow-hidden",
          "font-mono "
        )}
      >
        <Sidebar />
        <div className="grow">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
