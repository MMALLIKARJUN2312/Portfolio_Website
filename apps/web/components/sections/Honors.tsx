import Image from 'next/image';
import { Award } from 'lucide-react';
import { Container, Heading, Reveal, Section, Surface, Text } from '@/components/ui';
import { awards } from '@/lib/content';

export function Honors() {
  return (
    <Section id="honors" className="border-t border-border/60">
      <Container>
        <Reveal>
          <div aria-hidden="true" className="mb-4 h-1 w-10 rounded-full bg-primary" />
          <Heading level={2} className="text-3xl font-semibold tracking-tight">
            Honors &amp; Certifications
          </Heading>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, index) => (
            <Reveal key={award.name} delayMs={(index % 3) * 75}>
              <Surface variant="glass" padding="lg" interactive className="flex h-full flex-col">
                {award.imageUrl ? (
                  <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg border border-border/60">
                    <Image
                      src={award.imageUrl}
                      alt={award.name}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                ) : (
                  <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg border border-border/60 bg-primary/10 text-primary">
                    <Award className="size-5" aria-hidden="true" />
                  </div>
                )}
                <Text className="font-medium text-foreground">{award.name}</Text>
                <Text className="mt-2 text-sm text-muted-foreground">{award.description}</Text>
              </Surface>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
