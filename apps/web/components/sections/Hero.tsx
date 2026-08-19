import { ArrowRight, Code2, Briefcase } from 'lucide-react';
import { Container, Heading, IconLink, Reveal, Section, Text } from '@/components/ui';
import { buttonVariants } from '@/components/ui/button';
import { profile } from '@/lib/content';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <Section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-70" />
        <div className="glow-blob absolute top-[-15%] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div
          className="glow-blob absolute top-1/4 right-[8%] h-[280px] w-[280px] rounded-full bg-accent/20 blur-3xl"
          style={{ animationDelay: '-6s' }}
        />
      </div>

      <Container>
        <Reveal>
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-1.5 text-sm font-medium text-primary shadow-sm backdrop-blur-md">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-primary motion-safe:animate-pulse"
              />
              {profile.roles.join(' · ')}
            </div>

            <Heading
              level={1}
              className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl"
            >
              {profile.name}
            </Heading>
            <Text className="max-w-2xl text-lg text-muted-foreground">{profile.tagline}</Text>

            <Reveal delayMs={100} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className={cn(buttonVariants({ variant: 'default', size: 'lg' }))}
              >
                View projects
                <ArrowRight
                  className="size-4 transition-transform group-hover/button:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <a href="#contact" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}>
                Get in touch
              </a>
            </Reveal>

            <Reveal delayMs={175} className="flex items-center gap-3 pt-2">
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
            </Reveal>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
