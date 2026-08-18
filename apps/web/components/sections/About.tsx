import { Container, Divider, Heading, Reveal, Section, Text } from '@/components/ui';
import { education, profile } from '@/lib/content';

export function About() {
  return (
    <Section id="about" className="border-t border-border">
      <Container>
        <Reveal>
          <Heading level={2} className="text-3xl font-semibold tracking-tight">
            About
          </Heading>
          <Text className="mt-6 max-w-2xl text-lg text-muted-foreground">{profile.summary}</Text>

          <Divider className="my-8 max-w-2xl" />

          <div className="max-w-2xl">
            <Text className="text-sm font-medium text-foreground">{education.degree}</Text>
            <Text className="mt-1 text-sm text-muted-foreground">
              {education.institution} · {education.location}
            </Text>
            <Text className="mt-1 text-sm text-muted-foreground">{education.period}</Text>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
