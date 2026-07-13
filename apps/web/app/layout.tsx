import type { Metadata } from "next";
import "../styles/globals.css";
import { Providers } from "@/providers";
import {Inter, Space_Grotesk} from "next/font/google";

const inter = Inter({
  subsets : ['latin'],
  variable : '--font-inter',
  display : 'swap'
})

const spaceGrotesk = Space_Grotesk({
  subsets : ['latin'],
  variable : '--font-space-grotesk',
  display : 'swap'
})

export const metadata: Metadata = {
  metadataBase : new URL('https://my-domain.com'),
  title: {
    default : "Mallikarjun | Software Engineer",
    template : '%s | Mallikarjun'
  },
  description: "Production-grade software engineering portfolio showcasing AI, system design, and full-stack development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
