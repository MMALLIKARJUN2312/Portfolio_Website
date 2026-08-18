import { Badge, Container, Heading, Reveal, Section, Text } from '@/components/ui';
import { skillGroups } from '@/lib/content';

export function Skills() {
  return (
    <Section id="skills" className="border-t border-border">
      <Container>
        <Reveal>
          <Heading level={2} className="text-3xl font-semibold tracking-tight">
            Skills
          </Heading>
        </Reveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.label} delayMs={index * 75}>
              <Text className="text-sm font-medium text-foreground">{group.label}</Text>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
