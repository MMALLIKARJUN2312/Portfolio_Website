import { Container, Heading, Reveal, Section, Surface, Text } from '@/components/ui';
import { experience } from '@/lib/content';

export function Experience() {
  return (
    <Section id="experience" className="border-t border-border/60">
      <Container>
        <Reveal>
          <div aria-hidden="true" className="mb-4 h-1 w-10 rounded-full bg-primary" />
          <Heading level={2} className="text-3xl font-semibold tracking-tight">
            Experience
          </Heading>
        </Reveal>

        <ol className="mt-10 flex flex-col gap-6">
          {experience.map((entry, index) => (
            <li key={`${entry.org}-${entry.role}`}>
              <Reveal delayMs={index * 75}>
                <Surface variant="glass" padding="lg" interactive>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <Text className="font-medium text-foreground">
                      {entry.role} · {entry.org}
                    </Text>
                    <Text className="text-sm text-muted-foreground">{entry.period}</Text>
                  </div>
                  <ul className="mt-4 flex flex-col gap-2">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet} className="text-sm text-muted-foreground">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </Surface>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
