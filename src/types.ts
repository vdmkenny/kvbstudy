export type LevelId = 'kvb1' | 'kvb2' | 'kvb2plus' | 'kvb3' | 'kvb3plus' | 'kvb4';

export interface QuizQuestion {
  id: string;
  thema: string;
  vraag: string;
  /** Antwoordopties; precies een is juist. */
  opties: string[];
  /** Index in `opties` van het juiste antwoord. */
  juist: number;
  /** Korte uitleg, getoond na het antwoorden. */
  uitleg?: string;
}

export interface Flashcard {
  id: string;
  thema: string;
  voorkant: string;
  achterkant: string;
}

/** Een theorievraag met optioneel een direct te tonen antwoord. */
export interface TheorieItem {
  vraag: string;
  antwoord?: string;
}

/** Een groep theorievragen. */
export interface TheorieGroep {
  titel: string;
  items: TheorieItem[];
}

/** Een groep van afvinkbare praktijkpunten. */
export interface ExamenGroep {
  titel: string;
  items: string[];
}

/** Praktische examengids op basis van de draaiboeken. */
export interface ExamenGids {
  intro?: string;
  theorie: TheorieGroep[];
  praktijk: ExamenGroep[];
}

export interface LevelContent {
  id: LevelId;
  /** Korte naam, bv. 'KVB 1'. */
  naam: string;
  /** Ondertitel, bv. 'Indoor Toprope'. */
  ondertitel: string;
  /** Of er studie-materiaal beschikbaar is. */
  beschikbaar: boolean;
  /** Accentkleur (hex) van de overeenkomstige KVB-kaart. */
  accent?: string;
  /** Pad naar de kaartafbeelding. */
  afbeelding?: string;
  /** Algemene info, een of meer paragrafen. */
  intro?: string[];
  /** Praktische examen-/oefengids met afvinkbare punten. */
  examen?: ExamenGids;
  /** Of dit niveau een echt examen heeft (KVB 2+/3+ niet). */
  heeftExamen?: boolean;
  quiz: QuizQuestion[];
  flashcards: Flashcard[];
}

export type StudieModus = 'quiz' | 'flashcards';

/** Een knoop in de knopengids. */
export interface Knoop {
  id: string;
  /** Nederlandse hoofdnaam. */
  naam: string;
  /** Alternatieve Nederlandse naam. */
  altNl?: string;
  /** Franse naam. */
  fr?: string;
  /** Engelse naam. */
  en?: string;
  /** Categorie, bv. 'Inbinden', 'Standplaats', 'Redding'. */
  categorie: string;
  /** Waarvoor de knoop dient. */
  waarvoor: string;
  /** Stap-voor-stap beschrijving. */
  stappen: string[];
  /** Bij welke KVB-niveaus de knoop hoort (voor kruisverwijzing). */
  kvb?: LevelId[];
  /** Niet officieel KVB-materiaal (bv. paalsteek). */
  optioneel?: boolean;
  /** Demonstratielinks. Voeg er gerust een toe in de data. */
  videos?: KnoopVideo[];
}

/** Een externe demonstratie van een knoop. */
export interface KnoopVideo {
  bron: 'vt' | 'animatedknots';
  url: string;
}

/** Een term in de woordenlijst. */
export interface Term {
  term: string;
  uitleg: string;
  categorie?: string;
}

/** Een stuk klimmateriaal in de materiaalgids. */
export interface MateriaalItem {
  id: string;
  naam: string;
  synoniemen?: string[];
  categorie: string;
  beschrijving: string;
  /** Echte productvoorbeelden. */
  voorbeelden?: string[];
  /** Eerste KVB-niveau waar het voorkomt. */
  kvb?: LevelId;
}
