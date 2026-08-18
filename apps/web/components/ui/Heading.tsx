import type { ComponentPropsWithoutRef } from 'react';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingProps = ComponentPropsWithoutRef<'h1'> & {
  level?: HeadingLevel;
};

export function Heading({ level = 2, ...props }: HeadingProps) {
  const Component = `h${level}` as const;

  return <Component {...props} />;
}
