import type { Knoop, KnoopVideo } from '../types';

/** Demonstratievideos van Vertical Thinking. */
const VT = {
  inbinden: 'https://www.youtube.com/watch?v=PzE_BTdOzog',
  stopknoop: 'https://www.youtube.com/watch?v=w9p6EbkjnJ8',
  mastworp: 'https://www.youtube.com/watch?v=w9p6EbkjnJ8',
  halveMastworp: 'https://www.youtube.com/watch?v=hZWwyIEJ3J4',
  alpieneSlipsteek: 'https://www.youtube.com/watch?v=_LmmG7ePX4k',
};

/** Animated Knots: een geanimeerde demonstratie per knoop. */
const AK = {
  figuur8: 'https://www.animatedknots.com/figure-8-knot',
  figuur8Lus: 'https://www.animatedknots.com/figure-8-follow-through-loop-knot',
  overhand: 'https://www.animatedknots.com/overhand-knot',
  stopper: 'https://www.animatedknots.com/double-overhand-stopper-knot',
  cloveHitch: 'https://www.animatedknots.com/clove-hitch-knot-rope-end',
  munterMule: 'https://www.animatedknots.com/munter-mule-combination-hitch-knot',
  klemheist: 'https://www.animatedknots.com/klemheist-knot',
  girthHitch: 'https://www.animatedknots.com/girth-hitch-knot',
  doubleFisherman: 'https://www.animatedknots.com/double-fishermans-bend-knot',
  bowline: 'https://www.animatedknots.com/bowline-knot',
};

function videos(ak: string, vt?: string): KnoopVideo[] {
  const v: KnoopVideo[] = [];
  if (vt) v.push({ bron: 'vt', url: vt });
  v.push({ bron: 'animatedknots', url: ak });
  return v;
}

export const KNOPEN: Knoop[] = [
  {
    id: 'achtknoop',
    naam: 'Achtknoop',
    altNl: 'Enkele acht in het touw',
    fr: 'Noeud de huit',
    en: 'Figure 8 knot',
    categorie: 'Inbinden',
    waarvoor:
      'De enkele acht die je in het touw legt. Het is de basis voor de dubbele (geweven) achtknoop waarmee je inbindt.',
    stappen: [
      'Maak een lus in het touw.',
      'Breng het uiteinde rond de staande streng (een halve slag meer dan bij een overhandse knoop).',
      'Steek het uiteinde door de eerste lus zodat de vorm van een acht ontstaat.',
      'Trek aan; nog niet helemaal strak als je hierna wil inbinden.',
    ],
    kvb: ['kvb1', 'kvb2', 'kvb2plus', 'kvb3'],
    videos: videos(AK.figuur8, VT.inbinden),
  },
  {
    id: 'dubbele-achtknoop',
    naam: 'Dubbele achtknoop',
    altNl: 'Geweven / gestoken achtknoop (de inbindknoop)',
    fr: 'Noeud de huit repassé',
    en: 'Figure 8 follow-through',
    categorie: 'Inbinden',
    waarvoor:
      'De inbindknoop waarmee je je touw aan je gordel verbindt (direct inbinden), voor toprope en voorklimmen, indoor en outdoor. Je bouwt verder op de enkele achtknoop en weeft die terug door de twee inbindpunten.',
    stappen: [
      'Leg op ongeveer een armlengte van het uiteinde een enkele achtknoop.',
      'Steek het uiteinde door de twee inbindpunten van je gordel.',
      'Volg met het uiteinde de hele acht terug (weven), mooi parallel en zonder kruisingen.',
      'Trek de vier strengen een voor een strak aan.',
      'Controleer: parallelle strengen, gepaste lus, uiteinde volgens de vuistregel (minstens één vuist breed, maximaal twee vuisten).',
    ],
    kvb: ['kvb1', 'kvb2', 'kvb2plus', 'kvb3'],
    videos: videos(AK.figuur8Lus, VT.inbinden),
  },
  {
    id: 'stopknoop',
    naam: 'Stopknoop',
    altNl: 'Dubbele overhandse knoop',
    fr: 'Noeud d’arrêt',
    en: 'Double overhand stopper',
    categorie: 'Stopknoop',
    waarvoor:
      'Op het einde van het remtouw (of aan de touwzak). Voorkomt dat het touweinde door het zekertoestel schiet als de route te lang is, en signaleert welk einde het zekertouw is.',
    stappen: [
      'Neem het touweinde en leg een gewone overhandse knoop.',
      'Steek het uiteinde een tweede keer door dezelfde lus (dubbele overhandse knoop).',
      'Trek strak aan en laat voldoende touw na de knoop staan.',
      'Aan de touwzak: knoop het einde waarop je niet klimt vast aan de rode lus.',
    ],
    kvb: ['kvb1', 'kvb2', 'kvb2plus'],
    videos: videos(AK.stopper, VT.stopknoop),
  },
  {
    id: 'mastworp',
    naam: 'Mastworp',
    fr: 'Noeud de cabestan',
    en: 'Clove hitch',
    categorie: 'Standplaats',
    waarvoor:
      'Zelfzekering met het klimtouw aan de standplaats tijdens het multipitchen. Meteen op de juiste lengte te leggen en makkelijk aan te passen. Je moet hem ook met een hand kunnen leggen.',
    stappen: [
      'Maak twee lussen in het touw, beide met dezelfde draairichting.',
      'Schuif de tweede lus achter de eerste.',
      'Klik beide lussen samen in de musketon.',
      'Trek strak aan; verschuif touw door de knoop om de lengte aan te passen.',
      'Oefen de variant met een hand: een lus omdraaien en in de musketon klikken.',
    ],
    kvb: ['kvb3'],
    videos: videos(AK.cloveHitch, VT.mastworp),
  },
  {
    id: 'halve-mastworp',
    naam: 'Halve mastworp',
    altNl: 'HMS, Halbmastwurf',
    fr: 'Demi-cabestan',
    en: 'Munter hitch',
    categorie: 'Standplaats',
    waarvoor:
      'Zekeren zonder zekertoestel (noodoplossing als je je toestel verliest). Je kan er een voor- en naklimmer mee zekeren en mee rappellen. Gebruik een safebiner (HMS-peervorm).',
    stappen: [
      'Maak twee lussen met dezelfde draairichting en klap ze tegen elkaar (rug tegen rug).',
      'Klik beide lussen samen in de HMS-musketon.',
      'Zorg dat het remtouw aan de rugkant van de musketon zit als de knoop onder belasting staat.',
      'Zekeren doe je met de tunnelmethode; de knoop kantelt om bij het wisselen tussen geven en innemen.',
    ],
    kvb: ['kvb3'],
    videos: videos(AK.munterMule, VT.halveMastworp),
  },
  {
    id: 'alpiene-slipsteek',
    naam: 'Alpiene slipsteek',
    altNl: 'Muleknoop',
    fr: 'Noeud de mule',
    en: 'Mule overhand',
    categorie: 'Redding',
    waarvoor:
      'Een zekersysteem op halve mastworp afbinden zodat je het remtouw kan loslaten en beide handen vrij hebt, bv. om een expresstakel te installeren of een klimmer even ter plaatse te houden.',
    stappen: [
      'Hou het remtouw stevig vast en maak een bocht in het remtouw.',
      'Steek die bocht als een slipsteek door de lus voor de belaste musketon en trek aan.',
      'Beveilig de slipsteek met een overhandse knoop rond het belaste touw.',
      'Werk af met een musketon door de resterende lus zodat de knoop niet kan loslopen.',
      'Losmaken: haal de musketon weg, maak de overhandse knoop los en laat de slipsteek lopen terwijl je het remtouw weer vasthoudt.',
    ],
    kvb: ['kvb3'],
    videos: videos(AK.munterMule, VT.alpieneSlipsteek),
  },
  {
    id: 'machard',
    naam: 'Machardknoop',
    altNl: 'Klemknoop',
    fr: 'Autobloquant (Machard)',
    en: 'Klemheist / friction hitch',
    categorie: 'Redding',
    waarvoor:
      'Een klemknoop met een machardlus rond een ander touw. Zet zich vast onder belasting en is daarna te verschuiven. Voor noodafdaling, rappelback-up, expresstakel en zelfredding.',
    stappen: [
      'Leg de machardlus tegen het hoofdtouw.',
      'Wikkel de lus enkele keren netjes rond het touw (meer windingen = meer grip, zeker op een enkele streng).',
      'Steek het ene eindlusje door het andere en klik er een schroefmusketon in.',
      'Trek aan om de knoop te laten klemmen; ontlast om hem te verschuiven. Hoe soepeler de lus, hoe beter hij grijpt.',
    ],
    kvb: ['kvb2plus', 'kvb3'],
    videos: videos(AK.klemheist),
  },
  {
    id: 'ankersteek',
    naam: 'Ankersteek',
    altNl: 'Lus-in-lus steek',
    fr: 'Tête d’alouette',
    en: 'Girth hitch / lark’s foot',
    categorie: 'Verbinden',
    waarvoor:
      'Een sling of machardlus vastmaken aan je zekerlus, bv. voor de leeflijn of de machardlus. Snel te leggen.',
    stappen: [
      'Steek de sling door je zekerlus.',
      'Haal het ene eind van de sling door het andere eind.',
      'Trek strak aan; zorg dat het stiksel van de sling niet in de knoop zelf terechtkomt.',
    ],
    kvb: ['kvb2plus', 'kvb3'],
    videos: videos(AK.girthHitch),
  },
  {
    id: 'zaksteek',
    naam: 'Zaksteek',
    altNl: 'Overhandse knoop',
    fr: 'Noeud simple',
    en: 'Overhand knot',
    categorie: 'Verbinden',
    waarvoor:
      'De eenvoudigste knoop. Je gebruikt hem om het touw aan de touwzak te knopen (groene lus), om een machardlus te maken (gestoken zaksteek) en om knopen op het touweinde te leggen bij het rappellen.',
    stappen: [
      'Maak een lus in het touw.',
      'Steek het uiteinde door de lus.',
      'Trek strak aan: dit is de basis overhandse knoop.',
      'Voor een lus: neem het touw dubbel en leg met die bocht een overhandse knoop.',
    ],
    kvb: ['kvb2plus', 'kvb3'],
    videos: videos(AK.overhand),
  },
  {
    id: 'dubbele-vissersknoop',
    naam: 'Dubbele vissersknoop',
    fr: 'Double noeud de pêcheur',
    en: 'Double fisherman’s',
    categorie: 'Verbinden',
    waarvoor:
      'Twee touweinden verbinden tot een gesloten lus, bv. om een machardlus te maken van prusiktouw.',
    stappen: [
      'Leg de twee uiteinden naast elkaar, tegengesteld gericht.',
      'Wikkel het ene uiteinde twee keer rond het andere touw en steek het terug door de twee lussen.',
      'Doe hetzelfde met het andere uiteinde aan de andere kant.',
      'Trek beide knopen naar elkaar toe en strak aan; er moet voldoende staart overblijven.',
    ],
    kvb: ['kvb2plus', 'kvb3'],
    videos: videos(AK.doubleFisherman),
  },
  {
    id: 'paalsteek',
    naam: 'Paalsteek',
    altNl: 'Dubbele paalsteek',
    fr: 'Noeud de chaise double',
    en: 'Double bowline',
    categorie: 'Inbinden',
    waarvoor:
      'Een inbindknoop met het touweinde, als alternatief voor de achtknoop. Je steekt het uiteinde een tweede keer door de inbindpunten (daardoor lijkt het op een paalsteek op een bocht) en werkt af met een overhandse knoop. Die back-up is essentieel: een gewone paalsteek kan losschudden. In de KVB-opleiding wordt ingebonden met de achtknoop.',
    stappen: [
      'Steek het touweinde door de twee inbindpunten van je gordel en leg een paalsteek.',
      'Steek het lange uiteinde nog een keer terug door de inbindpunten, zodat de knoop dubbel door de gordel loopt (lijkt op een paalsteek op een bocht).',
      'Beveilig het uiteinde met een overhandse knoop rond de staande streng.',
      'Trek alles netjes strak aan en controleer de knoop.',
    ],
    optioneel: true,
    videos: videos(AK.bowline),
  },
];
