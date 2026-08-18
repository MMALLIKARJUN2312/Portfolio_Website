import { ExternalLink } from 'lucide-react';
import { Badge, Container, Heading, Reveal, Section, Surface, Text } from '@/components/ui';
import { projects } from '@/lib/content';

export function Projects() {
  return (
    <Section id="projects" className="border-t border-border">
      <Container>
        <Reveal>
          <Heading level={2} className="text-3xl font-semibold tracking-tight">
            Projects
          </Heading>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} delayMs={(index % 2) * 75}>
              <Surface variant="default" padding="lg" className="flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Text className="font-medium text-foreground">{project.name}</Text>
                    {project.context ? (
                      <Text className="mt-1 text-xs text-muted-foreground">{project.context}</Text>
                    ) : null}
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${project.name} on GitHub`}
                    className="shrink-0 rounded-md text-muted-foreground transition-colors hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                  >
                    <ExternalLink className="size-4" aria-hidden="true" />
                  </a>
                </div>

                <Text className="mt-3 text-sm text-muted-foreground">{project.description}</Text>

                <ul className="mt-4 flex flex-col gap-2">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="text-sm text-muted-foreground">
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
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
