import { cn } from "@/lib/cn";

interface TapeProps {
  className?: string;
}

/** Masking tape strip. Position it with className inside a `relative` parent. */
export function Tape({ className }: TapeProps) {
  return <span aria-hidden="true" className={cn("tape pointer-events-none absolute z-10 block h-7 w-28", className)} />;
}
