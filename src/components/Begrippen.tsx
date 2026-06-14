import { useMemo, useState } from 'react';
import { WOORDENLIJST } from '../data/woordenlijst';

interface BegripInfo {
  term: string;
  uitleg: string;
}

// Bouw een index van trefwoord -> begrip uit de woordenlijst.
const LOOKUP = new Map<string, BegripInfo>();
const BLOKKEER = new Set(['grade']);

for (const t of WOORDENLIJST) {
  const base = t.term.split('(')[0].replace(/[!?.]+$/, '').trim();
  const keywords = new Set<string>();
  base.split(/\s*\/\s*/).forEach((s) => {
    const v = s.trim();
    if (v) keywords.add(v);
  });
  const haakjes = t.term.match(/\(([^)]+)\)/);
  if (haakjes) {
    haakjes[1].split(/[/,]/).forEach((s) => {
      const v = s.trim().replace(/[!?.]+$/, '');
      if (v) keywords.add(v);
    });
  }
  for (const kw of keywords) {
    const low = kw.toLowerCase();
    if (low.length < 5 || BLOKKEER.has(low)) continue;
    if (!LOOKUP.has(low)) LOOKUP.set(low, { term: base, uitleg: t.uitleg });
  }
}

const SLEUTELS = [...LOOKUP.keys()].sort((a, b) => b.length - a.length);

function escape(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const REGEX =
  SLEUTELS.length > 0
    ? new RegExp('(?<![\\p{L}])(' + SLEUTELS.map(escape).join('|') + ')(?![\\p{L}])', 'giu')
    : null;

type Segment =
  | { type: 'text'; value: string }
  | { type: 'begrip'; value: string; term: string; uitleg: string };

function splits(text: string): Segment[] {
  if (!REGEX) return [{ type: 'text', value: text }];
  const out: Segment[] = [];
  const gebruikt = new Set<string>();
  let last = 0;
  REGEX.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = REGEX.exec(text)) !== null) {
    const low = m[0].toLowerCase();
    const info = LOOKUP.get(low);
    if (!info || gebruikt.has(low)) continue;
    gebruikt.add(low);
    if (m.index > last) out.push({ type: 'text', value: text.slice(last, m.index) });
    out.push({ type: 'begrip', value: m[0], term: info.term, uitleg: info.uitleg });
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push({ type: 'text', value: text.slice(last) });
  return out;
}

/**
 * Toont tekst waarin bekende begrippen onderstreept en aanklikbaar zijn.
 * Klikken toont de uitleg inline (zonder de pagina te verlaten).
 */
export function TekstMetBegrippen({ text, accent }: { text: string; accent: string }) {
  const segments = useMemo(() => splits(text), [text]);
  const [open, setOpen] = useState<number | null>(null);

  const openSeg = open !== null ? segments[open] : null;

  return (
    <>
      {segments.map((s, i) =>
        s.type === 'text' ? (
          <span key={i}>{s.value}</span>
        ) : (
          <button
            key={i}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(open === i ? null : i);
            }}
            aria-expanded={open === i}
            className="underline decoration-dotted underline-offset-2"
            style={{ color: accent }}
          >
            {s.value}
          </button>
        ),
      )}
      {openSeg && openSeg.type === 'begrip' && (
        <span
          onClick={(e) => e.stopPropagation()}
          className="mt-2 block rounded-lg bg-sand-100 p-3 text-sm leading-relaxed text-bark-700"
        >
          <strong>{openSeg.term}</strong> — {openSeg.uitleg}
        </span>
      )}
    </>
  );
}
