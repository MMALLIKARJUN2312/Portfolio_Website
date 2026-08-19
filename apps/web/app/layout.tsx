import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Providers } from '@/providers';
import { Inter, Space_Grotesk } from 'next/font/google';
import { cn } from '@/lib/utils';
import { profile } from '@/lib/content';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://my-domain.com';
const title = {
  default: `${profile.name} | ${profile.roles.join(' & ')}`,
  template: `%s | ${profile.name}`,
};
const description = profile.tagline;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: title.default,
    description,
    siteName: title.default,
  },
  twitter: {
    card: 'summary_large_image',
    title: title.default,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: siteUrl,
  email: profile.email,
  jobTitle: profile.roles.join(' & '),
  sameAs: [profile.github, profile.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, spaceGrotesk.variable)} suppressHydrationWarning>
      <body>
        <div
          aria-hidden="true"
          className="bg-grid-plain pointer-events-none fixed inset-0 -z-10 opacity-30"
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-(--z-toast) focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
