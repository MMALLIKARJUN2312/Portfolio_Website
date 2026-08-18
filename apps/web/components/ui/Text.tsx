import type { ComponentPropsWithoutRef } from 'react';

type TextProps = ComponentPropsWithoutRef<'p'>;

export function Text(props: TextProps) {
  return <p {...props} />;
}
