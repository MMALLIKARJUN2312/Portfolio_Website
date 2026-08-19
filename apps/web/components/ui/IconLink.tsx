import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type IconLinkProps = ComponentPropsWithoutRef<'a'> & {
  icon: ReactNode;
  label: string;
};

export function IconLink({ icon, label, className, ...props }: IconLinkProps) {
  return (
    <a
      aria-label={label}
      className={cn(
        'inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all duration-normal ease-standard hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-foreground hover:shadow-glow focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none motion-reduce:hover:translate-y-0',
        className,
      )}
      {...props}
    >
      {icon}
    </a>
  );
}
