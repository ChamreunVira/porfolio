type ClassValue = string | false | null | undefined;

/** Joins truthy class names into a single string. */
export function cn(...classValues: ClassValue[]): string {
  return classValues.filter(Boolean).join(" ");
}
