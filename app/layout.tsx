import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../providers";
import ToggleMode from "./components/ToggleMode/ToggleMode";
import { AppContextProvider } from "./context";
import ToggleModeContainer from "./components/ToggleMode/ToggleModeContainer";

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
      <body
        className={
          inter.className +
          "h-screen bg-cover bg-no-repeat bg-left-top bg-[url(/pattern-background-mobile-light.svg)] bg-[--light-grey] dark:bg-[--dark-navy] dark:bg-[url(/pattern-background-mobile-dark.svg)] md:bg-[url(/pattern-background-tablet-light.svg)] dark:md:bg-[url(/pattern-background-tablet-dark.svg)]  lg:bg-[url(/pattern-background-desktop-light.svg)] dark:lg:bg-[url(/pattern-background-desktop-dark.svg)] lg:bg-center lg:bg-cover"
        }
      >
        <AppContextProvider>
          <Providers>
            <ToggleModeContainer />
            {children}
          </Providers>
        </AppContextProvider>
      </body>
    </html>
  );
}
