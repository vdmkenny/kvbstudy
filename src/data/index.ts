import type { LevelContent, LevelId } from '../types';
import { kvb1 } from './kvb1';
import { kvb2 } from './kvb2';
import { kvb2plus } from './kvb2plus';
import { kvb3 } from './kvb3';
import { LEVEL_META } from './meta';

/** Volgorde van de niveaus (ook gebruikt voor 'vorige niveaus'). */
const ORDER: LevelId[] = ['kvb1', 'kvb2', 'kvb2plus', 'kvb3', 'kvb3plus', 'kvb4'];

/** Vraag/flashcard-data per niveau (placeholders voor lege niveaus). */
const DATA: Record<LevelId, Pick<LevelContent, 'id' | 'naam' | 'ondertitel' | 'quiz' | 'flashcards'>> =
  {
    kvb1,
    kvb2,
    kvb2plus,
    kvb3,
    kvb3plus: {
      id: 'kvb3plus',
      naam: 'KVB 3+',
      ondertitel: 'Outdoor Voorklimmen (gevorderd)',
      quiz: [],
      flashcards: [],
    },
    kvb4: {
      id: 'kvb4',
      naam: 'KVB 4',
      ondertitel: 'Adventure Climbing',
      quiz: [],
      flashcards: [],
    },
  };

/** Volledige niveaus: data samengevoegd met meta (intro, examen, accent, afbeelding). */
export const LEVELS: LevelContent[] = ORDER.map((id) => ({
  ...DATA[id],
  ...LEVEL_META[id],
}));

export function getLevel(id: LevelId): LevelContent | undefined {
  return LEVELS.find((l) => l.id === id);
}

/** Accentkleur (hex) van een niveau, voor o.a. de KVB-pills. */
export function accentVoor(id: LevelId): string {
  return LEVEL_META[id].accent;
}

/** Korte labels per niveau (gedeeld door knopen, quiz, materiaalgids). */
export const KVB_LABELS: Record<LevelId, string> = {
  kvb1: 'KVB 1',
  kvb2: 'KVB 2',
  kvb2plus: 'KVB 2+',
  kvb3: 'KVB 3',
  kvb3plus: 'KVB 3+',
  kvb4: 'KVB 4',
};

/** Alle beschikbare niveaus die voor `id` komen (voor 'vorige niveaus meenemen'). */
export function vorigeNiveaus(id: LevelId): LevelContent[] {
  const idx = ORDER.indexOf(id);
  return LEVELS.filter((l) => ORDER.indexOf(l.id) < idx && l.beschikbaar);
}
