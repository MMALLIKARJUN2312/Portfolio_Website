import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const surfaceVariants = cva('rounded-xl border transition-all duration-normal ease-standard', {
  variants: {
    variant: {
      default: 'bg-(--card) border-(--border)',
      elevated: 'bg-(--popover) shadow-lg',
      ghost: 'border-transparent bg-transparent',
      glass: 'border-border/60 bg-card/60 shadow-md backdrop-blur-xl',
    },
    padding: {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    },
    interactive: {
      true: 'hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow motion-reduce:hover:translate-y-0',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    padding: 'md',
    interactive: false,
  },
});

export interface SurfaceProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof surfaceVariants> {}

export function Surface({ className, variant, padding, interactive, ...props }: SurfaceProps) {
  return (
    <div className={cn(surfaceVariants({ variant, padding, interactive }), className)} {...props} />
  );
}
