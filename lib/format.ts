/** Formats the monospace index tag, e.g. "[ PROJECT 01 / 04 ]". */
export function formatProjectTag(projectIndex: number, totalProjects: number): string {
  const pad = (value: number) => String(value).padStart(2, "0");
  return `[ PROJECT ${pad(projectIndex)} / ${pad(totalProjects)} ]`;
}
