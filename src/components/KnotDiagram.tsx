import overhandSrc from '../assets/knots/overhand.svg';
import figure8Src from '../assets/knots/figure8.svg';
import figure8LoopSrc from '../assets/knots/figure8-loop.jpg';
import cloveSrc from '../assets/knots/clove.jpg';
import munterSrc from '../assets/knots/munter.jpg';
import bowlineSrc from '../assets/knots/bowline.jpg';
import stopperSrc from '../assets/knots/stopknoop.jpg';
import muleSrc from '../assets/knots/mule.jpg';
import machardSrc from '../assets/knots/machard.jpg';
import girthSrc from '../assets/knots/girth.svg';
import fishermanSrc from '../assets/knots/fisherman.jpg';

// Knoopdiagrammen uit Wikimedia Commons. We tekenen ze niet zelf na; we tonen de
// bronafbeelding met de vereiste naamsvermelding (CC BY-SA).

interface Diagram {
  src: string;
  /** false = lijntekening op lichte achtergrond, true = foto (vult de kader) */
  foto?: boolean;
  /** optionele toelichting onder de afbeelding */
  noot?: string;
  auteur: string;
  licentie: string;
  href: string;
}

const DIAGRAMS: Record<string, Diagram> = {
  zaksteek: {
    src: overhandSrc,
    auteur: 'QuasarFr',
    licentie: 'CC BY-SA 4.0',
    href: 'https://commons.wikimedia.org/wiki/File:Demi-noeud_arret.svg',
  },
  achtknoop: {
    src: figure8Src,
    auteur: 'Lucasbosch',
    licentie: 'CC BY-SA 3.0',
    href: 'https://commons.wikimedia.org/wiki/File:Figure-eight_knot.svg',
  },
  'dubbele-achtknoop': {
    src: figure8LoopSrc,
    foto: true,
    auteur: 'Parkis',
    licentie: 'CC BY-SA 3.0',
    href: 'https://commons.wikimedia.org/wiki/File:Dvojit%C3%BD_osmi%C4%8Dkov%C3%BD_uzel.jpg',
  },
  mastworp: {
    src: cloveSrc,
    foto: true,
    auteur: 'Mark in the wiki',
    licentie: 'Publiek domein',
    href: 'https://commons.wikimedia.org/wiki/File:Mastwurf_complete.jpg',
  },
  'halve-mastworp': {
    src: munterSrc,
    foto: true,
    auteur: 'Mark in the wiki',
    licentie: 'Publiek domein',
    href: 'https://commons.wikimedia.org/wiki/File:HMS_complete.jpg',
  },
  paalsteek: {
    src: bowlineSrc,
    foto: true,
    noot: 'Foto toont de dubbele paalsteek. Bij het inbinden gaat het uiteinde door beide inbindpunten en werk je af met een overhandse knoop.',
    auteur: 'Frencheigh',
    licentie: 'CC BY-SA 3.0',
    href: 'https://commons.wikimedia.org/wiki/File:Doublebowline.jpg',
  },
  stopknoop: {
    src: stopperSrc,
    foto: true,
    auteur: 'Der Barbar',
    licentie: 'CC BY-SA 4.0',
    href: 'https://commons.wikimedia.org/wiki/File:Barb._Doppelter_%C3%9Cberhandknoten_04.jpg',
  },
  'alpiene-slipsteek': {
    src: muleSrc,
    foto: true,
    auteur: 'Markus Bärlocher',
    licentie: 'Publiek domein',
    href: 'https://commons.wikimedia.org/wiki/File:Schleifknoten_mit_Sicherung.jpg',
  },
  machard: {
    src: machardSrc,
    foto: true,
    auteur: 'StromBer',
    licentie: 'CC BY-SA 2.0 DE',
    href: 'https://commons.wikimedia.org/wiki/File:KlemheistKnot2-4X.jpg',
  },
  ankersteek: {
    src: girthSrc,
    auteur: 'Whidou',
    licentie: 'CC BY-SA 4.0',
    href: 'https://commons.wikimedia.org/wiki/File:Cow_hitch.svg',
  },
  'dubbele-vissersknoop': {
    src: fishermanSrc,
    foto: true,
    auteur: 'Markus Bärlocher',
    licentie: 'Publiek domein',
    href: 'https://commons.wikimedia.org/wiki/File:Doppelter_Spierenstich_Tropfen-3.jpg',
  },
};

export function KnotDiagram({ id, naam }: { id: string; naam: string }) {
  const d = DIAGRAMS[id];
  if (!d) return null;
  return (
    <figure className="mb-3 overflow-hidden rounded-xl border border-sand-300">
      <div
        className="flex items-center justify-center"
        style={{ backgroundColor: '#f4eee1' }}
      >
        <img
          src={d.src}
          alt={`Diagram van de ${naam}`}
          className={
            d.foto
              ? 'block max-h-80 w-auto max-w-full object-contain'
              : 'block w-full max-w-[320px] p-3'
          }
          loading="lazy"
        />
      </div>
      <figcaption className="bg-sand-100 px-3 py-2 text-center text-[11px] text-bark-500">
        {d.noot && <span className="mb-1 block text-bark-600">{d.noot}</span>}
        Bron:{' '}
        <a
          href={d.href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-bark-500/40 underline-offset-2"
        >
          Wikimedia Commons
        </a>{' '}
        &middot; {d.auteur} &middot; {d.licentie}
      </figcaption>
    </figure>
  );
}
