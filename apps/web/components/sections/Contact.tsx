import { Code2, Briefcase, Mail } from 'lucide-react';
import { Container, Heading, Reveal, Section, Text } from '@/components/ui';
import { buttonVariants } from '@/components/ui/button';
import { profile } from '@/lib/content';
import { cn } from '@/lib/utils';

export function Contact() {
  return (
    <Section id="contact" className="border-t border-border">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <Heading level={2} className="text-3xl font-semibold tracking-tight">
              Get in touch
            </Heading>
            <Text className="mt-4 text-muted-foreground">
              Open to backend and AI/ML engineering opportunities. The fastest way to reach me is
              email.
            </Text>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className={cn(buttonVariants({ variant: 'default', size: 'lg' }))}
              >
                <Mail className="size-4" aria-hidden="true" />
                {profile.email}
              </a>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Code2 className="size-4" aria-hidden="true" />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Briefcase className="size-4" aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
