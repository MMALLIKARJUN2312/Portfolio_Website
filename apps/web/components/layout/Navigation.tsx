'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Code2, Briefcase, Menu, X } from 'lucide-react';
import { Container, IconLink, ThemeToggle } from '@/components/ui';
import { buttonVariants } from '@/components/ui/button';
import { navLinks, profile } from '@/lib/content';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-(--z-sticky) border-b border-border/60 bg-background/70 shadow-sm backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="#top"
          className="rounded-md text-sm font-semibold tracking-tight transition-colors duration-normal ease-standard hover:text-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
        >
          {profile.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm text-muted-foreground transition-colors duration-normal ease-standard after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-normal after:ease-standard hover:text-foreground hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <IconLink
            href={profile.github}
            label="GitHub profile"
            target="_blank"
            rel="noreferrer noopener"
            icon={<Code2 className="size-4" aria-hidden="true" />}
          />
          <IconLink
            href={profile.linkedin}
            label="LinkedIn profile"
            target="_blank"
            rel="noreferrer noopener"
            icon={<Briefcase className="size-4" aria-hidden="true" />}
          />
          <a
            href={profile.resumeUrl}
            download
            className={cn(buttonVariants({ variant: 'default' }))}
          >
            Resume
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-3 px-2">
              <IconLink
                href={profile.github}
                label="GitHub profile"
                target="_blank"
                rel="noreferrer noopener"
                icon={<Code2 className="size-4" aria-hidden="true" />}
              />
              <IconLink
                href={profile.linkedin}
                label="LinkedIn profile"
                target="_blank"
                rel="noreferrer noopener"
                icon={<Briefcase className="size-4" aria-hidden="true" />}
              />
              <a
                href={profile.resumeUrl}
                download
                className={cn(buttonVariants({ variant: 'default' }), 'ml-auto')}
              >
                Resume
              </a>
            </div>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
