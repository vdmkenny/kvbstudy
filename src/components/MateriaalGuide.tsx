import { useState } from 'react';
import { ArrowLeftIcon, ChevronDownIcon, TagIcon } from '@heroicons/react/20/solid';
import type { MateriaalItem } from '../types';
import { MATERIAAL } from '../data/materiaal';
import { iconVoorThema } from '../themaIcon';
import { KvbPill } from './KvbPill';

interface Props {
  onTerug: () => void;
}

const CATEGORIE_VOLGORDE = [
  'Gordel en schoenen',
  'Musketons',
  'Touwen',
  'Zekertoestellen',
  'Tussenzekering en relais',
  'Helm en bescherming',
  'Outdoor en redding',
];

export function MateriaalGuide({ onTerug }: Props) {
  const [open, setOpen] = useState<string | null>(null);

  const categorieen = CATEGORIE_VOLGORDE.filter((c) => MATERIAAL.some((m) => m.categorie === c));

  function kaart(item: MateriaalItem) {
    const isOpen = open === item.id;
    const paneelId = `mat-${item.id}`;
    return (
      <div
        key={item.id}
        className="overflow-hidden rounded-2xl border border-sand-300 bg-surface/70"
      >
        <button
          type="button"
          onClick={() => setOpen(isOpen ? null : item.id)}
          aria-expanded={isOpen}
          aria-controls={paneelId}
          className="press flex w-full items-center gap-2 px-4 py-3 text-left"
        >
          <div className="min-w-0 flex-1">
            <div className="font-semibold text-bark-800">{item.naam}</div>
            {item.synoniemen && item.synoniemen.length > 0 && (
              <div className="text-xs text-bark-500">{item.synoniemen.join(', ')}</div>
            )}
          </div>
          <ChevronDownIcon
            className={[
              'h-5 w-5 shrink-0 text-bark-500 transition-transform duration-200',
              isOpen ? 'rotate-180' : '',
            ].join(' ')}
            aria-hidden="true"
          />
        </button>

        {isOpen && (
          <div id={paneelId} className="border-t border-sand-200 px-4 pb-4 pt-3">
            <p className="text-sm leading-relaxed text-bark-700">{item.beschrijving}</p>

            {item.voorbeelden && item.voorbeelden.length > 0 && (
              <div className="mt-3">
                <div className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-bark-500">
                  <TagIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  Voorbeelden
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.voorbeelden.map((v) => (
                    <span
                      key={v}
                      className="rounded-lg bg-sand-100 px-2.5 py-1 text-xs text-bark-700"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-4">
              <KvbPill id={item.kvb} />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="fade-in flex min-h-full flex-col">
      <header className="flex items-center gap-3 px-5 pb-3 pt-6">
        <button
          type="button"
          onClick={onTerug}
          aria-label="Terug naar startscherm"
          className="press flex h-9 w-9 items-center justify-center rounded-full bg-surface/70 text-bark-700 shadow-sm"
        >
          <ArrowLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <h1 className="font-serif text-2xl font-bold text-bark-800">Materiaalgids</h1>
      </header>

      <p className="px-5 pb-4 text-sm leading-relaxed text-bark-600">
        Het materiaal uit de cursus, met enkele bekende productvoorbeelden. Merken dienen enkel
        ter illustratie.
      </p>

      <div className="flex flex-col gap-5 px-5 pb-8">
        {categorieen.map((cat) => {
          const Icoon = iconVoorThema(cat);
          const items = MATERIAAL.filter((m) => m.categorie === cat);
          const subcats = [
            ...new Set(items.map((i) => i.subcategorie).filter((s): s is string => Boolean(s))),
          ];
          return (
            <section key={cat} aria-label={cat}>
              <h2 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-bark-500">
                <Icoon className="h-4 w-4" aria-hidden="true" />
                {cat}
              </h2>

              {subcats.length === 0 ? (
                <div className="flex flex-col gap-2">{items.map(kaart)}</div>
              ) : (
                <div className="flex flex-col gap-4">
                  {subcats.map((sub) => (
                    <div key={sub}>
                      <h3 className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-bark-600">
                        <span
                          className="h-3.5 w-1 rounded-full"
                          style={{ backgroundColor: 'var(--color-clay-500)' }}
                          aria-hidden="true"
                        />
                        {sub}
                      </h3>
                      <div className="flex flex-col gap-2">
                        {items.filter((i) => i.subcategorie === sub).map(kaart)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
