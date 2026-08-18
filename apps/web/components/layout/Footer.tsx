import { Code2, Briefcase, Mail } from 'lucide-react';
import { Container, IconLink } from '@/components/ui';
import { profile } from '@/lib/content';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center gap-4 py-10 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <IconLink
            href={`mailto:${profile.email}`}
            label="Email"
            icon={<Mail className="size-4" aria-hidden="true" />}
          />
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
        </div>
      </Container>
    </footer>
  );
}
