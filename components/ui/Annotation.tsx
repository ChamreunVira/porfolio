import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface AnnotationProps {
  children: ReactNode;
  tilt?: "left" | "right" | "none";
  className?: string;
}

/** Red-pen margin note, always set in the handwritten font. */
export function Annotation({ children, tilt = "left", className }: AnnotationProps) {
  return (
    <span
      className={cn(
        "inline-block font-hand text-hand-note text-pen",
        tilt === "left" && "-rotate-2",
        tilt === "right" && "rotate-2",
        className,
      )}
    >
      {children}
    </span>
  );
}
