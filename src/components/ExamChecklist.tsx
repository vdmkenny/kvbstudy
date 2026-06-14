import { useEffect, useMemo, useState } from 'react';
import {
  AcademicCapIcon,
  WrenchScrewdriverIcon,
  QuestionMarkCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/20/solid';
import type { ExamenGids, ExamenGroep, LevelId, TheorieGroep } from '../types';
import { iconVoorThema } from '../themaIcon';

interface Props {
  examen?: ExamenGids;
  accent: string;
  levelId: LevelId;
  geenExamen?: boolean;
}

export function ExamChecklist({ examen, accent, levelId, geenExamen }: Props) {
  const opslagSleutel = `kvb-exam-${levelId}`;

  const [gevinkt, setGevinkt] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem(`kvb-exam-${levelId}`);
      if (raw) return new Set(JSON.parse(raw) as string[]);
    } catch {
      // negeren
    }
    return new Set();
  });
  const [onthuld, setOnthuld] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      localStorage.setItem(opslagSleutel, JSON.stringify([...gevinkt]));
    } catch {
      // negeren
    }
  }, [gevinkt, opslagSleutel]);

  const alleKeys = useMemo(() => {
    if (!examen) return [] as string[];
    const t = examen.theorie.flatMap((g) => g.items.map((_, i) => `T:${g.titel}:${i}`));
    const p = examen.praktijk.flatMap((g) => g.items.map((_, i) => `P:${g.titel}:${i}`));
    return [...t, ...p];
  }, [examen]);

  if (!examen) {
    return (
      <div className="px-5 py-10 text-center text-bark-600">
        Voor dit niveau is nog geen gids beschikbaar.
      </div>
    );
  }

  function toggle(key: string) {
    setGevinkt((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  function onthul(key: string) {
    setOnthuld((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  const totaal = alleKeys.length;
  const klaar = alleKeys.filter((k) => gevinkt.has(k)).length;
  const pct = totaal ? Math.round((klaar / totaal) * 100) : 0;

  return (
    <div className="flex flex-col gap-5 px-5 py-5">
      {geenExamen && (
        <p className="flex items-start gap-2 rounded-2xl border border-sand-300 bg-sand-100 p-4 text-sm leading-relaxed text-bark-700">
          <InformationCircleIcon
            className="mt-0.5 h-5 w-5 shrink-0"
            style={{ color: accent }}
            aria-hidden="true"
          />
          <span>
            Voor dit niveau is er geen examen, enkel cursus en stages. Onderstaande punten zijn een
            oefengids.
          </span>
        </p>
      )}

      {examen.intro && (
        <p className="rounded-2xl bg-sand-100 p-4 text-sm leading-relaxed text-bark-700">
          {examen.intro}
        </p>
      )}

      <div className="flex items-center gap-3">
        <div
          className="h-2.5 flex-1 overflow-hidden rounded-full bg-sand-200"
          role="progressbar"
          aria-label="Afgevinkte punten"
          aria-valuemin={0}
          aria-valuemax={totaal}
          aria-valuenow={klaar}
        >
          <div
            className="h-full rounded-full transition-all"
            style={{ width: `${pct}%`, backgroundColor: accent }}
          />
        </div>
        <span className="text-sm font-medium text-bark-600">
          {klaar}/{totaal}
        </span>
        {klaar > 0 && (
          <button
            type="button"
            onClick={() => setGevinkt(new Set())}
            className="text-xs font-medium text-bark-500 underline"
          >
            Wissen
          </button>
        )}
      </div>

      {/* Theorie */}
      <section className="flex flex-col gap-3">
        <h2
          className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide"
          style={{ color: accent }}
        >
          <AcademicCapIcon className="h-4 w-4" aria-hidden="true" />
          Theorie
        </h2>
        {examen.theorie.map((groep) => (
          <TheorieKaart
            key={groep.titel}
            groep={groep}
            accent={accent}
            gevinkt={gevinkt}
            onthuld={onthuld}
            onToggle={toggle}
            onOnthul={onthul}
          />
        ))}
      </section>

      {/* Praktijk */}
      <section className="flex flex-col gap-3">
        <h2
          className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide"
          style={{ color: accent }}
        >
          <WrenchScrewdriverIcon className="h-4 w-4" aria-hidden="true" />
          Praktijk
        </h2>
        {examen.praktijk.map((groep) => (
          <PraktijkKaart
            key={groep.titel}
            groep={groep}
            accent={accent}
            gevinkt={gevinkt}
            onToggle={toggle}
          />
        ))}
      </section>
    </div>
  );
}

function GroepKop({ titel }: { titel: string }) {
  const Icoon = iconVoorThema(titel);
  return (
    <div className="flex items-center gap-2 border-b border-sand-200 px-4 py-2.5 text-sm font-semibold text-bark-800">
      <Icoon className="h-4 w-4 text-bark-500" aria-hidden="true" />
      {titel}
    </div>
  );
}

function TheorieKaart({
  groep,
  accent,
  gevinkt,
  onthuld,
  onToggle,
  onOnthul,
}: {
  groep: TheorieGroep;
  accent: string;
  gevinkt: Set<string>;
  onthuld: Set<string>;
  onToggle: (k: string) => void;
  onOnthul: (k: string) => void;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-sand-300 bg-surface/70">
      <GroepKop titel={groep.titel} />
      <ul>
        {groep.items.map((item, i) => {
          const key = `T:${groep.titel}:${i}`;
          const checked = gevinkt.has(key);
          const open = onthuld.has(key);
          return (
            <li key={key} className={i > 0 ? 'border-t border-sand-200' : ''}>
              <div className="flex items-start gap-2 px-4 py-3">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => onToggle(key)}
                  aria-label={item.vraag}
                  className="mt-0.5 h-5 w-5 shrink-0 rounded"
                  style={{ accentColor: accent }}
                />
                <div className="min-w-0 flex-1">
                  <span
                    className={[
                      'text-[15px] leading-snug',
                      checked ? 'text-bark-500 line-through' : 'text-bark-700',
                    ].join(' ')}
                  >
                    {item.vraag}
                  </span>
                  {open && item.antwoord && (
                    <p
                      id={`antw-${key}`}
                      className="mt-2 rounded-lg bg-sand-100 p-3 text-sm leading-relaxed text-bark-700"
                    >
                      {item.antwoord}
                    </p>
                  )}
                </div>
                {item.antwoord && (
                  <button
                    type="button"
                    onClick={() => onOnthul(key)}
                    aria-label={open ? `Verberg antwoord op: ${item.vraag}` : `Toon antwoord op: ${item.vraag}`}
                    aria-expanded={open}
                    aria-controls={open ? `antw-${key}` : undefined}
                    className="shrink-0 active:scale-90"
                    style={{ color: open ? accent : 'var(--color-bark-500)' }}
                  >
                    <QuestionMarkCircleIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function PraktijkKaart({
  groep,
  accent,
  gevinkt,
  onToggle,
}: {
  groep: ExamenGroep;
  accent: string;
  gevinkt: Set<string>;
  onToggle: (k: string) => void;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-sand-300 bg-surface/70">
      <GroepKop titel={groep.titel} />
      <ul>
        {groep.items.map((item, i) => {
          const key = `P:${groep.titel}:${i}`;
          const checked = gevinkt.has(key);
          return (
            <li key={key} className={i > 0 ? 'border-t border-sand-200' : ''}>
              <label className="flex cursor-pointer items-start gap-3 px-4 py-3 active:bg-sand-100">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => onToggle(key)}
                  className="mt-0.5 h-5 w-5 shrink-0 rounded"
                  style={{ accentColor: accent }}
                />
                <span
                  className={[
                    'text-[15px] leading-snug',
                    checked ? 'text-bark-500 line-through' : 'text-bark-700',
                  ].join(' ')}
                >
                  {item}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
