'use client';

import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

const emptySubscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${isDark ? 'light' : 'dark'} theme` : 'Toggle theme'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all duration-normal ease-standard hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-foreground hover:shadow-glow focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none motion-reduce:hover:translate-y-0',
        className,
      )}
    >
      {mounted ? (
        isDark ? (
          <Sun className="size-4" aria-hidden="true" />
        ) : (
          <Moon className="size-4" aria-hidden="true" />
        )
      ) : (
        <span className="size-4" aria-hidden="true" />
      )}
    </button>
  );
}
