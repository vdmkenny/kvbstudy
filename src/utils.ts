/** Fisher–Yates shuffle die een nieuwe array teruggeeft. */
export function shuffle<T>(items: readonly T[]): T[] {
  const result = items.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/** Unieke thema's in volgorde van eerste voorkomen. */
export function uniekeThemas(items: readonly { thema: string }[]): string[] {
  const gezien = new Set<string>();
  const out: string[] = [];
  for (const item of items) {
    if (!gezien.has(item.thema)) {
      gezien.add(item.thema);
      out.push(item.thema);
    }
  }
  return out;
}
