import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../providers";
import ToggleMode from "./components/ToggleMode/ToggleMode";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Quiz",
  description: "Testing the knowledge of devs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Providers>
          {/* <ToggleMode/> */}
          {children}</Providers>
      </body>
    </html>
  );
}
