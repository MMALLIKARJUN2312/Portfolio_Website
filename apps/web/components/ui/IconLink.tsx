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
        'inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none',
        className,
      )}
      {...props}
    >
      {icon}
    </a>
  );
}
