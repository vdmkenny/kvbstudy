# KVB Studie

Mobielvriendelijke, Nederlandstalige studie-app om te oefenen voor het
**Klimvaardigheidsbewijs (KVB)** in Vlaanderen. Per niveau kan je oefenen met
**meerkeuzequizzen** en **flashcards**, eventueel gefilterd per thema.

Beschikbare niveaus: **KVB 1** (Indoor Toprope), **KVB 2** (Indoor Voorklimmen),
**KVB 2+** (Outdoor Singlepitch) en **KVB 3** (Outdoor Multipitch). KVB 3+ en KVB 4
zijn voorzien maar nog niet gevuld.

> Enkel als oefenhulp — geen vervanging voor praktijkopleiding. Inhoud gebaseerd op
> de cursussen van Klimzaal Banzai &amp; Vertical Thinking.

## Tech

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- PWA (`vite-plugin-pwa`) — installeerbaar en offline-bruikbaar
- Geen backend, geen login, geen tracking (sessiegebonden)

## Commando's

```bash
npm install        # afhankelijkheden
npm run dev        # dev-server op http://localhost:5173
npm run build      # productiebuild (incl. typecheck + service worker)
npm run preview    # de productiebuild lokaal bekijken
```

## Inhoud toevoegen / aanpassen

De studie-inhoud staat in `src/data/`:

- `kvb1.ts`, `kvb2.ts`, `kvb2plus.ts`, `kvb3.ts` — quizvragen en flashcards per niveau
- `index.ts` — registreert de niveaus (en de nog lege KVB 3+ / KVB 4)

Elke vraag heeft een `thema`, dat automatisch in de themafilter verschijnt. Types
staan in `src/types.ts`.

Om een nieuw niveau te vullen: voeg vragen/flashcards toe aan het bijhorende
databestand en zet `beschikbaar: true` in `src/data/index.ts`.
