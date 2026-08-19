import { Code2, Briefcase, Mail } from 'lucide-react';
import { Container, Heading, Reveal, Section, Surface, Text } from '@/components/ui';
import { buttonVariants } from '@/components/ui/button';
import { profile } from '@/lib/content';
import { cn } from '@/lib/utils';

export function Contact() {
  return (
    <Section id="contact" className="relative overflow-hidden border-t border-border/60">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="glow-blob absolute bottom-[-20%] left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
      </div>

      <Container>
        <Reveal>
          <Surface variant="glass" padding="lg" className="mx-auto max-w-xl text-center">
            <div aria-hidden="true" className="mx-auto mb-4 h-1 w-10 rounded-full bg-primary" />
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
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-all duration-normal ease-standard hover:text-primary"
              >
                <Code2 className="size-4" aria-hidden="true" />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-all duration-normal ease-standard hover:text-primary"
              >
                <Briefcase className="size-4" aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </Surface>
        </Reveal>
      </Container>
    </Section>
  );
}
