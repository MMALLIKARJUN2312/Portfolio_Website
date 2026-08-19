import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export function Badge({ className, ...props }: ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground transition-all duration-normal ease-standard hover:border-primary/40 hover:bg-primary/10 hover:text-foreground',
        className,
      )}
      {...props}
    />
  );
}
