import { ArrowRight, Code2, Briefcase } from 'lucide-react';
import { Container, Heading, IconLink, Section, Text } from '@/components/ui';
import { buttonVariants } from '@/components/ui/button';
import { profile } from '@/lib/content';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <Section id="top" className="pt-32 pb-16 sm:pt-40">
      <Container>
        <div className="flex flex-col gap-6">
          <Text className="text-sm font-medium text-primary">{profile.roles.join(' · ')}</Text>
          <Heading
            level={1}
            className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl"
          >
            {profile.name}
          </Heading>
          <Text className="max-w-2xl text-lg text-muted-foreground">{profile.tagline}</Text>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#projects" className={cn(buttonVariants({ variant: 'default', size: 'lg' }))}>
              View projects
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a href="#contact" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}>
              Get in touch
            </a>
          </div>

          <div className="flex items-center gap-3 pt-2">
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
        </div>
      </Container>
    </Section>
  );
}
