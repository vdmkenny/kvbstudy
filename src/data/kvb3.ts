import type { LevelContent } from '../types';

export const kvb3: LevelContent = {
  id: 'kvb3',
  naam: 'KVB 3',
  ondertitel: 'Outdoor Voorklimmen Multipitch',
  beschikbaar: true,
  quiz: [
    {
      id: 'k3-q1',
      thema: 'Multipitch',
      vraag: 'Wat leer je in KVB 3?',
      opties: [
        'Met enkeltouw multipitchen op goed geëquipeerde massieven met standplaatsen met twee boorhaken en uitgeruste rappelpistes',
        'Klimmen met mobiele zekeringen (friends, nuts)',
        'Enkel indoor voorklimmen',
        'Toprope klimmen op de rotsen',
      ],
      juist: 0,
      uitleg:
        'KVB 3 = outdoor voorklimmen multipitch met enkeltouw op goed geëquipeerde massieven. De rappelstanden liggen niet verder uit elkaar dan de helft van je enkeltouw.',
    },
    {
      id: 'k3-q2',
      thema: 'Zelfzekering',
      vraag: 'Waarmee maak je tijdens het multipitchen je zelfzekering aan de standplaats?',
      opties: [
        'Met het klimtouw en een mastworp (in lengte aanpasbaar)',
        'Met een leeflijn van 60 cm zoals bij singlepitch',
        'Met een bandsling van 240 cm',
        'Met een machardlus',
      ],
      juist: 0,
      uitleg:
        'Bij multipitch gebruik je géén statische leeflijn maar een zelfzekering met het klimtouw op een mastworp: meteen op de juiste lengte, makkelijk te verlengen/verkorten, en dynamisch materiaal.',
    },
    {
      id: 'k3-q3',
      thema: 'Zelfzekering',
      vraag: 'Waarom moet je de mastworp vlot met één hand kunnen leggen?',
      opties: [
        'Je moet je soms nog met één hand vasthouden aan een greep bij aankomst aan de relais',
        'Omdat je tweede hand het remtouw vasthoudt',
        'Omdat het sneller gaat',
        'Dat hoeft niet, twee handen mag altijd',
      ],
      juist: 0,
      uitleg:
        'Vaak kan je beide handen gebruiken, maar regelmatig moet je je nog met één hand aan een greep vasthouden. Daarom moet je de mastworp vlot met één hand kunnen leggen.',
    },
    {
      id: 'k3-q4',
      thema: 'Scenario’s',
      vraag: 'Wat is het verschil tussen een ‘vaste’ en een ‘variabele’ voorklimmer?',
      opties: [
        'Vast: één klimmer klimt alle lengtes voor. Variabel: de klimmers wisselen elkaar af als voorklimmer',
        'Vast: altijd op verbonden relais. Variabel: altijd op niet-verbonden relais',
        'Vast: met halfautomaat. Variabel: met dynamisch toestel',
        'Er is geen verschil',
      ],
      juist: 0,
      uitleg:
        'Vaste voorklimmer (één klimt alles voor) is goed bij een groot niveauverschil of veel schrik. Variabel (afwisselen) gaat sneller (minder touwhandelingen) en verdeelt de mentale druk.',
    },
    {
      id: 'k3-q5',
      thema: 'Scenario’s',
      vraag: 'Wat is een ‘niet-verbonden’ relais?',
      opties: [
        'Twee boorhaken schuin boven elkaar die niet verbonden zijn; je moet ze zelf verbinden tot een standplaats',
        'Een relais met ketting en maillon',
        'Een relais met één enorme haak',
        'Een relais zonder enige haak',
      ],
      juist: 0,
      uitleg:
        'Een niet-verbonden relais zijn twee losse boorhaken (vrijwilligers besparen op materiaal). Je verbindt ze zelf, bv. met je lange lint en een mastworp. Twijfel je aan touwtjes/linten, negeer ze dan.',
    },
    {
      id: 'k3-q6',
      thema: 'Stappenplan',
      vraag: 'Welke stappen volgt de voorklimmer telkens bij aankomst aan een standplaats?',
      opties: [
        'Standplaats installeren, resttouw ophalen, naklimmer zekeren, verbouwen, materiaal doorgeven, vertrek volgende lengte',
        'Enkel zelfzekeren en wachten',
        'Rappellen en opnieuw vertrekken',
        'Het touw doortrekken en zakken',
      ],
      juist: 0,
      uitleg:
        'Het stappenplan: installatie standplaats → resttouw ophalen → naklimmer zekeren → verbouwen (van naklimmer- naar voorklimmerzekering) → materiaal doorgeven → vertrek voorklimmer.',
    },
    {
      id: 'k3-q7',
      thema: 'Zekeren op lichaam/stand',
      vraag: 'Waarom kiest Vertical Thinking ervoor om een voorklimmer ‘op het lichaam’ te zekeren?',
      opties: [
        'Het is vertrouwd: zelfde tunnelmethode en remhandreflex als bij KVB 1/2 en singlepitch, en de val wordt sowieso dynamischer opgevangen',
        'Omdat het de enige toegestane manier is',
        'Omdat het op de stand verboden is',
        'Omdat je dan geen dummy runner nodig hebt',
      ],
      juist: 0,
      uitleg:
        'Op het lichaam zekeren is vertrouwd (zelfde tunnelmethode, remhandreflex als KVB 1/2 en singlepitch), je kan je comfortabeler installeren en de val wordt dynamischer opgevangen door het verplaatsen van je lichaam.',
    },
    {
      id: 'k3-q8',
      thema: 'Dummy runner',
      vraag: 'Waarom plaats je een ‘dummy runner’ als je een voorklimmer op het lichaam zekert?',
      opties: [
        'Zodat er bij een val voor het eerste setje een omlooppunt is en het zekertoestel niet naar beneden belast wordt (geen remwerking meer)',
        'Om sneller te kunnen klimmen',
        'Als extra zelfzekering voor de zekeraar',
        'Om het touw te recupereren',
      ],
      juist: 0,
      uitleg:
        'Zonder omlooppunt zou een val vóór het eerste setje het toestel naar beneden belasten → geen remwerking. De dummy runner zorgt voor dat omlooppunt; na een paar ingepikte setjes mag hij los.',
    },
    {
      id: 'k3-q9',
      thema: 'Zekeren op lichaam/stand',
      vraag: 'Wat doe je als je een grote kans op een val net na de relais verwacht?',
      opties: [
        'De zelfzekering van de zekeraar verlengen zodat hij wat lager hangt: meer touw in omloop → lagere valfactor',
        'De zekeraar zo hoog mogelijk hangen',
        'Geen dummy runner plaatsen',
        'Statisch zekeren',
      ],
      juist: 0,
      uitleg:
        'Verleng de zelfzekering en hang de zekeraar wat lager: meer touw in omloop verlaagt de valfactor, en je vermindert de kans dat de zekeraar tegen de dummy runner getrokken wordt.',
    },
    {
      id: 'k3-q10',
      thema: 'Halfautomaat',
      vraag: 'Wat moet je nog meenemen als je de voorklimmer met een halfautomaat (Grigri) zekert?',
      opties: [
        'Een klassiek dynamisch zekertoestel (Reverso-achtige) om de naklimmer te zekeren en te rappellen',
        'Niets extra',
        'Een tweede Grigri',
        'Een statisch touw',
      ],
      juist: 0,
      uitleg:
        'Met de Grigri zeker je de voorklimmer (veel remassistentie, goed voor het vertrouwen), maar de naklimmer zekeren en rappellen doe je met je dynamisch Reverso-achtig toestel. Minpunt: iets minder dynamiek.',
    },
    {
      id: 'k3-q11',
      thema: 'Rappellen',
      vraag: 'Waarmee zeker je jezelf tijdens het rappellen (de teruglooprem)?',
      opties: [
        'Met een machard rond de rappeltouwen, vastgemaakt aan je zekerlus met een ankersteek',
        'Met een mastworp aan het relais',
        'Met de halfautomaat',
        'Met een tweede leeflijn',
      ],
      juist: 0,
      uitleg:
        'Je fixeert de machardlus met een ankersteek aan de zekerlus (onder de leeflijn) en legt een machard rond de rappeltouwen onder je afdaaltoestel: zo kan je hem nooit laten vallen en blokkeert hij bij loslaten.',
    },
    {
      id: 'k3-q12',
      thema: 'Rappellen',
      vraag: 'Hoe installeer je het rappeltouw in de maillon?',
      opties: [
        'Touw door de maillon, twee zaksteken op 50 cm van het einde (‘van voor naar achter, van boven naar onder, twee knoopjes erin’)',
        'Eén knoop in het midden van het touw',
        'Touw rond de ketting knopen',
        'Touw enkelvoudig door de haak steken',
      ],
      juist: 0,
      uitleg:
        'Steek het touweinde door de maillon en leg twee zaksteken op 50 cm van het einde. Zoek het midden van het touw; de twee zaksteken markeren welk touw je later doortrekt.',
    },
    {
      id: 'k3-q13',
      thema: 'Rappellen',
      vraag: 'Wat roep je voor je de touwen naar beneden gooit bij het rappellen?',
      opties: [
        '‘Corde!’ (/ Seil! / Rope! / Corda!)',
        '‘Caillou!’',
        '‘Blok!’',
        '‘Départ!’',
      ],
      juist: 0,
      uitleg:
        'Roep ‘Corde!’ voor je de touwen uitgooit. Gooi ze niet in elkaar: de ene wat naar links, de andere naar rechts, of laat twee tellen tussen het gooien van beide stapels.',
    },
    {
      id: 'k3-q14',
      thema: 'Rappellen',
      vraag: 'Wat is een verstandige regel over de afstand tussen rappelstanden?',
      opties: [
        'Ze liggen niet verder uit elkaar dan de helft van je enkeltouw (rappel op dubbel touw)',
        'Ze mogen tot de volledige touwlengte uit elkaar liggen',
        'De afstand maakt niet uit',
        'Maximaal 5 meter',
      ],
      juist: 0,
      uitleg:
        'Je rappelt op een dubbel gevouwen touw, dus de rappelstanden liggen maximaal de helft van je touwlengte uit elkaar. Een rappel van 50 m kan dus niet met een enkeltouw van 70/80 m.',
    },
    {
      id: 'k3-q15',
      thema: 'Rappellen',
      vraag: 'Wat doe je als tweede rappeller als de eerste nog bezig is aan de volgende stand?',
      opties: [
        'Wacht een meter of drie boven de rappelstand tot alles klaar is',
        'Rappel er gewoon voorbij',
        'Klim terug naar boven',
        'Maak je los van het touw',
      ],
      juist: 0,
      uitleg:
        'Kom je aan terwijl de eerste nog de volgende stand voorbereidt, wacht dan ± 3 m boven de stand. Zo maak je de situatie niet ingewikkelder.',
    },
    {
      id: 'k3-q16',
      thema: 'Zelfredding',
      vraag: 'Wanneer moet je langs je touwen omhoog ‘prusikken’ (zelfredding)?',
      opties: [
        'Als je de rappelstand voorbij rappelde, ze niet vindt, of je touwen klem zitten boven je',
        'Bij elke rappel standaard',
        'Enkel bij het voorklimmen',
        'Als de zekeraar het vraagt',
      ],
      juist: 0,
      uitleg:
        'Zelfredding (prusikken) gebruik je als rappellen misloopt: je rappelde de stand voorbij, vindt de volgende niet, of je touwen zitten klem boven je. Je werkt met twee machards (leeflijn + voetlus).',
    },
    {
      id: 'k3-q17',
      thema: 'Deblokkeren',
      vraag: 'Waarom moet je soms je zekertoestel ‘deblokkeren’ bij het zekeren van een naklimmer?',
      opties: [
        'Bij een val in een overhang zwaait de naklimmer weg van de wand; je wil hem laten zakken, maar de Guide-blokkeerfunctie laat dat niet zomaar toe',
        'Omdat het toestel kapot is',
        'Om sneller te rappellen',
        'Om de voorklimmer te zekeren',
      ],
      juist: 0,
      uitleg:
        'De Guide-modus klemt het touw af bij een val. In een overhang zwaait de naklimmer weg van de wand; om hem te laten zakken deblokkeer je het toestel met een musketon als hendel, terwijl je het remtouw vasthoudt.',
    },
    {
      id: 'k3-q18',
      thema: 'Expresstakel',
      vraag: 'Wat is de takelverhouding van een expresstakel, en wat kan je ermee?',
      opties: [
        '3-op-1: je takelt 3 cm om de klimmer 1 cm te laten stijgen, genoeg om een naklimmer bij een moeilijke pas te assisteren, niet om hem echt omhoog te takelen',
        '1-op-3: de klimmer stijgt 3 cm per cm trekken',
        '10-op-1: je kan iedereen optakelen',
        'Er is geen mechanisch voordeel',
      ],
      juist: 0,
      uitleg:
        'De expresstakel is in theorie 3:1 (3 cm trekken = 1 cm stijgen), maar door wrijving en rek in de praktijk minder efficiënt. Hij dient enkel om een naklimmer bij een moeilijke pas een beetje te helpen.',
    },
    {
      id: 'k3-q19',
      thema: 'Expresstakel',
      vraag: 'Welk toestel houden we in de expresstakel als ‘teruglooprem’?',
      opties: [
        'De Reverso (zelfblokkerende werking belet dat de getakelde persoon terugzakt)',
        'De Grigri',
        'Een statisch touw',
        'Geen, je houdt alles met de hand vast',
      ],
      juist: 0,
      uitleg:
        'De Reverso blijft als teruglooprem: zijn zelfblokkerende werking belet dat het touw terugloopt als je even geen kracht zet. Dat zorgt wel voor extra wrijving, ten koste van de efficiëntie.',
    },
    {
      id: 'k3-q20',
      thema: 'Halve mastworp',
      vraag: 'Waarom moet je de halve mastworp (HMS) toch beheersen, ook al is hij voorbijgestreefd?',
      opties: [
        'Als noodoplossing: verlies je je zekertoestel én je reservetoestel, dan kan je met de HMS nog voor-/naklimmen en rappellen',
        'Omdat het de beste manier is om te zekeren',
        'Omdat hij geen torsie geeft',
        'Omdat hij verplicht is bij sportklimmen',
      ],
      juist: 0,
      uitleg:
        'De HMS is voorbijgestreefd bij sportklimmen, maar als noodoplossing onmisbaar: verlies je je toestel én reserve, dan kan je met een HMS nog voor- en naklimmen zekeren én rappellen. Nadeel: veel torsie/slijtage.',
    },
    {
      id: 'k3-q21',
      thema: 'Alpiene slipsteek',
      vraag: 'Waarvoor dient een alpine slipsteek?',
      opties: [
        'Een zekersysteem op HMS afbinden zodat je het remtouw kan loslaten en beide handen vrij hebt',
        'Om in te binden',
        'Om te rappellen',
        'Als zelfzekering aan het relais',
      ],
      juist: 0,
      uitleg:
        'Met een alpine slipsteek bind je een HMS-zekersysteem af om je handen vrij te maken, bv. om een expresstakel te installeren of een voorklimmer even ter plaatse te houden bij een probleem.',
    },
    {
      id: 'k3-q22',
      thema: 'Materiaal',
      vraag: 'Welk zekertoestel gebruik je om een naklimmer in ‘Guide’-modus te zekeren?',
      opties: [
        'Een dynamisch zekertoestel met blokkeerfunctie (Petzl Reverso, Black Diamond ATC Guide…)',
        'Een Grigri',
        'Een acht',
        'Een halfautomaat zonder paniekfunctie',
      ],
      juist: 0,
      uitleg:
        'Een naklimmer zeker je met een dynamisch toestel met Guide-modus (Reverso, ATC Guide): de zelfblokkerende werking klemt het touw af als de naklimmer hangt of valt. Controleer die werking voor je ‘Départ!’ geeft.',
    },
    {
      id: 'k3-q23',
      thema: 'Topo',
      vraag: 'Wat betekent een quotatie als ‘6a/A0’?',
      opties: [
        'Je klimt verplicht stukken 6a vrij, en een moeilijker stuk overbrug je artificieel met ‘setje trek’ (A0)',
        'De hele route is 6a',
        'A0 betekent dat de route makkelijker is dan 6a',
        'Je moet de hele route artificieel klimmen',
      ],
      juist: 0,
      uitleg:
        'Bij vrij klimmen gebruik je zekeringen enkel ter beveiliging. A0 = setje trek (aan een setje hangen/trekken). ‘6a/A0’: 6a is het verplichte vrije niveau, het moeilijkere stuk overbrug je met setje trek.',
    },
    {
      id: 'k3-q24',
      thema: 'Checklist',
      vraag: 'Welke uitspraak past bij het einde van een multipitchroute?',
      opties: [
        '‘Aan het eind van de route ben je pas halfweg’, het rappellen/afdalen vraagt evenveel aandacht',
        'Eenmaal boven is alle gevaar geweken',
        'Rappellen is altijd sneller dan afwandelen',
        'Je mag je touwen nooit door je handen laten gaan',
      ],
      juist: 0,
      uitleg:
        'Boven ben je pas halfweg: bij het rappellen kan er veel misgaan (touw klem, stand voorbij, stenen, touwen laten vallen…). Soms is afwandelen de snelste en veiligste keuze.',
    },
    {
      id: 'k3-q25',
      thema: 'Geologie',
      vraag: 'Op welk gesteente klim je in Belgie het vaakst (Maas-, Lesse- en Ourthevallei)?',
      opties: [
        'Kalksteen (calcaire), uit het Devoon en Carboon',
        'Graniet',
        'Zandsteen',
        'Basalt',
      ],
      juist: 0,
      uitleg:
        'De Belgische sportklimrotsen (Freyr, Beez, Marche-les-Dames, Dave, Hotton...) zijn overwegend kalksteen uit het Devoon en Carboon, in de valleien van Maas, Lesse en Ourthe.',
    },
    {
      id: 'k3-q26',
      thema: 'Geologie',
      vraag: 'Op welk gesteente klim je doorgaans in de Franse sportklimgebieden (Gorges du Tarn, Orpierre, Verdon)?',
      opties: [
        'Ook overwegend kalksteen (calcaire)',
        'Uitsluitend graniet',
        'Uitsluitend zandsteen',
        'Vulkanisch gesteente',
      ],
      juist: 0,
      uitleg:
        'De klassieke Franse sportgebieden (Gorges du Tarn, Orpierre, Verdon, Ceuse) zijn overwegend kalksteen. Graniet vind je vooral in de bergen (Mont Blanc-massief), zandsteen onder meer in Fontainebleau.',
    },
    {
      id: 'k3-q27',
      thema: 'Geologie',
      vraag: 'Waar staat het Franse Fontainebleau om bekend?',
      opties: [
        'Boulderen op zandsteenblokken (gres)',
        'Multipitch op kalksteen',
        'IJsklimmen',
        'Graniet-bigwalls',
      ],
      juist: 0,
      uitleg:
        'Fontainebleau is het bekendste boulderterrein ter wereld: ronde zandsteenblokken (gres). Het is geen relais- of multipitchgebied maar boulderen op laaghoogte met crashpads.',
    },
    {
      id: 'k3-q28',
      thema: 'Ecologie',
      vraag: 'Waarom zijn sommige Belgische en Franse rotsen tijdelijk gesloten voor klimmers?',
      opties: [
        'Om broedende roofvogels (slechtvalk, oehoe) niet te storen tijdens het broedseizoen',
        'Omdat de rots dan te nat is',
        'Om de haken te laten roesten',
        'Voor commerciele exploitatie',
      ],
      juist: 0,
      uitleg:
        'Heel wat rotsen kennen een seizoensverbod om broedende roofvogels zoals slechtvalk en oehoe te beschermen. Respecteer deze afspraken; ze staan in de topo en bij de toegangsregeling van de federatie.',
    },
    {
      id: 'k3-q29',
      thema: 'Ecologie',
      vraag: 'Hoe hou je het rotsklimmen ecologisch verantwoord?',
      opties: [
        'Propere schoenen, leave no trace, magnesium en tickmarks beperken, op de paden blijven en rust houden',
        'Zoveel mogelijk magnesium gebruiken voor grip',
        'Nieuwe paden maken naar de rots',
        'Vuur maken aan de wand om op te warmen',
      ],
      juist: 0,
      uitleg:
        'Hou je schoenen proper (zandkorrels polijsten de rots), neem je afval mee, beperk magnesium en tickmarks, blijf op de paden, hou het rustig (fauna), maak geen vuur en parkeer correct.',
    },
  ],
  flashcards: [
    {
      id: 'k3-f1',
      thema: 'Multipitch',
      voorkant: 'KVB 3, multipitch',
      achterkant:
        'Outdoor voorklimmen met enkeltouw op goed geëquipeerde massieven: standplaatsen met twee boorhaken, uitgeruste rappelpistes (standen ≤ halve touwlengte uit elkaar).',
    },
    {
      id: 'k3-f2',
      thema: 'Voorbereiding',
      voorkant: 'Voorbereiding aan de voet',
      achterkant:
        'Touw klaarleggen (naklimmer-einde weg van de wand, voorklimmer-einde naar de wand), beiden inbinden, zekertoestel installeren, lang lint + materiaal op de gordel, partnercheck (ook de rugzak).',
    },
    {
      id: 'k3-f3',
      thema: 'Zelfzekering',
      voorkant: 'Zelfzekering op mastworp',
      achterkant:
        'Bij multipitch: zelfzekering met het klimtouw op een mastworp (geen statische leeflijn). Meteen op lengte, makkelijk aanpasbaar, dynamisch. Moet je met één hand kunnen leggen.',
    },
    {
      id: 'k3-f4',
      thema: 'Scenario’s',
      voorkant: 'Vaste vs variabele voorklimmer',
      achterkant:
        'Vast: één klimt alles voor (bij groot niveauverschil/schrik). Variabel: afwisselen → sneller (minder touwhandelingen), druk verdeeld. Je kan tussendoor wisselen.',
    },
    {
      id: 'k3-f5',
      thema: 'Scenario’s',
      voorkant: 'Verbonden vs niet-verbonden relais',
      achterkant:
        'Verbonden: ketting + maillon, simpel en snel. Niet-verbonden: twee losse haken die je zelf verbindt (lang lint + mastworp). Tussenvorm: verbonden met touwtje/lint → inspecteer grondig.',
    },
    {
      id: 'k3-f6',
      thema: 'Stappenplan',
      voorkant: 'Stappenplan aan de stand',
      achterkant:
        '1) Standplaats installeren. 2) Resttouw ophalen. 3) Naklimmer zekeren. 4) Verbouwen naar voorklimmerzekering. 5) Materiaal doorgeven. 6) Vertrek voorklimmer.',
    },
    {
      id: 'k3-f7',
      thema: 'Stappenplan',
      voorkant: 'Touwcommando’s multipitch',
      achterkant:
        '‘Relais!’ = stand klaar. ‘Touw in!’ = voorklimmer haalt resttouw op. ‘Touw uit!’ = al het resttouw is op. ‘Départ!’ / ‘Départ oké!’ = naklimmer vertrekt.',
    },
    {
      id: 'k3-f8',
      thema: 'Zekeren op lichaam/stand',
      voorkant: 'Op het lichaam zekeren',
      achterkant:
        'Vertical Thinking kiest hiervoor: vertrouwd (zelfde tunnelmethode/remhandreflex als KVB 1/2), comfortabeler te installeren, en de val wordt dynamischer opgevangen door het lichaam.',
    },
    {
      id: 'k3-f9',
      thema: 'Dummy runner',
      voorkant: 'Dummy runner',
      achterkant:
        'Omlooppunt zodat een val vóór het eerste setje het zekertoestel niet naar beneden belast (anders geen remwerking). Na een paar ingepikte setjes mag hij los.',
    },
    {
      id: 'k3-f10',
      thema: 'Zekeren op lichaam/stand',
      voorkant: 'Kans op val net na de relais',
      achterkant:
        'Verleng de zelfzekering van de zekeraar en hang hem lager: meer touw in omloop → lagere valfactor, en minder kans dat de zekeraar tegen de dummy runner of een overhang getrokken wordt.',
    },
    {
      id: 'k3-f11',
      thema: 'Halfautomaat',
      voorkant: 'Voorklimmer met halfautomaat',
      achterkant:
        'Grigri voor de voorklimmer (veel remassistentie, goed voor vertrouwen). Naklimmer zekeren + rappellen blijft met de dynamische Reverso-achtige. Minpunt: iets minder dynamiek.',
    },
    {
      id: 'k3-f12',
      thema: 'Rappellen',
      voorkant: 'Rappel, installatie',
      achterkant:
        'Touw door de maillon, twee zaksteken op 50 cm van het einde (‘van voor naar achter, van boven naar onder, twee knoopjes erin’). Zoek het midden van het touw voor je uitgooit.',
    },
    {
      id: 'k3-f13',
      thema: 'Rappellen',
      voorkant: 'Rappelmachard',
      achterkant:
        'Machardlus met ankersteek aan de zekerlus (onder de leeflijn), machard rond de rappeltouwen onder het afdaaltoestel. Hou de machard laag en los; blokkeert als je loslaat.',
    },
    {
      id: 'k3-f14',
      thema: 'Rappellen',
      voorkant: 'Touwen uitgooien',
      achterkant:
        'Roep ‘Corde!’ (Seil/Rope/Corda). Gooi de stapels niet in elkaar: de ene naar links, de andere naar rechts, of laat twee tellen ertussen.',
    },
    {
      id: 'k3-f15',
      thema: 'Rappellen',
      voorkant: 'Afstand rappelstanden',
      achterkant:
        'Je rappelt op dubbel touw, dus standen liggen ≤ de helft van je touwlengte uit elkaar. Een rappel van 50 m kan niet met een enkeltouw van 70/80 m.',
    },
    {
      id: 'k3-f16',
      thema: 'Rappellen',
      voorkant: 'Touw recupereren',
      achterkant:
        'Trek aan de streng met het halve achtje zodat het andere einde naar boven verdwijnt; let op knopen/lussen. Eindig met een halve achtknoop op het uiteinde. Elk een half touw in de nek.',
    },
    {
      id: 'k3-f17',
      thema: 'Zelfredding',
      voorkant: 'Zelfredding / prusikken',
      achterkant:
        'Bij misgelopen rappel (stand voorbij, niet gevonden, touw klem): omhoog met twee machards (één leeflijnmachard, één voetlusmachard), mastworp om de paar meter mee omhoog schuiven.',
    },
    {
      id: 'k3-f18',
      thema: 'Deblokkeren',
      voorkant: 'Deblokkeren zekertoestel',
      achterkant:
        'Guide-modus klemt af. Naklimmer zwaait weg in een overhang → deblokkeren: halve mastworp op remtouw aan de zekerlus, musketon als hendel om het toestel te kantelen, remtouw vasthouden.',
    },
    {
      id: 'k3-f19',
      thema: 'Expresstakel',
      voorkant: 'Expresstakel (3:1)',
      achterkant:
        '3 cm trekken = 1 cm stijgen. Door wrijving/rek in de praktijk minder efficiënt. Enkel om een naklimmer bij een moeilijke pas te assisteren, niet om echt op te takelen.',
    },
    {
      id: 'k3-f20',
      thema: 'Expresstakel',
      voorkant: 'Teruglooprem',
      achterkant:
        'De Reverso blijft als teruglooprem: zelfblokkerende werking belet terugzakken als je geen kracht zet. Machard op het hoofdtouw, remtouw erin, machard naar beneden schuiven en takelen.',
    },
    {
      id: 'k3-f21',
      thema: 'Halve mastworp',
      voorkant: 'Halve mastworp (HMS)',
      achterkant:
        'Voorbijgestreefd bij sportklimmen, maar noodoplossing: verlies je toestel + reserve, dan kan je met de HMS voor-/naklimmen zekeren én rappellen. Nadeel: torsie, slijtage, geen blokkering naklimmer.',
    },
    {
      id: 'k3-f22',
      thema: 'Alpiene slipsteek',
      voorkant: 'Alpine slipsteek',
      achterkant:
        'Bindt een HMS-zekersysteem af zodat je het remtouw kan loslaten en beide handen vrij hebt (bv. expresstakel installeren, voorklimmer even ter plaatse houden).',
    },
    {
      id: 'k3-f23',
      thema: 'Materiaal',
      voorkant: 'Naklimmer zekeren, Guide-modus',
      achterkant:
        'Dynamisch toestel met blokkeerfunctie (Petzl Reverso, BD ATC Guide). Controleer de zelfblokkerende werking (trek aan het naklimmertouw zonder remtouw vast te houden) voor je ‘Départ!’ geeft.',
    },
    {
      id: 'k3-f24',
      thema: 'Topo',
      voorkant: 'Vrij vs artificieel klimmen',
      achterkant:
        'Vrij: zekeringen enkel ter beveiliging. A0 = setje trek. A1 = mobiele zekering + laddertje (buiten KVB 3). ‘6a/A0’: 6a verplicht vrij, moeilijker stuk overbruggen met setje trek.',
    },
    {
      id: 'k3-f25',
      thema: 'Topo',
      voorkant: 'Topostudie',
      achterkant:
        'Bereid je grondig voor met de topo. camptocamp.org geeft commentaar van klimmers (quotaties, lengtes, rappelstanden). ‘↓’ = relais met ketting/maillon, ‘○’ = niet per se verbonden.',
    },
    {
      id: 'k3-f26',
      thema: 'Checklist',
      voorkant: 'Op het lichaam, materiaal',
      achterkant:
        'Gordel, schoenen, pofzak, helm, touw, 10-14 setjes, 5 HMS-schroefmusketons, 1 zekertoestel (Reverso/ATC Guide), lint 60 + 120 cm, 2 machardlussen + 5 m prusiktouw, mes, topo, GSM.',
    },
    {
      id: 'k3-f27',
      thema: 'Checklist',
      voorkant: 'In de rugzak',
      achterkant:
        '1 extra zekertoestel, hoofdlamp, regenjas, eten/drinken, zonnecrème, overlevingsdekentje, EHBO, identiteitskaart + lidkaart KBF, geld voor een pastis achteraf.',
    },
    {
      id: 'k3-f28',
      thema: 'Rappellen',
      voorkant: 'Boven = halfweg',
      achterkant:
        'Aan het eind van de route ben je pas halfweg. Rappellen vraagt volle aandacht (touw klem, stand voorbij, stenen, touwen laten vallen). Soms is afwandelen sneller en veiliger.',
    },
    {
      id: 'k3-f29',
      thema: 'Rappellen',
      voorkant: 'Eerste vs tweede rappeller',
      achterkant:
        'De ervaarste rappelt als eerste (zoekt de volgende stand, lost touwwirwar op). Tweede rappeller wacht ± 3 m boven de stand als de eerste nog bezig is met de voorbereiding.',
    },
    {
      id: 'k3-f30',
      thema: 'Zelfredding',
      voorkant: 'Twee machards bij zelfredding',
      achterkant:
        'Leeflijnmachard boven het afdaaltoestel (om te hangen) en een voetlusmachard met het lange lint (om in te staan). Afwisselend omhoog schuiven; dubbele mastworp als back-up mee opschuiven.',
    },
    {
      id: 'k3-f31',
      thema: 'Geologie',
      voorkant: 'Gesteente in Belgie',
      achterkant:
        'Overwegend kalksteen (calcaire) uit het Devoon en Carboon, in de valleien van Maas, Lesse en Ourthe: Freyr, Beez, Marche-les-Dames, Dave, Hotton.',
    },
    {
      id: 'k3-f32',
      thema: 'Geologie',
      voorkant: 'Gesteente in Frankrijk',
      achterkant:
        'Sportgebieden zijn meestal kalksteen (Gorges du Tarn, Orpierre, Verdon, Ceuse). Graniet in de bergen (Mont Blanc), zandsteen in Fontainebleau (boulderen).',
    },
    {
      id: 'k3-f33',
      thema: 'Geologie',
      voorkant: 'Kalksteen herkennen',
      achterkant:
        'Grijs tot beige, vaak met gaten, richels en lijstjes. Het lost traag op door water (karst), wat de typische kloven en grotten van de Maasvallei en de Gorges du Tarn verklaart.',
    },
    {
      id: 'k3-f34',
      thema: 'Ecologie',
      voorkant: 'Ecologisch klimmen',
      achterkant:
        'Propere schoenen (zandkorrels polijsten de rots), leave no trace, magnesium en tickmarks beperken, op de paden blijven, rust houden, geen vuur, correct parkeren, lokale topo kopen.',
    },
    {
      id: 'k3-f35',
      thema: 'Ecologie',
      voorkant: 'Broedseizoen en toegang',
      achterkant:
        'Sommige rotsen zijn tijdelijk gesloten voor broedende roofvogels (slechtvalk, oehoe). Respecteer de toegangsregeling van de federatie; ze staat in de topo.',
    },
  ],
};
