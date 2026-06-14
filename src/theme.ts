/** Bepaal het beginthema: opgeslagen voorkeur, anders systeemvoorkeur. */
export function getInitialTheme(): boolean {
  try {
    const s = localStorage.getItem('kvb-theme');
    if (s === 'dark') return true;
    if (s === 'light') return false;
  } catch {
    // negeren
  }
  return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/** Pas de accentkleur aan: in donkere modus iets lichter voor leesbaarheid. */
export function accentVoorModus(hex: string, donker: boolean): string {
  return donker ? `color-mix(in srgb, ${hex}, white 30%)` : hex;
}
