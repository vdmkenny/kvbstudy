import { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeftIcon,
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  ArrowPathIcon,
} from '@heroicons/react/20/solid';
import type { Flashcard } from '../types';
import { shuffle } from '../utils';
import { iconVoorThema } from '../themaIcon';
import { groepVoor } from '../themas';
import { TekstMetBegrippen } from './Begrippen';

interface Props {
  kaarten: Flashcard[];
  /** Gekozen themagroepen; leeg = alle. */
  groepen: string[];
  accent: string;
  titel: string;
  onTerug: () => void;
}

export function Flashcards({ kaarten: alle, groepen, accent, titel, onTerug }: Props) {
  const [ronde, setRonde] = useState(0);
  const groepKey = groepen.join('|');

  const kaarten = useMemo(() => {
    const basis =
      groepen.length === 0 ? alle : alle.filter((f) => groepen.includes(groepVoor(f.thema)));
    return shuffle(basis);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alle, groepKey, ronde]);

  const [index, setIndex] = useState(0);
  const [omgedraaid, setOmgedraaid] = useState(false);

  const kaart = kaarten[index];
  const ThemaIcon = iconVoorThema(kaart.thema);

  function ga(richting: -1 | 1) {
    setOmgedraaid(false);
    setIndex((i) => (i + richting + kaarten.length) % kaarten.length);
  }

  function schud() {
    setRonde((r) => r + 1);
    setIndex(0);
    setOmgedraaid(false);
  }

  // Toetsenbord: links/rechts bladeren, spatie draait de kaart om.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        ga(-1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        ga(1);
      } else if (e.key === ' ' || e.key === 'Enter') {
        if (e.target instanceof HTMLButtonElement) return; // knoppen reageren zelf
        e.preventDefault();
        setOmgedraaid((v) => !v);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kaarten.length]);

  return (
    <div className="fade-in flex flex-1 flex-col px-5 py-6">
      <header className="mb-4 flex items-center gap-3">
        <button
          type="button"
          onClick={onTerug}
          aria-label="Terug"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-bark-700 shadow-sm active:scale-95"
        >
          <ArrowLeftIcon className="h-5 w-5" />
        </button>
        <div className="flex-1 text-xs text-bark-600">
          {titel} · kaart {index + 1}/{kaarten.length}
        </div>
        <button
          type="button"
          onClick={schud}
          className="flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1.5 text-xs font-medium text-bark-700 shadow-sm active:scale-95"
        >
          <ArrowPathIcon className="h-4 w-4" />
          Schudden
        </button>
      </header>

      <div
        role="button"
        tabIndex={0}
        onClick={() => setOmgedraaid((v) => !v)}
        aria-pressed={omgedraaid}
        className="flip-card relative flex-1 cursor-pointer outline-none"
      >
        <div className={`flip-inner absolute inset-0 ${omgedraaid ? 'is-flipped' : ''}`}>
          {/* Voorkant */}
          <div
            aria-hidden={omgedraaid}
            className="flip-face absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-3xl border border-sand-300 bg-white p-6 text-center shadow-sm"
          >
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
              style={{ backgroundColor: 'var(--color-sand-100)', color: accent }}
            >
              <ThemaIcon className="h-3.5 w-3.5" aria-hidden="true" />
              {kaart.thema}
            </span>
            <p className="font-serif text-2xl leading-snug text-bark-800">{kaart.voorkant}</p>
            <span className="absolute bottom-5 text-xs text-bark-500" aria-hidden="true">
              Tik om om te draaien
            </span>
          </div>

          {/* Achterkant */}
          <div
            aria-hidden={!omgedraaid}
            className="flip-face flip-back absolute inset-0 flex flex-col items-center justify-center gap-3 overflow-y-auto rounded-3xl border-2 p-6 text-center shadow-sm"
            style={{ borderColor: accent, backgroundColor: 'var(--color-sand-100)' }}
          >
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium text-white"
              style={{ backgroundColor: accent }}
            >
              <ThemaIcon className="h-3.5 w-3.5" aria-hidden="true" />
              {kaart.thema}
            </span>
            <p className="text-base leading-relaxed text-bark-800">
              <TekstMetBegrippen text={kaart.achterkant} accent={accent} />
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={() => ga(-1)}
          aria-label="Vorige"
          className="flex items-center gap-1.5 rounded-xl border border-sand-300 bg-white px-4 py-3 font-medium text-bark-700 active:scale-95"
        >
          <ArrowLeftCircleIcon className="h-5 w-5" />
          Vorige
        </button>
        <button
          type="button"
          onClick={() => ga(1)}
          aria-label="Volgende"
          className="flex items-center gap-1.5 rounded-xl px-4 py-3 font-medium text-white active:scale-95"
          style={{ backgroundColor: accent }}
        >
          Volgende
          <ArrowRightCircleIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
