'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Container, Heading, Section, Stack, Text } from '@/components/ui';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section role="alert">
      <Container>
        <Stack className="items-center text-center">
          <Heading level={1}>Something went wrong</Heading>
          <Text className="text-muted-foreground">
            An unexpected error occurred. Please try again.
          </Text>
          <Stack className="flex-row gap-3">
            <Button onClick={reset}>Try again</Button>
            <Link href="/" className={cn(buttonVariants({ variant: 'outline' }))}>
              Back to home
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Section>
  );
}
