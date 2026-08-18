import Link from 'next/link';
import { Container, Heading, Section, Stack, Text } from '@/components/ui';
import { buttonVariants } from '@/components/ui/button';

export default function NotFound() {
  return (
    <Section>
      <Container>
        <Stack className="items-center text-center">
          <Heading level={1}>404</Heading>
          <Text className="text-muted-foreground">This page could not be found.</Text>
          <Link href="/" className={buttonVariants({ variant: 'default' })}>
            Back to home
          </Link>
        </Stack>
      </Container>
    </Section>
  );
}
