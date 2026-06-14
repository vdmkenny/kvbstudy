import {
  LockClosedIcon,
  ChevronRightIcon,
  LinkIcon,
  BookOpenIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/20/solid';
import type { LevelId } from '../types';
import { LEVELS } from '../data';
import { Footer } from './Footer';

interface Props {
  onNiveau: (id: LevelId) => void;
  onKnopen: () => void;
  onWoordenlijst: () => void;
  onMateriaal: () => void;
}

export function Home({ onNiveau, onKnopen, onWoordenlijst, onMateriaal }: Props) {
  return (
    <div className="fade-in flex min-h-full flex-col">
      <header className="px-5 pb-2 pt-8 text-center">
        <svg
          viewBox="0 0 64 64"
          className="mx-auto mb-3 h-16 w-16"
          role="img"
          aria-label="KVB Studie logo"
        >
          <rect width="64" height="64" rx="16" fill="var(--color-clay-500)" />
          <path d="M11 45 L26 21 L34 33 L41 22 L53 45 Z" fill="#f4eee1" />
          <path d="M26 21 L31 29 L27 31 L22 26 Z" fill="var(--color-moss-500)" />
          <path d="M41 22 L46 30 L42 32 L38 27 Z" fill="var(--color-moss-500)" />
          <path
            d="M14 48 q12 -6 24 0 q12 6 13 -1"
            fill="none"
            stroke="#f4eee1"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <h1 className="app-title">KVB Studie</h1>
        <p className="mt-2 text-sm text-bark-600">
          Oefen voor je Klimvaardigheidsbewijs: info, examengids en theorie.
        </p>
      </header>

      <div className="flex flex-col gap-3 px-5 py-5">
        {LEVELS.map((level) => {
          const disabled = !level.beschikbaar;
          const accent = level.accent ?? '#6c6253';
          return (
            <button
              key={level.id}
              type="button"
              disabled={disabled}
              onClick={() => onNiveau(level.id)}
              className={[
                'flex items-stretch gap-3 overflow-hidden rounded-2xl border bg-white/70 text-left transition',
                disabled
                  ? 'cursor-not-allowed border-sand-200 opacity-60'
                  : 'border-sand-300 shadow-sm active:scale-[0.99] hover:border-bark-500/50',
              ].join(' ')}
            >
              <div className="w-1.5 shrink-0" style={{ backgroundColor: accent }} />
              {level.afbeelding && (
                <img
                  src={level.afbeelding}
                  alt=""
                  className="my-2 h-20 w-[57px] shrink-0 rounded-md object-cover"
                  loading="lazy"
                />
              )}
              <div className="flex min-w-0 flex-1 flex-col justify-center py-3 pr-2">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-lg font-bold text-bark-800">{level.naam}</span>
                  {disabled && <LockClosedIcon className="h-4 w-4 text-bark-500" aria-hidden="true" />}
                </div>
                <p className="truncate text-sm text-bark-600">{level.ondertitel}</p>
                {!disabled ? (
                  <p className="mt-1 text-xs text-bark-500">
                    {level.quiz.length} vragen · {level.flashcards.length} flashcards
                  </p>
                ) : (
                  <p className="mt-1 text-xs text-bark-500">Nog niet beschikbaar</p>
                )}
              </div>
              {!disabled && (
                <ChevronRightIcon
                  className="my-auto mr-3 h-5 w-5 shrink-0 text-bark-500"
                  aria-hidden="true"
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="px-5">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-bark-500">
          Naslag
        </h2>
        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={onKnopen}
            className="flex items-center gap-3 rounded-2xl border border-sand-300 bg-white/70 p-4 text-left shadow-sm transition active:scale-[0.99]"
          >
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white"
              style={{ backgroundColor: 'var(--color-clay-500)' }}
            >
              <LinkIcon className="h-6 w-6" aria-hidden="true" />
            </span>
            <div className="flex-1">
              <div className="font-semibold text-bark-800">Knopengids</div>
              <div className="text-sm text-bark-600">Achtknoop, mastworp, alpiene slipsteek...</div>
            </div>
            <ChevronRightIcon className="h-5 w-5 text-bark-500" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={onWoordenlijst}
            className="flex items-center gap-3 rounded-2xl border border-sand-300 bg-white/70 p-4 text-left shadow-sm transition active:scale-[0.99]"
          >
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white"
              style={{ backgroundColor: 'var(--color-moss-500)' }}
            >
              <BookOpenIcon className="h-6 w-6" aria-hidden="true" />
            </span>
            <div className="flex-1">
              <div className="font-semibold text-bark-800">Woordenlijst</div>
              <div className="text-sm text-bark-600">Caillou, Mou, Sec, vangstoot, relais...</div>
            </div>
            <ChevronRightIcon className="h-5 w-5 text-bark-500" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={onMateriaal}
            className="press flex items-center gap-3 rounded-2xl border border-sand-300 bg-white/70 p-4 text-left shadow-sm"
          >
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white"
              style={{ backgroundColor: 'var(--color-bark-600)' }}
            >
              <WrenchScrewdriverIcon className="h-6 w-6" aria-hidden="true" />
            </span>
            <div className="flex-1">
              <div className="font-semibold text-bark-800">Materiaalgids</div>
              <div className="text-sm text-bark-600">Gordels, musketons, zekertoestellen...</div>
            </div>
            <ChevronRightIcon className="h-5 w-5 text-bark-500" aria-hidden="true" />
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
