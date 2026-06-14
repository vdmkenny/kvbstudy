// Brede themagroepen voor de oefenfilter (de fijne thema's blijven op de kaart/vraag staan).

const GROEP: Record<string, string> = {
  // Materiaal
  'Bandsling & leeflijn': 'Materiaal',
  Boorhaken: 'Materiaal',
  Gordels: 'Materiaal',
  Helmen: 'Materiaal',
  Klimschoenen: 'Materiaal',
  Materiaal: 'Materiaal',
  Musketons: 'Materiaal',
  Normering: 'Materiaal',
  'Prusik & machard': 'Materiaal',
  Setjes: 'Materiaal',
  Touwen: 'Materiaal',
  Touwzak: 'Materiaal',
  Zekertoestellen: 'Materiaal',

  // Knopen & inbinden
  'Inbinden & knopen': 'Knopen & inbinden',

  // Voorklimmen & setjes
  'Setjes plaatsen': 'Voorklimmen & setjes',
  Timing: 'Voorklimmen & setjes',
  'Toprope & voorklimmen': 'Voorklimmen & setjes',
  'Z-klip': 'Voorklimmen & setjes',

  // Zekeren & vallen
  'Dummy runner': 'Zekeren & vallen',
  Gewichtsverschil: 'Zekeren & vallen',
  Halfautomaat: 'Zekeren & vallen',
  'Orde aan de gordel': 'Zekeren & vallen',
  Partnercheck: 'Zekeren & vallen',
  'Statisch vs dynamisch': 'Zekeren & vallen',
  'Touwcommando’s': 'Zekeren & vallen',
  Voetfout: 'Zekeren & vallen',
  'Voorklimmersval maken': 'Zekeren & vallen',
  Zekeren: 'Zekeren & vallen',
  'Zekeren op lichaam/stand': 'Zekeren & vallen',
  'Zekeren voorklimmer': 'Zekeren & vallen',
  Zekeringsketen: 'Zekeren & vallen',

  // Outdoor & relais
  'Alpiene slipsteek': 'Outdoor & relais',
  Deblokkeren: 'Outdoor & relais',
  'Drie situaties': 'Outdoor & relais',
  Expresstakel: 'Outdoor & relais',
  'Halve mastworp': 'Outdoor & relais',
  Multipitch: 'Outdoor & relais',
  Noodafdaling: 'Outdoor & relais',
  Ombouwen: 'Outdoor & relais',
  Rappellen: 'Outdoor & relais',
  Recupereren: 'Outdoor & relais',
  Relais: 'Outdoor & relais',
  'Scenario’s': 'Outdoor & relais',
  Stappenplan: 'Outdoor & relais',
  Standplaats: 'Outdoor & relais',
  'Topo': 'Outdoor & relais',
  'Toprope / moulinette': 'Outdoor & relais',
  Voorbereiding: 'Outdoor & relais',
  'Voorklimmen zonder ombouwen': 'Outdoor & relais',
  Zelfredding: 'Outdoor & relais',
  Zelfzekering: 'Outdoor & relais',

  // Fysica & geologie
  Ecologie: 'Fysica & geologie',
  Fysica: 'Fysica & geologie',
  Geologie: 'Fysica & geologie',

  // Veiligheid & regels
  Checklist: 'Veiligheid & regels',
  Ethiek: 'Veiligheid & regels',
  Examen: 'Veiligheid & regels',
  'Fairplay & ethiek': 'Veiligheid & regels',
  'KVB-systeem': 'Veiligheid & regels',
  'Ongeval & EHBO': 'Veiligheid & regels',
  'Opwarmen & blessures': 'Veiligheid & regels',
  Verzekering: 'Veiligheid & regels',
};

/** Weergavevolgorde van de groepen. */
export const GROEP_VOLGORDE = [
  'Materiaal',
  'Knopen & inbinden',
  'Voorklimmen & setjes',
  'Zekeren & vallen',
  'Outdoor & relais',
  'Fysica & geologie',
  'Veiligheid & regels',
];

/** Brede groep voor een fijn thema (met veilige fallback). */
export function groepVoor(thema: string): string {
  return GROEP[thema] ?? 'Veiligheid & regels';
}

/** Unieke groepen die voorkomen in een set items, in vaste volgorde. */
export function groepenIn(items: readonly { thema: string }[]): string[] {
  const aanwezig = new Set(items.map((i) => groepVoor(i.thema)));
  return GROEP_VOLGORDE.filter((g) => aanwezig.has(g));
}
