import { useMemo, useState } from 'react';
import {
  ArrowLeftIcon,
  ClipboardDocumentCheckIcon,
  RectangleStackIcon,
  LinkIcon,
  ChevronRightIcon,
} from '@heroicons/react/20/solid';
import type { LevelContent, StudieModus } from '../types';
import { vorigeNiveaus } from '../data';
import { KNOPEN } from '../data/knopen';
import { uniekeThemas } from '../utils';
import { ExamChecklist } from './ExamChecklist';
import { Footer } from './Footer';

type LevelTab = 'info' | 'examen' | 'oefenen';

interface Props {
  level: LevelContent;
  tab: LevelTab;
  onTab: (tab: LevelTab) => void;
  onTerug: () => void;
  onStart: (modus: StudieModus, thema: string, vorige: boolean) => void;
  onKnoop: (id: string) => void;
}

export function LevelPage({ level, tab, onTab, onTerug, onStart, onKnoop }: Props) {
  const accent = level.accent ?? '#6c6253';

  const tabs: { id: LevelTab; label: string }[] = [
    { id: 'info', label: 'Info' },
    ...(level.examen
      ? [{ id: 'examen' as LevelTab, label: level.heeftExamen ? 'Examengids' : 'Oefengids' }]
      : []),
    { id: 'oefenen', label: 'Oefenen' },
  ];
  const actieveTab: LevelTab = tab === 'examen' && !level.examen ? 'info' : tab;

  return (
    <div className="fade-in flex min-h-full flex-col">
      <header className="px-5 pb-3 pt-6" style={{ borderBottom: `3px solid ${accent}` }}>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onTerug}
            aria-label="Terug"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-bark-700 shadow-sm active:scale-95"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
          {level.afbeelding && (
            <img
              src={level.afbeelding}
              alt={`Kaart ${level.naam}`}
              className="h-14 w-10 rounded-md object-cover"
              loading="lazy"
            />
          )}
          <div>
            <h1 className="font-serif text-2xl font-bold text-bark-800">{level.naam}</h1>
            <p className="text-sm text-bark-600">{level.ondertitel}</p>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Onderdelen"
        className="sticky top-0 z-10 flex border-b border-sand-300 bg-parchment/95 backdrop-blur"
      >
        {tabs.map((t) => {
          const actief = t.id === actieveTab;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={actief}
              onClick={() => onTab(t.id)}
              className="flex-1 px-2 py-3 text-sm font-semibold transition"
              style={
                actief
                  ? { color: accent, borderBottom: `2px solid ${accent}` }
                  : { color: 'var(--color-bark-500)' }
              }
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="flex-1">
        {actieveTab === 'info' && <InfoTab level={level} accent={accent} onKnoop={onKnoop} />}
        {actieveTab === 'examen' && (
          <ExamChecklist
            examen={level.examen}
            accent={accent}
            levelId={level.id}
            geenExamen={!level.heeftExamen}
          />
        )}
        {actieveTab === 'oefenen' && <PracticeTab level={level} accent={accent} onStart={onStart} />}
      </div>

      <Footer />
    </div>
  );
}

function InfoTab({
  level,
  accent,
  onKnoop,
}: {
  level: LevelContent;
  accent: string;
  onKnoop: (id: string) => void;
}) {
  const knopen = KNOPEN.filter((k) => k.kvb?.includes(level.id));
  return (
    <div className="flex flex-col gap-5 px-5 py-5">
      <section className="flex flex-col gap-3">
        {(level.intro ?? []).map((para, i) => (
          <p key={i} className="text-[15px] leading-relaxed text-bark-700">
            {para}
          </p>
        ))}
      </section>

      {knopen.length > 0 && (
        <section>
          <h2 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-bark-500">
            <LinkIcon className="h-4 w-4" />
            Knopen voor dit niveau
          </h2>
          <div className="overflow-hidden rounded-2xl border border-sand-300 bg-white/70">
            {knopen.map((k, i) => (
              <button
                key={k.id}
                type="button"
                onClick={() => onKnoop(k.id)}
                className={[
                  'flex w-full items-center gap-2 px-4 py-3 text-left active:bg-sand-100',
                  i > 0 ? 'border-t border-sand-200' : '',
                ].join(' ')}
              >
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: accent }}
                />
                <span className="flex-1 text-[15px] text-bark-800">{k.naam}</span>
                <ChevronRightIcon className="h-4 w-4 text-bark-500" />
              </button>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function PracticeTab({
  level,
  accent,
  onStart,
}: {
  level: LevelContent;
  accent: string;
  onStart: (modus: StudieModus, thema: string, vorige: boolean) => void;
}) {
  const [thema, setThema] = useState('all');
  const [vorige, setVorige] = useState(false);

  const vorigeBeschikbaar = vorigeNiveaus(level.id).length > 0;

  const { vragen, kaarten, themas } = useMemo(() => {
    const niveaus = vorige ? [...vorigeNiveaus(level.id), level] : [level];
    const v = niveaus.flatMap((l) => l.quiz);
    const k = niveaus.flatMap((l) => l.flashcards);
    return { vragen: v, kaarten: k, themas: uniekeThemas([...v, ...k]) };
  }, [level, vorige]);

  // Reset thema als die niet meer bestaat in de huidige set.
  const themaGeldig = thema === 'all' || themas.includes(thema);
  const actiefThema = themaGeldig ? thema : 'all';

  const quizCount =
    actiefThema === 'all' ? vragen.length : vragen.filter((q) => q.thema === actiefThema).length;
  const kaartCount =
    actiefThema === 'all'
      ? kaarten.length
      : kaarten.filter((f) => f.thema === actiefThema).length;

  return (
    <div className="flex flex-col gap-5 px-5 py-5">
      {vorigeBeschikbaar && (
        <label className="flex items-center justify-between gap-3 rounded-2xl border border-sand-300 bg-white/70 p-4">
          <span className="flex-1">
            <span className="block font-medium text-bark-800">Vorige niveaus meenemen</span>
            <span className="block text-sm text-bark-600">
              Mix er ook vragen uit de eerdere KVB's bij.
            </span>
          </span>
          <input
            type="checkbox"
            checked={vorige}
            onChange={(e) => {
              setVorige(e.target.checked);
              setThema('all');
            }}
            className="h-6 w-6 shrink-0 rounded"
            style={{ accentColor: accent }}
          />
        </label>
      )}

      <div>
        <label htmlFor="thema" className="mb-2 block text-sm font-medium text-bark-700">
          Thema
        </label>
        <select
          id="thema"
          value={actiefThema}
          onChange={(e) => setThema(e.target.value)}
          className="w-full rounded-xl border border-sand-300 bg-white px-4 py-3 text-bark-800 focus:outline-none"
          style={{ outlineColor: accent }}
        >
          <option value="all">Alle thema&apos;s</option>
          {themas.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-3">
        <button
          type="button"
          disabled={quizCount === 0}
          onClick={() => onStart('quiz', actiefThema, vorige)}
          className="flex items-center gap-4 rounded-2xl p-5 text-left text-white shadow-sm transition active:scale-[0.99] disabled:opacity-50"
          style={{ backgroundColor: accent }}
        >
          <ClipboardDocumentCheckIcon className="h-8 w-8 shrink-0" />
          <div>
            <div className="text-lg font-semibold">Quiz</div>
            <div className="text-sm opacity-90">
              {quizCount} {quizCount === 1 ? 'meerkeuzevraag' : 'meerkeuzevragen'}
            </div>
          </div>
        </button>

        <button
          type="button"
          disabled={kaartCount === 0}
          onClick={() => onStart('flashcards', actiefThema, vorige)}
          className="flex items-center gap-4 rounded-2xl border-2 bg-white p-5 text-left shadow-sm transition active:scale-[0.99] disabled:opacity-50"
          style={{ borderColor: accent, color: accent }}
        >
          <RectangleStackIcon className="h-8 w-8 shrink-0" />
          <div>
            <div className="text-lg font-semibold">Flashcards</div>
            <div className="text-sm opacity-90">
              {kaartCount} {kaartCount === 1 ? 'kaart' : 'kaarten'}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
