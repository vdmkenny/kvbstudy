import { useMemo, useState } from 'react';
import { ArrowLeftIcon, MagnifyingGlassIcon, BookOpenIcon } from '@heroicons/react/20/solid';
import { WOORDENLIJST } from '../data/woordenlijst';
import { iconVoorThema } from '../themaIcon';

interface Props {
  onTerug: () => void;
}

const CATEGORIE_VOLGORDE = ['Touwcommando', 'Techniek', 'Materiaal', 'Fysica', 'Algemeen'];

export function Glossary({ onTerug }: Props) {
  const [zoek, setZoek] = useState('');

  const gefilterd = useMemo(() => {
    const q = zoek.trim().toLowerCase();
    if (!q) return WOORDENLIJST;
    return WOORDENLIJST.filter(
      (t) => t.term.toLowerCase().includes(q) || t.uitleg.toLowerCase().includes(q),
    );
  }, [zoek]);

  const categorieen = CATEGORIE_VOLGORDE.filter((c) =>
    gefilterd.some((t) => (t.categorie ?? 'Algemeen') === c),
  );

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
        <h1 className="flex items-center gap-2 font-serif text-2xl font-bold text-bark-800">
          <BookOpenIcon className="h-6 w-6" style={{ color: 'var(--color-moss-500)' }} />
          Woordenlijst
        </h1>
      </header>

      <div className="px-5 pb-4">
        <div className="flex items-center gap-2 rounded-xl border border-sand-300 bg-white px-3 py-2.5">
          <MagnifyingGlassIcon className="h-5 w-5 shrink-0 text-bark-500" aria-hidden="true" />
          <input
            type="search"
            inputMode="search"
            value={zoek}
            onChange={(e) => setZoek(e.target.value)}
            placeholder="Zoek een term of woord..."
            aria-label="Zoek in de woordenlijst"
            className="w-full bg-transparent text-bark-800 placeholder:text-bark-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 px-5 pb-8">
        {categorieen.map((cat) => (
          <section key={cat}>
            <h2 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-bark-500">
              <CategorieIcoon cat={cat} />
              {cat}
            </h2>
            <div className="overflow-hidden rounded-2xl border border-sand-300 bg-white/70">
              {gefilterd
                .filter((t) => (t.categorie ?? 'Algemeen') === cat)
                .map((t, i) => (
                  <div key={t.term} className={i > 0 ? 'border-t border-sand-200 p-4' : 'p-4'}>
                    <div className="font-semibold text-bark-800">{t.term}</div>
                    <p className="mt-1 text-sm leading-relaxed text-bark-700">{t.uitleg}</p>
                  </div>
                ))}
            </div>
          </section>
        ))}

        {gefilterd.length === 0 && (
          <p className="py-10 text-center text-bark-600">Geen resultaten voor "{zoek}".</p>
        )}
      </div>
    </div>
  );
}

function CategorieIcoon({ cat }: { cat: string }) {
  const Icoon = iconVoorThema(cat);
  return <Icoon className="h-4 w-4" aria-hidden="true" />;
}
