import { cn } from "@/lib/utils";

export function Divider({
  className,
}: {
  className?: string;
}) {
  return (
    <hr
      className={cn(
        "border-(--color-border)",
        className
      )}
    />
  );
}