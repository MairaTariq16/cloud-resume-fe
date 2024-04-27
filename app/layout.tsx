import Sidebar from "@/components/sidebar";
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
          "overflow-hidden",
          "p-10",
          "space-x-10",
          "min-h-screen"
        )}
      >
        <Sidebar />
        <div className="grow">{children}</div>
      </body>
    </html>
  );
}
