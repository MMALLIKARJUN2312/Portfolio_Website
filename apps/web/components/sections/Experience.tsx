import { Container, Heading, Reveal, Section, Surface, Text } from '@/components/ui';
import { awards, experience } from '@/lib/content';

export function Experience() {
  return (
    <Section id="experience" className="border-t border-border">
      <Container>
        <Reveal>
          <Heading level={2} className="text-3xl font-semibold tracking-tight">
            Experience
          </Heading>
        </Reveal>

        <ol className="mt-10 flex flex-col gap-6">
          {experience.map((entry, index) => (
            <li key={`${entry.org}-${entry.role}`}>
              <Reveal delayMs={index * 75}>
                <Surface variant="default" padding="lg">
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

        <Reveal delayMs={experience.length * 75}>
          <div className="mt-10">
            <Text className="text-sm font-medium text-foreground">
              Additional experience &amp; awards
            </Text>
            <ul className="mt-4 flex flex-col gap-2">
              {awards.map((award) => (
                <li key={award.name} className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{award.name}:</span>{' '}
                  {award.description}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
