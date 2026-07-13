import * as React from 'react';
import {cva, type VariantProps} from 'class-variance-authority';
import {cn} from '@/lib/utils';

const surfaceVariants = cva(
  "rounded-xl border transition-colors",
  {
    variants : {
      variant : {
        default: "bg-(--color-surface) border-(--color-border)",
        elevated: "bg-(--color-surface-elevated) shadow-lg",
        ghost: "border-transparent bg-transparent",
      }, 
      padding : {
        none : "",
        sm : "p-4",
        md : "p-6",
        lg : "p-8",
      },
    },
    defaultVariants : {
      variant : "default",
      padding : "md",
    }
  }
);

export interface SurfaceProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof surfaceVariants> {}

export function Surface ({
  className,
  variant,
  padding,
  ...props
} : SurfaceProps) {
  return (
    <div
      className = {cn(surfaceVariants({variant, padding}), className)}{...props}
    />
  )
}