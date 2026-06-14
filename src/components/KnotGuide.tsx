import { useState } from 'react';
import {
  ArrowLeftIcon,
  ChevronDownIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid';
import { KNOPEN } from '../data/knopen';
import { iconVoorThema } from '../themaIcon';
import { KvbPill } from './KvbPill';

interface Props {
  openId?: string;
  onTerug: () => void;
}

const CATEGORIE_VOLGORDE = [
  'Inbinden',
  'Stopknoop',
  'Standplaats',
  'Redding',
  'Verbinden',
  'Optioneel',
];

export function KnotGuide({ openId, onTerug }: Props) {
  const [open, setOpen] = useState<string | null>(openId ?? null);

  const categorieen = CATEGORIE_VOLGORDE.filter((c) => KNOPEN.some((k) => k.categorie === c));

  return (
    <div className="fade-in flex min-h-full flex-col">
      <header className="flex items-center gap-3 px-5 pb-3 pt-6">
        <button
          type="button"
          onClick={onTerug}
          aria-label="Terug"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-bark-700 shadow-sm active:scale-95"
        >
          <ArrowLeftIcon className="h-5 w-5" />
        </button>
        <h1 className="font-serif text-2xl font-bold text-bark-800">Knopengids</h1>
      </header>

      <p className="px-5 pb-4 text-sm leading-relaxed text-bark-600">
        Stap voor stap, maar oefen elke knoop onder begeleiding. Waar beschikbaar link je door naar
        een demonstratie van Vertical Thinking of Animated Knots.
      </p>

      <div className="flex flex-col gap-5 px-5 pb-8">
        {categorieen.map((cat) => (
          <section key={cat}>
            <h2 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-bark-500">
              <CategorieIcoon cat={cat} />
              {cat}
            </h2>
            <div className="flex flex-col gap-2">
              {KNOPEN.filter((k) => k.categorie === cat).map((knoop) => {
                const isOpen = open === knoop.id;
                return (
                  <div
                    key={knoop.id}
                    className="overflow-hidden rounded-2xl border border-sand-300 bg-white/70"
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : knoop.id)}
                      aria-expanded={isOpen}
                      aria-controls={`knoop-${knoop.id}`}
                      className="press flex w-full items-center gap-2 px-4 py-3 text-left active:bg-sand-100"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold text-bark-800">{knoop.naam}</div>
                        {(() => {
                          const namen = [
                            knoop.altNl,
                            knoop.fr && `${knoop.fr} (FR)`,
                            knoop.en && `${knoop.en} (EN)`,
                          ]
                            .filter(Boolean)
                            .join(' · ');
                          return namen ? (
                            <div className="text-xs text-bark-500">{namen}</div>
                          ) : null;
                        })()}
                      </div>
                      <ChevronDownIcon
                        className={[
                          'h-5 w-5 shrink-0 text-bark-500 transition-transform',
                          isOpen ? 'rotate-180' : '',
                        ].join(' ')}
                      />
                    </button>

                    {isOpen && (
                      <div
                        id={`knoop-${knoop.id}`}
                        className="border-t border-sand-200 px-4 pb-4 pt-3"
                      >
                        <p className="text-sm leading-relaxed text-bark-700">{knoop.waarvoor}</p>

                        <ol className="mt-3 flex flex-col gap-2">
                          {knoop.stappen.map((stap, i) => (
                            <li key={i} className="flex gap-3 text-sm text-bark-700">
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-clay-500 text-xs font-semibold text-white">
                                {i + 1}
                              </span>
                              <span className="pt-0.5 leading-snug">{stap}</span>
                            </li>
                          ))}
                        </ol>

                        <div className="mt-4 flex flex-wrap items-center gap-2">
                          <KvbPill id={knoop.kvb?.[0]} />
                          {knoop.videos && knoop.videos.length > 0 && (
                            <div className="ml-auto flex flex-wrap items-center gap-2">
                              {knoop.videos.map((v) => (
                                <a
                                  key={v.url + v.bron}
                                  href={v.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-white"
                                  style={{
                                    backgroundColor:
                                      v.bron === 'vt'
                                        ? 'var(--color-clay-500)'
                                        : 'var(--color-moss-500)',
                                  }}
                                >
                                  <PlayCircleIcon className="h-4 w-4" />
                                  {v.bron === 'vt' ? 'Vertical Thinking' : 'Animated Knots'}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}

        <p className="pt-2 text-center text-xs text-bark-500">
          Demonstraties met dank aan Vertical Thinking en Animated Knots. De links openen hun
          eigen pagina.
        </p>
      </div>
    </div>
  );
}

function CategorieIcoon({ cat }: { cat: string }) {
  const Icoon = iconVoorThema(cat);
  return <Icoon className="h-4 w-4" aria-hidden="true" />;
}
