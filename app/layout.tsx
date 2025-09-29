import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const ibmPlexSans = IBM_Plex_Sans({
  subsets:['latin'],
  weight:['400','500','600','700'],
  variable:"--font-ibm-plex"
})
export const metadata: Metadata = {
  title: "PixelForge",
  description: "Forge imagination into visuals instantly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={cn('font-ibmPlexSans antialiased', ibmPlexSans.variable)}>
        {children}
      </body>
    </html>
  );
}
