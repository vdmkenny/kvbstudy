import { useEffect, useMemo, useState } from 'react';
import { ArrowLeftIcon, CheckIcon, XMarkIcon } from '@heroicons/react/20/solid';
import type { LevelId, QuizQuestion } from '../types';
import { shuffle } from '../utils';
import { iconVoorThema } from '../themaIcon';
import { groepVoor } from '../themas';
import { KvbPill } from './KvbPill';
import { TekstMetBegrippen } from './Begrippen';

type BronVraag = QuizQuestion & { bron: LevelId };
type Fout = { vraag: string; gekozenTekst: string; juisteTekst: string; uitleg?: string };

interface Props {
  vragen: BronVraag[];
  /** Gekozen themagroepen; leeg = alle. */
  groepen: string[];
  accent: string;
  titel: string;
  /** Toon de KVB-bronpill (bij het mixen van vorige niveaus). */
  toonBron: boolean;
  onTerug: () => void;
}

export function Quiz({ vragen: alle, groepen, accent, titel, toonBron, onTerug }: Props) {
  const [ronde, setRonde] = useState(0);
  const groepKey = groepen.join('|');

  const vragen = useMemo(() => {
    const basis =
      groepen.length === 0 ? alle : alle.filter((q) => groepen.includes(groepVoor(q.thema)));
    return shuffle(basis).map((q) => ({
      ...q,
      geshuffeldeOpties: shuffle(q.opties.map((tekst, idx) => ({ tekst, juist: idx === q.juist }))),
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alle, groepKey, ronde]);

  const [index, setIndex] = useState(0);
  const [gekozen, setGekozen] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [fouten, setFouten] = useState<Fout[]>([]);
  const [klaar, setKlaar] = useState(false);

  const vraag = vragen[index];

  function kies(optieIndex: number) {
    if (gekozen !== null) return;
    setGekozen(optieIndex);
    const optie = vraag.geshuffeldeOpties[optieIndex];
    if (optie.juist) {
      setScore((s) => s + 1);
    } else {
      const juist = vraag.geshuffeldeOpties.find((o) => o.juist);
      setFouten((f) => [
        ...f,
        {
          vraag: vraag.vraag,
          gekozenTekst: optie.tekst,
          juisteTekst: juist ? juist.tekst : '',
          uitleg: vraag.uitleg,
        },
      ]);
    }
  }

  function volgende() {
    if (index + 1 >= vragen.length) setKlaar(true);
    else {
      setIndex((i) => i + 1);
      setGekozen(null);
    }
  }

  function opnieuw() {
    setRonde((r) => r + 1);
    setIndex(0);
    setGekozen(null);
    setScore(0);
    setFouten([]);
    setKlaar(false);
  }

  // Toetsenbord: cijfers 1-N kiezen een antwoord; Enter/spatie gaat verder.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (klaar) return;
      if (gekozen === null) {
        const n = Number(e.key);
        if (Number.isInteger(n) && n >= 1 && n <= vraag.geshuffeldeOpties.length) {
          e.preventDefault();
          kies(n - 1);
        }
      } else if (e.key === 'Enter' || e.key === ' ') {
        if (e.target instanceof HTMLButtonElement) return; // laat de knop zelf reageren
        e.preventDefault();
        volgende();
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gekozen, klaar, index, vragen]);

  if (klaar) {
    const pct = Math.round((score / vragen.length) * 100);
    const geslaagd = pct >= 75;
    return (
      <div className="fade-in flex flex-1 flex-col gap-6 overflow-y-auto px-6 py-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div
            role="img"
            aria-label={`Score ${pct} procent, ${score} van ${vragen.length} juist`}
            className="result-pop flex h-28 w-28 items-center justify-center rounded-full text-3xl font-bold text-white"
            style={{ backgroundColor: geslaagd ? 'var(--color-moss-500)' : 'var(--color-clay-500)' }}
          >
            {pct}%
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold text-bark-800">
              {score} van {vragen.length} juist
            </h2>
            <p className="mt-1 text-sm text-bark-600">
              {geslaagd
                ? 'Mooi, je haalt de 75 %-grens van de evaluatie.'
                : 'Nog onder de 75 %-grens, blijf oefenen.'}
            </p>
          </div>
        </div>

        {fouten.length > 0 && (
          <section className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-bark-500">
              Foute vragen ({fouten.length})
            </h3>
            {fouten.map((f, i) => (
              <div key={i} className="rounded-xl border border-sand-300 bg-surface/70 p-4 text-left">
                <p className="font-medium text-bark-800">{f.vraag}</p>
                <p className="mt-2 flex gap-2 text-sm">
                  <XMarkIcon className="h-5 w-5 shrink-0 text-clay-600" aria-hidden="true" />
                  <span className="text-bark-700">{f.gekozenTekst}</span>
                </p>
                <p className="mt-1 flex gap-2 text-sm">
                  <CheckIcon className="h-5 w-5 shrink-0 text-moss-600" aria-hidden="true" />
                  <span className="text-bark-800">{f.juisteTekst}</span>
                </p>
                {f.uitleg && (
                  <p className="mt-2 text-sm leading-relaxed text-bark-600">
                    <TekstMetBegrippen text={f.uitleg} accent={accent} />
                  </p>
                )}
              </div>
            ))}
          </section>
        )}

        <div className="flex w-full max-w-xs flex-col gap-3 self-center pt-2">
          <button
            type="button"
            onClick={opnieuw}
            className="rounded-xl px-5 py-3 font-semibold text-white active:scale-[0.99]"
            style={{ backgroundColor: accent }}
          >
            Opnieuw
          </button>
          <button
            type="button"
            onClick={onTerug}
            className="rounded-xl border border-sand-300 bg-surface px-5 py-3 font-semibold text-bark-700 active:scale-[0.99]"
          >
            Terug
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-in flex flex-1 flex-col px-5 py-6">
      <header className="mb-4 flex items-center gap-3">
        <button
          type="button"
          onClick={onTerug}
          aria-label="Terug"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-surface/70 text-bark-700 shadow-sm active:scale-95"
        >
          <ArrowLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <div className="flex-1">
          <div className="flex items-center justify-between text-xs text-bark-600">
            <span>
              {titel} · {index + 1}/{vragen.length}
            </span>
            <span>
              Score: {score}
              {gekozen !== null || index > 0 ? `/${index + (gekozen !== null ? 1 : 0)}` : ''}
            </span>
          </div>
          <div
            className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-sand-200"
            role="progressbar"
            aria-label="Voortgang quiz"
            aria-valuemin={0}
            aria-valuemax={vragen.length}
            aria-valuenow={index + (gekozen !== null ? 1 : 0)}
          >
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${((index + (gekozen !== null ? 1 : 0)) / vragen.length) * 100}%`,
                backgroundColor: accent,
              }}
            />
          </div>
        </div>
      </header>

      {(() => {
        const ThemaIcon = iconVoorThema(vraag.thema);
        return (
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
              style={{ backgroundColor: 'var(--color-sand-100)', color: accent }}
            >
              <ThemaIcon className="h-3.5 w-3.5" aria-hidden="true" />
              {vraag.thema}
            </span>
            {toonBron && <KvbPill id={vraag.bron} />}
          </div>
        );
      })()}
      <h2 className="mb-5 font-serif text-xl leading-snug text-bark-800">{vraag.vraag}</h2>

      <div className="flex flex-col gap-3">
        {vraag.geshuffeldeOpties.map((optie, i) => {
          const isGekozen = gekozen === i;
          const toonJuist = gekozen !== null && optie.juist;
          const toonFout = isGekozen && !optie.juist;
          return (
            <button
              key={i}
              type="button"
              disabled={gekozen !== null}
              onClick={() => kies(i)}
              className={[
                'flex items-center justify-between gap-3 rounded-xl border p-4 text-left transition',
                toonJuist
                  ? 'border-moss-500 bg-moss-500/10 text-bark-800'
                  : toonFout
                    ? 'border-clay-500 bg-clay-500/10 text-bark-800'
                    : gekozen !== null
                      ? 'border-sand-200 bg-surface/40 text-bark-500'
                      : 'border-sand-300 bg-surface/80 text-bark-800 active:scale-[0.99]',
              ].join(' ')}
            >
              <span className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-xs font-semibold"
                  style={{ borderColor: 'var(--color-sand-300)', color: 'var(--color-bark-500)' }}
                >
                  {i + 1}
                </span>
                <span className="text-sm">{optie.tekst}</span>
              </span>
              {toonJuist && (
                <CheckIcon className="h-5 w-5 shrink-0 text-moss-600" aria-label="Juist antwoord" />
              )}
              {toonFout && (
                <XMarkIcon className="h-5 w-5 shrink-0 text-clay-600" aria-label="Fout antwoord" />
              )}
            </button>
          );
        })}
      </div>

      {gekozen !== null && vraag.uitleg && (
        <div
          role="status"
          aria-live="polite"
          className="mt-4 rounded-xl border border-sand-300 bg-surface/70 p-4 text-sm leading-relaxed text-bark-700"
        >
          <TekstMetBegrippen text={vraag.uitleg} accent={accent} />
        </div>
      )}

      {gekozen !== null && (
        <button
          type="button"
          onClick={volgende}
          className="mt-6 rounded-xl px-5 py-3 font-semibold text-white active:scale-[0.99]"
          style={{ backgroundColor: accent }}
        >
          {index + 1 >= vragen.length ? 'Bekijk resultaat' : 'Volgende'}
        </button>
      )}
    </div>
  );
}
