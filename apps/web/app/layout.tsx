import type { Metadata } from "next";
import "../styles/globals.css";
import { Providers } from "@/providers";

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
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
