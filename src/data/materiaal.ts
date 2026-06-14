import type { MateriaalItem } from '../types';

export const MATERIAAL: MateriaalItem[] = [
  // Gordel en schoenen
  {
    id: 'heupgordel',
    naam: 'Heupgordel',
    synoniemen: ['baudrier'],
    categorie: 'Gordel en schoenen',
    beschrijving:
      'De standaardgordel rond heup en benen. Sportklimgordels hebben vaste beenlussen (licht, overzichtelijk); modellen met verstelbare beenlussen zijn handiger bij wisselende kledij.',
    voorbeelden: ['Petzl Corax', 'Black Diamond Momentum', 'Edelrid Jay', 'Simond Rock+'],
    kvb: 'kvb1',
  },
  {
    id: 'integraalgordel',
    naam: 'Integraalgordel',
    synoniemen: ['volledige gordel', 'baudrier complet'],
    categorie: 'Gordel en schoenen',
    beschrijving:
      'Gaat ook rond de schouders, met het inbindpunt op borsthoogte. Ideaal voor kinderen (smalle heupen) en zwangere vrouwen. Een borstgordel maakt van een heupgordel een integraalgordel.',
    voorbeelden: ['Petzl Body', 'Edelrid Fraggle', 'Simond Spider (kind)'],
    kvb: 'kvb1',
  },
  {
    id: 'klimschoenen',
    naam: 'Klimschoenen',
    synoniemen: ['chaussons'],
    categorie: 'Gordel en schoenen',
    beschrijving:
      'Nauwsluitende schoenen met plakkend rubber voor meer steun en wrijving op kleine treetjes. Sluiting met veters, velcro of elastiek; vlakke (neutraal) of kromme (overhang) zool.',
    voorbeelden: ['Scarpa Origin', 'La Sportiva Tarantulace', 'Simond Rock+'],
    kvb: 'kvb1',
  },

  // Musketons
  // Op basis van de vorm
  {
    id: 'd-musketon',
    naam: 'D-musketon',
    synoniemen: ['D-vormige musketon', 'mousqueton en D'],
    categorie: 'Musketons',
    subcategorie: 'Vormen',
    beschrijving:
      'Klassieke rechte musketon met twee bijna evenwijdige zijden en relatief scherpe binnenhoeken. De belasting komt op de sterke rechte kant. Niet in alle rotssituaties even handig.',
    voorbeelden: ['Petzl Spirit', 'Black Diamond Positron', 'DMM Spectre'],
    kvb: 'kvb1',
  },
  {
    id: 'ovale-musketon',
    naam: 'Ovale musketon',
    synoniemen: ['ovaalmusketon', 'mousqueton ovale'],
    categorie: 'Musketons',
    subcategorie: 'Vormen',
    beschrijving:
      'De ovale vorm houdt de last gecentreerd en verdeelt ze gelijk over de twee zijden van de musketon (de rug en de poort), waardoor dwarsbelasting (kruisbelasting) vermeden wordt. Ovale musketons geven minder touwweerstand en voorkomen verschuiven. Doorgaans niet gebruikt bij sportklimmen.',
    voorbeelden: ['Petzl OK', 'Black Diamond Oval', 'DMM Ultra O'],
  },
  {
    id: 'hms-musketon',
    naam: 'HMS-musketon',
    synoniemen: ['peervormige musketon', 'mousqueton HMS', 'mousqueton poire'],
    categorie: 'Musketons',
    subcategorie: 'Vormen',
    beschrijving:
      'Peervormige musketon (Halbe Mastwurf Sicherung). De brede kant met minder scherpe hoek laat toe om met een halve mastworp te zekeren. Gemarkeerd met een H in een cirkel.',
    voorbeelden: ['Petzl Attache', 'Black Diamond RockLock', 'Edelrid HMS Strike'],
    kvb: 'kvb1',
  },
  // Op basis van de sluiting
  {
    id: 'snapper',
    naam: 'Snapper',
    synoniemen: ['karabijn', 'musketon', 'mousqueton'],
    categorie: 'Musketons',
    subcategorie: 'Sluitingen',
    beschrijving:
      'Sluiting die met één handeling opengaat en niet te beveiligen is. Voor setjes of om materiaal aan de gordel te hangen. Keylock-afwerking voorkomt haken.',
    voorbeelden: ['Petzl Spirit', 'Black Diamond HotForge', 'Simond'],
    kvb: 'kvb2',
  },
  {
    id: 'schroefmusketon',
    naam: 'Schroefmusketon',
    synoniemen: ['mousqueton à vis'],
    categorie: 'Musketons',
    subcategorie: 'Sluitingen',
    beschrijving:
      'Beveiligde musketon met twee handelingen, die je manueel dichtschroeft. Twee tegengesteld ingehangen schroefmusketons mogen om in te binden met een acht in lus.',
    voorbeelden: ['Petzl Sm’D', 'Black Diamond RockLock', 'Edelrid Pure Screw'],
    kvb: 'kvb1',
  },
  {
    id: 'twistlock',
    naam: 'Twistlock-musketon',
    synoniemen: ['dual-lock musketon'],
    categorie: 'Musketons',
    subcategorie: 'Sluitingen',
    beschrijving:
      'Beveiligde musketon die met twee handelingen automatisch sluit. Wordt bij het klimmen beter niet gebruikt: er zijn veiligere opties (een safebiner).',
    voorbeelden: ['Petzl Sm’D Twist-Lock', 'Edelrid Pure Twist'],
    kvb: 'kvb1',
  },
  {
    id: 'safebiner',
    naam: 'Safebiner',
    synoniemen: ['triple-lock musketon'],
    categorie: 'Musketons',
    subcategorie: 'Sluitingen',
    beschrijving:
      'Een extra beveiligde musketon die met drie handelingen opent (triple-lock), zodat de kans op ongewild opengaan extreem klein is. Enkel de Ball-lock en de Belay Master worden aanvaard als echte safebiner om mee te zekeren en indirect in te binden.',
    voorbeelden: ['Petzl Am’D Ball-lock', 'Petzl Sm’D Ball-lock', 'DMM Belay Master'],
    kvb: 'kvb1',
  },

  // Touwen
  {
    id: 'enkeltouw',
    naam: 'Dynamisch enkeltouw',
    synoniemen: ['kernmanteltouw', 'corde à simple'],
    categorie: 'Touwen',
    beschrijving:
      'Elastisch touw (diameter 8,5 tot 11 mm) dat de val opvangt, voor zaal en singlepitch. Bicolor of een zwarte markering toont het midden. Tegenwoordig 70 tot 80 m.',
    voorbeelden: ['Edelrid Boa', 'Petzl Mambo', 'Beal Booster', 'Simond Edge'],
    kvb: 'kvb1',
  },
  {
    id: 'half-tweeling',
    naam: 'Half- en tweelingtouw',
    synoniemen: ['corde à double', 'corde jumelée'],
    categorie: 'Touwen',
    beschrijving:
      'Twee dunnere strengen voor langere multipitch- en ijsroutes. Halftouw (teken 1/2) klip je apart in; tweelingtouw (oneindig-teken) altijd samen.',
    voorbeelden: ['Edelrid Flycatcher', 'Petzl Paso'],
    kvb: 'kvb3',
  },
  {
    id: 'touwzak',
    naam: 'Touwzak',
    synoniemen: ['ropebag', 'sac à corde'],
    categorie: 'Touwen',
    beschrijving:
      'Zeil met zak om je touw op uit te leggen, te dragen en te beschermen. Rode lus voor de stopknoop, groene lus voor de zaksteek van het voorklimeinde.',
    voorbeelden: ['Petzl Kab', 'Black Diamond Super Chute', 'Simond'],
    kvb: 'kvb2',
  },

  // Zekertoestellen
  {
    id: 'tuber',
    naam: 'Tuber',
    synoniemen: ['potje', 'emmertje'],
    categorie: 'Zekertoestellen',
    beschrijving:
      'Klassiek dynamisch zekertoestel met een U-vormig touwverloop. Remhandkracht- en positie-afhankelijk: laat je remtouw nooit los. Een gleuf (enkeltouw) of twee gleuven (ook dubbeltouw, rappellen).',
    voorbeelden: ['Black Diamond ATC', 'Petzl Verso', 'Simond'],
    kvb: 'kvb1',
  },
  {
    id: 'autotuber',
    naam: 'Autotuber',
    synoniemen: ['autobloquant'],
    categorie: 'Zekertoestellen',
    beschrijving:
      'Moderne tuber die het touw bij belasting tegen de musketon klemt: veel minder remhandkrachtafhankelijk, maar nog positie-afhankelijk.',
    voorbeelden: ['Edelrid Mega Jul', 'Black Diamond ATC Pilot', 'Mammut Smart'],
    kvb: 'kvb1',
  },
  {
    id: 'halfautomaat',
    naam: 'Halfautomaat',
    synoniemen: ['assisted braking device', 'autobloquant à came'],
    categorie: 'Zekertoestellen',
    beschrijving:
      'Klemt het touw volledig vast: niet meer remhandkracht- of positie-afhankelijk. In theorie het veiligst, mits correct gebruik. Sommige hebben een paniekfunctie. Laat ook hier je remtouw nooit los.',
    voorbeelden: ['Petzl Grigri', 'Petzl Grigri+', 'Edelrid Pinch'],
    kvb: 'kvb1',
  },
  {
    id: 'reverso',
    naam: 'Toestel met Guide-modus',
    synoniemen: ['Reverso-achtige', 'plaquette'],
    categorie: 'Zekertoestellen',
    beschrijving:
      'Tuber met twee gleuven en een extra oog om bij multipitch een of twee naklimmers te zekeren met blokkerende werking, en om mee te rappellen.',
    voorbeelden: ['Petzl Reverso', 'Black Diamond ATC Guide'],
    kvb: 'kvb3',
  },

  // Tussenzekering en relais
  {
    id: 'setje',
    naam: 'Setje',
    synoniemen: ['dégaine', 'quickdraw'],
    categorie: 'Tussenzekering en relais',
    beschrijving:
      'Twee snappers verbonden met een dogbone. Haaksnapper (recht) aan de haak, touwsnapper (gebogen) voor het touw. Wire-snappers vermijden het whiplash-effect.',
    voorbeelden: ['Petzl Djinn Axess', 'Black Diamond LiteWire', 'Simond Rocky'],
    kvb: 'kvb2',
  },
  {
    id: 'bandsling',
    naam: 'Bandsling',
    synoniemen: ['lint', 'sangle'],
    categorie: 'Tussenzekering en relais',
    beschrijving:
      'Statische lus van nylon of dyneema (60 tot 240 cm) voor een leeflijn, een relais of het verlengen van een zekering. Knopen verzwakken een sling.',
    voorbeelden: ['Petzl Anneau', 'Edelrid Tech Web', 'Black Diamond Dynex'],
    kvb: 'kvb2plus',
  },
  {
    id: 'maillon',
    naam: 'Maillon rapide',
    synoniemen: ['schroefschakel', 'maillon'],
    categorie: 'Tussenzekering en relais',
    beschrijving:
      'Een schroefschakel aan de onderste haak van een relais (of als vast setje aan de muur). Je haalt er je touw door bij het ombouwen en rappellen.',
    voorbeelden: ['Peguet Maillon Rapide'],
    kvb: 'kvb2plus',
  },

  // Helm en bescherming
  {
    id: 'helm',
    naam: 'Klimhelm',
    synoniemen: ['casque'],
    categorie: 'Helm en bescherming',
    beschrijving:
      'Schaalhelm (hard plastic, duurzaam, zwaar), schuimhelm (absorptie, licht, na een klap weggooien) of hybride. Aan de rotsen draagt iedereen er altijd een, met het riempje vast.',
    voorbeelden: ['Petzl Boreo (hybride)', 'Petzl Sirocco (schuim)', 'Black Diamond Half Dome (schaal)'],
    kvb: 'kvb2plus',
  },
  {
    id: 'magnesium',
    naam: 'Magnesium en pofzak',
    synoniemen: ['chalk', 'magnésie'],
    categorie: 'Helm en bescherming',
    beschrijving:
      'Wit poeder (los, blokjes, balletje of vloeibaar) tegen zwetende handen, in een pofzak op je rug. Wees zuinig en maak weinig stof.',
    voorbeelden: ['Black Diamond White Gold', 'Petzl Power Crunch', 'Edelrid Chalk'],
    kvb: 'kvb1',
  },

  // Outdoor en redding
  {
    id: 'prusiktouw',
    naam: 'Prusiktouw / machardlus',
    synoniemen: ['hulptouw', 'cordelette', 'reepschnur'],
    categorie: 'Outdoor en redding',
    beschrijving:
      'Touw van beperkte diameter (5 tot 7 mm) waarvan je een machardlus knoopt voor een machard (klemknoop): noodafdaling, rappelback-up, expresstakel en zelfredding.',
    voorbeelden: ['Edelrid 6 mm', 'Petzl Prusik Cord', 'Beal 6 mm'],
    kvb: 'kvb2plus',
  },
  {
    id: 'ohm',
    naam: 'Ohm',
    categorie: 'Outdoor en redding',
    beschrijving:
      'Toestel dat je op het zekertouw aan de wand hangt en bij een groot gewichtsverschil extra remassistentie geeft. De Ohmega is bedoeld voor nog grotere verschillen.',
    voorbeelden: ['Edelrid Ohm', 'Edelrid Ohmega'],
    kvb: 'kvb1',
  },
];
