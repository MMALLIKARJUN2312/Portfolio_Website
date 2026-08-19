import { Badge, Container, Heading, Reveal, Section, Surface, Text } from '@/components/ui';
import { skillGroups } from '@/lib/content';

export function Skills() {
  return (
    <Section id="skills" className="border-t border-border/60">
      <Container>
        <Reveal>
          <div aria-hidden="true" className="mb-4 h-1 w-10 rounded-full bg-primary" />
          <Heading level={2} className="text-3xl font-semibold tracking-tight">
            Skills
          </Heading>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <Reveal key={group.label} delayMs={index * 75}>
              <Surface variant="glass" padding="lg" interactive className="h-full">
                <Text className="text-sm font-medium text-foreground">{group.label}</Text>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </Surface>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
