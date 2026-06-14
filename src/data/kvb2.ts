import type { LevelContent } from '../types';

export const kvb2: LevelContent = {
  id: 'kvb2',
  naam: 'KVB 2',
  ondertitel: 'Indoor Voorklimmen',
  beschikbaar: true,
  quiz: [
    {
      id: 'k2-q1',
      thema: 'Setjes',
      vraag: 'Waaruit bestaat een setje (tussenzekering)?',
      opties: [
        'Twee snappers verbonden door een stukje bandsling (de ‘dogbone’)',
        'Twee schroefmusketons en een touw',
        'Eén HMS-musketon en een sling',
        'Een snapper en een maillon rapide',
      ],
      juist: 0,
      uitleg:
        'Een setje = twee snappers verbonden met een dogbone (dyneema of nylon). De haaksnapper komt aan de haak, de touwsnapper dient om het touw in te pikken.',
    },
    {
      id: 'k2-q2',
      thema: 'Setjes',
      vraag: 'Waarom pik je nooit touw in in de ‘haaksnapper’?',
      opties: [
        'Die kan door belasting op de haken bekrast raken (ijzeren bramen) en zou het touw beschadigen',
        'Die is te klein voor touw',
        'Die zit te vast in de sling',
        'Dat mag wel, het maakt niet uit',
      ],
      juist: 0,
      uitleg:
        'De haaksnapper (rechte snapper) komt aan de haken en kan bekrast raken. Touw pik je enkel in de touwsnapper (gebogen snapper), die door het touw glad gepolijst wordt.',
    },
    {
      id: 'k2-q3',
      thema: 'Setjes',
      vraag: 'Wat is het voordeel van dyneema tegenover nylon voor de dogbone?',
      opties: [
        'Dyneema is lichter, dunner en aangenamer; nylon is dynamischer, duurzamer en goedkoper',
        'Dyneema is dynamischer en goedkoper',
        'Nylon is altijd lichter',
        'Er is geen enkel verschil',
      ],
      juist: 0,
      uitleg:
        'Dyneema (meestal wit): lichter, dunner, aangenamer. Nylon: dynamischer, duurzamer, goedkoper, verdraagt knopen en wrijving beter (hogere smelttemperatuur).',
    },
    {
      id: 'k2-q4',
      thema: 'Touwzak',
      vraag: 'Wat is een belangrijk veiligheidsvoordeel van een touwzak?',
      opties: [
        'Het uiteinde waarop je niet klimt zit met een stopknoop aan de zak vast, zodat het niet door het toestel kan schieten',
        'De touwzak maakt het touw zwaarder',
        'Hij vervangt de partnercheck',
        'Hij maakt knopen overbodig in de inbindknoop',
      ],
      juist: 0,
      uitleg:
        'Voordelen: bescherming, geen ongewenste knopen, snel werken en veiligheid: het niet-klimuiteinde zit met een stopknoop aan de zak, dus het kan niet door het toestel schieten.',
    },
    {
      id: 'k2-q5',
      thema: 'Relais',
      vraag: 'Wat betekent ‘redundantie’ bij een relais?',
      opties: [
        'Een dubbele veiligheid: twee bevestigingspunten en het touw door twee musketons',
        'Dat je het touw maar door één musketon legt',
        'Dat het relais uit één enorme haak bestaat',
        'Dat je twee touwen tegelijk inpikt',
      ],
      juist: 0,
      uitleg:
        'Een relais hangt aan twee punten en je legt het touw door twee musketons. Faalt er één, dan neemt het andere de belasting over. Pik nooit twee belaste touwen tegelijk in.',
    },
    {
      id: 'k2-q6',
      thema: 'Orde aan de gordel',
      vraag: 'Hoe zorg je voor ‘orde aan de gordel’ bij het voorklimmen?',
      opties: [
        'Enkel setjes aan de voorste lussen (zelfde richting, helft links/helft rechts), zekertoestel eventueel achteraan',
        'Alle materiaal door elkaar aan één lus',
        'Setjes aan de achterste lus, toestel vooraan',
        'Zoveel mogelijk materiaal meenemen',
      ],
      juist: 0,
      uitleg:
        'Aan de voorste materiaallussen hangen enkel setjes (met de haaksnapper, allemaal dezelfde richting, helft links/helft rechts). Achteraan eventueel je safebiner met zekertoestel.',
    },
    {
      id: 'k2-q7',
      thema: 'Setjes plaatsen',
      vraag: 'Wat is een van de belangrijkste regels bij het inpikken van een setje?',
      opties: [
        'Je mag NOOIT vallen tijdens het inpikken van een setje',
        'Je pikt altijd in vanuit een wankele positie',
        'Je neemt zoveel mogelijk touw op',
        'Je klimt eerst verder en pikt daarna pas in',
      ],
      juist: 0,
      uitleg:
        'Plaats een setje altijd in een stabiele, comfortabele positie. NOOIT vallen met touw in je hand tijdens het inpikken: dan is er veel vrij touw en wordt de val veel dieper.',
    },
    {
      id: 'k2-q8',
      thema: 'Setjes plaatsen',
      vraag: 'Welke kant moet de opening van de onderste (touw)snapper wijzen?',
      opties: [
        'In de andere richting dan de richting waarin je verder klimt',
        'Altijd naar links',
        'Naar de muur toe',
        'In dezelfde richting als je klimrichting',
      ],
      juist: 0,
      uitleg:
        'De opening wijst weg van je klimrichting. Zo schuurt het touw met de sterke rug van de musketon tegen de muur en niet met de zwakkere voorkant (neus). Bij verticaal klimmen maakt het niet uit.',
    },
    {
      id: 'k2-q9',
      thema: 'Setjes plaatsen',
      vraag: 'Wat zijn ‘de drie regels van een setje’?',
      opties: [
        'Haaksnapper aan de haak/touw in de touwsnapper, onderste snapper weg van klimrichting, touw komt naar de klimmer toe uit het setje',
        'Altijd dyneema, altijd links, altijd twee setjes',
        'Snapper open, sling strak, touw dubbel',
        'Eén snapper, één haak, één touw',
      ],
      juist: 0,
      uitleg:
        'De drie regels: (1) haaksnapper aan de haak en touw in de touwsnapper, (2) onderste snapper wijst weg van de klimrichting, (3) het touw loopt van de inbindknoop naar de voorkant van het setje.',
    },
    {
      id: 'k2-q10',
      thema: 'Timing',
      vraag: 'Hoe ga je om met de eerste drie setjes van een route?',
      opties: [
        'Eerder snel plaatsen en vanuit een lagere, stabiele positie inpikken om de grond niet te raken',
        'Zo hoog mogelijk reiken om touw te sparen',
        'Pas inpikken als het setje aan je heup hangt',
        'Overslaan tot je hoger bent',
      ],
      juist: 0,
      uitleg:
        'De eerste drie setjes plaats je snel en pik je in vanuit een lagere stabiele positie om grondcontact te vermijden. Daarna klim je ‘in toprope’ verder en minimaliseer je de valdiepte.',
    },
    {
      id: 'k2-q11',
      thema: 'Z-klip',
      vraag: 'Wat is een ‘Z-klip’?',
      opties: [
        'Je pikt in met touw van onder de vorige tussenzekering, waardoor het touw een Z-vorm maakt en veel weerstand geeft',
        'Een knoop in het touw',
        'Twee setjes in dezelfde haak',
        'Een setje dat ondersteboven hangt',
      ],
      juist: 0,
      uitleg:
        'Bij een Z-klip nam je touw van onder de vorige zekering. Los het op door de onderste zekering los en correct terug in te pikken, of pik het bovenste uit en opnieuw correct in.',
    },
    {
      id: 'k2-q12',
      thema: 'Voetfout',
      vraag: 'Wat is het gevaar van het touw achter je been bij een voorklimmersval?',
      opties: [
        'Een katapult-effect waarbij je ondersteboven met hoofd en rug tegen de wand knalt',
        'Het touw breekt',
        'Je valt te zacht',
        'Er gebeurt niets bijzonders',
      ],
      juist: 0,
      uitleg:
        'Touw achter het been → katapult-effect, ondersteboven tegen de wand. Onthou de volgorde wand, touw, voeten. De zekeraar roept ‘Voetfout!’, de klimmer maakt een 360° rond het touw.',
    },
    {
      id: 'k2-q13',
      thema: 'Zekeren voorklimmer',
      vraag: 'Waarom blijft de zekeraar dicht bij de wand en onder de eerste tussenzekering?',
      opties: [
        'Te ver achteruit verlengt de valdiepte (grondval) en je kan hard tegen de muur knallen en het remtouw lossen',
        'Om beter zicht te hebben op de relais',
        'Om sneller touw te kunnen geven',
        'Dat hoeft niet, je mag ver achter staan',
      ],
      juist: 0,
      uitleg:
        'Te ver achter → de val trekt de zekeraar naar voor/omhoog, wat de valdiepte verlengt (grondval mogelijk) en je kan hard tegen de muur knallen en daardoor je remtouw lossen.',
    },
    {
      id: 'k2-q14',
      thema: 'Zekeren voorklimmer',
      vraag: 'Wat is ‘spotten’ tot aan de eerste haak?',
      opties: [
        'Bij een val vóór de eerste zekering het lichaam bijsturen zodat de klimmer op de voeten landt, niet op hoofd/nek/rug',
        'Het touw zo strak mogelijk houden',
        'De klimmer omhoog duwen',
        'Naar de relais turen',
      ],
      juist: 0,
      uitleg:
        'Spotten = met je handen het vallende lichaam bijsturen zodat het eerst met de voeten landt. Hou duim en vingers niet gespreid (kans op breuk). Komt hij recht, doe dan weinig.',
    },
    {
      id: 'k2-q15',
      thema: 'Zekeren voorklimmer',
      vraag: 'Wat betekent ‘actief zekeren’?',
      opties: [
        'Continu afwisselen tussen touw uitgeven en touw innemen volgens wat de klimmer doet',
        'Het touw de hele tijd strak houden',
        'Enkel touw uitgeven',
        'Achteruit lopen bij elke beweging',
      ],
      juist: 0,
      uitleg:
        'Actief zekeren: inhalen na het inpikken en bij het naderen van de zekering, uitgeven zodra de klimmer eroverheen klimt of touw opneemt. Combineer armbewegingen met een stap voor/achter.',
    },
    {
      id: 'k2-q16',
      thema: 'Zekeren voorklimmer',
      vraag: 'Bij wie gebeuren de meeste ongevallen bij indoor voorklimmen?',
      opties: [
        'Door fouten van de zekeraar, niet van de voorklimmer',
        'Altijd door de voorklimmer',
        'Door fouten in het materiaal',
        'Door de evaluator',
      ],
      juist: 0,
      uitleg:
        'De meeste ongevallen komen door fouten van de zekeraar. Blijf geconcentreerd: volg de klimmer, let op vergeten setjes, signaleer voetfouten en optimaliseer de touwhoeveelheid.',
    },
    {
      id: 'k2-q17',
      thema: 'Voorklimmersval maken',
      vraag: 'Wat roep je best als voorklimmer vlak voor je valt?',
      opties: [
        '‘Ik ga vallen!’ of ‘Pas op hé!’, niet ‘Blok!’, want dan trekt de zekeraar je naar beneden',
        '‘Blok!’',
        '‘Descend!’',
        '‘Sec!’',
      ],
      juist: 0,
      uitleg:
        'Roep ‘Ik ga vallen!’. ‘Blok!’ is fout: je staat boven je laatste zekering, dus blokken zou je naar beneden trekken, een vervelend gevoel.',
    },
    {
      id: 'k2-q18',
      thema: 'Voorklimmersval maken',
      vraag: 'Wat doe je met je lichaam tijdens een voorklimmersval?',
      opties: [
        'Loslaten, je inbindknoop vastgrijpen en de impact opvangen met licht gespreide, inklappende benen',
        'Je vastgrijpen aan de dichtstbijzijnde greep',
        'Je benen stijf en gestrekt houden',
        'Naar het setje grijpen',
      ],
      juist: 0,
      uitleg:
        'Laat los, grijp je inbindknoop (blijft rechtop + vermijdt grijpen naar gevaarlijke dingen), en vang de wandimpact op met licht gespreide benen die als schokbrekers inklappen.',
    },
    {
      id: 'k2-q19',
      thema: 'Statisch vs dynamisch',
      vraag: 'Wanneer kies je voor STATISCH zekeren?',
      opties: [
        'Op de eerste setjes, boven een uitsteeksel of in een dal met veel structuur, om de valdiepte te beperken',
        'Altijd, in elke situatie',
        'Enkel in een grote overhang',
        'Nooit, het is verboden',
      ],
      juist: 0,
      uitleg:
        'Statisch beperkt de valdiepte: op de eerste 2-3 setjes (grondval vermijden), boven een uitsteeksel, in een dal met structuur, of als lichtere zekeraar met zware voorklimmer.',
    },
    {
      id: 'k2-q20',
      thema: 'Statisch vs dynamisch',
      vraag: 'Wat is het effect van statisch zekeren op de piekbelasting?',
      opties: [
        'De val komt snel tot stilstand → hogere piekbelasting in de hele zekeringsketen',
        'De piekbelasting wordt lager',
        'Er verandert niets aan de krachten',
        'Het touw rekt meer uit',
      ],
      juist: 0,
      uitleg:
        'Statisch (achteruit springen) beperkt de valdiepte maar stopt de val abrupt → hoge piekbelasting, harde schok in de rug, klap tegen de wand. Vang de klap op in de benen.',
    },
    {
      id: 'k2-q21',
      thema: 'Statisch vs dynamisch',
      vraag: 'Hoe zeker je DYNAMISCH een voorklimmersval?',
      opties: [
        'Je laat je lichaam meetrekken richting de wand/eerste setje zodat de remfase langer duurt en de piekbelasting daalt',
        'Je springt zo ver mogelijk achteruit',
        'Je laat bewust touw door je hand glijden',
        'Je houdt het touw zo strak mogelijk',
      ],
      juist: 0,
      uitleg:
        'Dynamisch: met een kleine slackboog laat je je lichaam meetrekken en loop/spring je mee omhoog tegen de wand. De val is dieper maar zachter; de piekbelasting ligt lager dan statisch.',
    },
    {
      id: 'k2-q22',
      thema: 'Statisch vs dynamisch',
      vraag: 'Hoe ver mag je als zekeraar achteruit staan om dynamisch te kunnen zekeren?',
      opties: [
        'Nooit meer dan ongeveer 1,5 à 2 meter',
        'Zo ver mogelijk',
        '5 meter',
        'Het maakt niet uit',
      ],
      juist: 0,
      uitleg:
        'Sta nooit meer dan ± 1,5 à 2 m achteruit. Dynamisch zekeren doe je niet door ‘naar de wand te lopen’, dan word je van je voeten getrokken zonder echt dynamisch te zekeren.',
    },
    {
      id: 'k2-q23',
      thema: 'Zekeringsketen',
      vraag: 'Wat is de ‘zekeringsketen’?',
      opties: [
        'Al het materiaal dat de valenergie te verwerken krijgt: gordels, inbindknoop, toestel, setje, haak, touw…',
        'Enkel het touw',
        'De ketting van het relais',
        'De reeks setjes onder de klimmer',
      ],
      juist: 0,
      uitleg:
        'De zekeringsketen omvat alles waar de valenergie op terechtkomt: gordels, inbindknoop, zekertoestel, het setje waarop de val gebeurt, de haak, de klimmuur en het touw zelf.',
    },
    {
      id: 'k2-q24',
      thema: 'Recupereren',
      vraag: 'Wat is een ‘télépherique’ bij het recupereren van setjes?',
      opties: [
        'Je maakt de haaksnapper los en hangt die aan je zekerlus; de touwsnapper blijft rond het touw zodat je bij het volgende setje uitkomt',
        'Een tweede touw naar beneden',
        'Een katrol aan het relais',
        'Een manier om sneller te klimmen',
      ],
      juist: 0,
      uitleg:
        'Bij een schuine/overhangende route kom je loodrecht naar beneden. Met de télépherique (haaksnapper aan je zekerlus, touwsnapper rond het touw) glijd je naar de volgende te recupereren zekering.',
    },
    {
      id: 'k2-q25',
      thema: 'Recupereren',
      vraag: 'Wat doe je als je halverwege een route op een gewone tussenzekering naar beneden komt?',
      opties: [
        'Alle reeds ingepikte setjes onder je ingepikt laten, anders hangt je veiligheid aan één setje en één haak',
        'Alle setjes uitpikken voor je zakt',
        'Enkel het onderste setje ingepikt laten',
        'Het touw uit het toestel halen',
      ],
      juist: 0,
      uitleg:
        'Laat alle reeds ingepikte setjes onder je ingepikt: anders hangt je volledige veiligheid aan één setje en één haak, en dat is te weinig.',
    },
    {
      id: 'k2-q26',
      thema: 'Examen',
      vraag: 'Hoeveel procent juist moeten de antwoorden op de theorievragen zijn?',
      opties: ['75 %', '50 %', '90 %', '100 %'],
      juist: 0,
      uitleg:
        'Op de evaluatie moeten de theorie-antwoorden 75 % juist zijn. Tijdens de praktijk mag je maximaal twee kleinere fouten maken, maar geen enkele directe veiligheidsfout.',
    },
    {
      id: 'k2-q27',
      thema: 'Examen',
      vraag: 'Welke van deze is een directe veiligheidsfout (= niet slagen) op het KVB 2-examen?',
      opties: [
        'Starten zonder partnercheck, met een foute inbindknoop, of zonder stopknoop op het touw',
        'Geen touwcommando’s gebruiken',
        'Een achtknoop met een te lang uiteinde',
        'De touwzak die niet mooi klaar ligt',
      ],
      juist: 0,
      uitleg:
        'Directe veiligheidsfouten (= niet slagen): starten op een fout georiënteerd toestel, zonder partnercheck, met foute inbindknoop, zonder stopknoop, remhand lossen, niet spotten, te ver achteruit lopen…',
    },
  ],
  flashcards: [
    {
      id: 'k2-f1',
      thema: 'Setjes',
      voorkant: 'Setje',
      achterkant:
        'Twee snappers verbonden met een dogbone (dyneema/nylon). Haaksnapper (recht) → aan de haak. Touwsnapper (gebogen) → om het touw in te pikken.',
    },
    {
      id: 'k2-f2',
      thema: 'Setjes',
      voorkant: 'Haaksnapper vs touwsnapper',
      achterkant:
        'Haaksnapper: aan de haken, kan bekrast raken → nooit touw in. Touwsnapper: enkel voor het touw, glad gepolijst, zit vastgeklemd in de sling om te stabiliseren.',
    },
    {
      id: 'k2-f3',
      thema: 'Setjes',
      voorkant: 'Wire-snapper',
      achterkant:
        'Snapper met ijzerdraad als beweegbaar deel. Vermijdt het whiplash-effect: lichter, minder momentum bij tegen de rots klappen, dus minder kans op kort openklikken bij een val.',
    },
    {
      id: 'k2-f4',
      thema: 'Setjes',
      voorkant: 'Dyneema vs nylon',
      achterkant:
        'Dyneema: lichter, dunner, aangenamer, maar statischer en minder duurzaam. Nylon: dikker, stugger, dynamischer, slijtvaster, beter bij knopen/wrijving.',
    },
    {
      id: 'k2-f5',
      thema: 'Touwzak',
      voorkant: 'Touwzak, voordelen',
      achterkant:
        'Beschermt het touw, vermijdt ongewenste knopen, sneller werken, en veiligheid: het niet-klimuiteinde zit met een stopknoop aan de zak. Rode lus = stopknoop, groene lus = zaksteek.',
    },
    {
      id: 'k2-f6',
      thema: 'Relais',
      voorkant: 'Relais & redundantie',
      achterkant:
        'Omlooppunt bovenaan, hangt aan twee punten; je legt het touw door twee musketons (dubbele veiligheid). Pik nooit twee belaste touwen tegelijk in (mantel smelt).',
    },
    {
      id: 'k2-f7',
      thema: 'Orde aan de gordel',
      voorkant: 'Orde aan de gordel',
      achterkant:
        'Voorste lussen: enkel setjes met de haaksnapper, zelfde richting, helft links/helft rechts. Achterste lus: eventueel safebiner met zekertoestel. Niets onnodigs meesleuren.',
    },
    {
      id: 'k2-f8',
      thema: 'Setjes plaatsen',
      voorkant: 'Gouden regel inpikken',
      achterkant:
        'Plaats een setje altijd in een stabiele, comfortabele positie. NOOIT vallen met touw in je hand tijdens het inpikken!',
    },
    {
      id: 'k2-f9',
      thema: 'Setjes plaatsen',
      voorkant: 'Oriëntatie onderste snapper',
      achterkant:
        'De opening wijst weg van je klimrichting, zodat het touw tegen de sterke rug schuurt en niet tegen de zwakke neus. Bij verticaal klimmen maakt het niet uit.',
    },
    {
      id: 'k2-f10',
      thema: 'Setjes plaatsen',
      voorkant: 'Drie regels van een setje',
      achterkant:
        '1) Haaksnapper aan de haak, touw in de touwsnapper. 2) Onderste snapper wijst weg van de klimrichting. 3) Het touw komt uit het setje naar de klimmer toe.',
    },
    {
      id: 'k2-f11',
      thema: 'Timing',
      voorkant: 'Timing eerste 3 setjes',
      achterkant:
        'Snel plaatsen, vanuit een lagere stabiele positie inpikken om grondcontact te vermijden. Daarna klim je ‘in toprope’ verder. Niet té ver reiken om in te pikken.',
    },
    {
      id: 'k2-f12',
      thema: 'Z-klip',
      voorkant: 'Z-klip',
      achterkant:
        'Touw genomen van onder de vorige zekering → Z-vorm, veel weerstand. Oplossen: onderste zekering los- en correct herinpikken, of het bovenste uitpikken en opnieuw inpikken.',
    },
    {
      id: 'k2-f13',
      thema: 'Voetfout',
      voorkant: 'Beenpositie / voetfout',
      achterkant:
        'Volgorde wand, touw, voeten. Touw achter je been → katapult-effect (ondersteboven tegen de wand). Zekeraar roept ‘Voetfout!’; klimmer maakt 360° rond het touw.',
    },
    {
      id: 'k2-f14',
      thema: 'Zekeren voorklimmer',
      voorkant: 'Standaardzekerhouding',
      achterkant:
        'Remhand op het remtouw, sensorhand op het andere touw, beide duimen omhoog. Eén been vooruit, één achteruit (niet parallel met de wand). Nooit op blote voeten.',
    },
    {
      id: 'k2-f15',
      thema: 'Zekeren voorklimmer',
      voorkant: 'Spotten',
      achterkant:
        'Tot de eerste haak: bij een val het lichaam bijsturen zodat de klimmer op de voeten landt (niet hoofd/nek/rug). Duim en vingers niet gespreid houden.',
    },
    {
      id: 'k2-f16',
      thema: 'Zekeren voorklimmer',
      voorkant: 'Actief zekeren',
      achterkant:
        'Continu afwisselen tussen uitgeven en innemen. Inhalen na inpikken, uitgeven met grote armbewegingen + stap vooruit zodra de klimmer touw opneemt om in te pikken.',
    },
    {
      id: 'k2-f17',
      thema: 'Zekeren voorklimmer',
      voorkant: 'Wie maakt de meeste fouten?',
      achterkant:
        'De meeste ongevallen bij indoor voorklimmen komen door fouten van de zekeraar. Blijf geconcentreerd; je bent verantwoordelijk voor de veiligheid van je voorklimmer.',
    },
    {
      id: 'k2-f18',
      thema: 'Zekeren voorklimmer',
      voorkant: 'Doorhangen vermijden',
      achterkant:
        'Het touw uit het toestel naar de klimmer moet ± meteen omhoog lopen, niet in een lus naar beneden hangen, dat verlengt onnodig de valdiepte.',
    },
    {
      id: 'k2-f19',
      thema: 'Gewichtsverschil',
      voorkant: 'Lichtere zekeraar',
      achterkant:
        'Sta zo dicht mogelijk onder het eerste setje, loop nooit achteruit. Opties: zandzak, verankering aan oog in grond/muur, Ohm, of extra touwwrijving door een setje opzij in te pikken.',
    },
    {
      id: 'k2-f20',
      thema: 'Voorklimmersval maken',
      voorkant: 'Voor je valt',
      achterkant:
        'Roep ‘Ik ga vallen!’ (niet ‘Blok!’). Check de voetpositie t.o.v. het touw: touw achter je been → NIET vallen, eerst corrigeren.',
    },
    {
      id: 'k2-f21',
      thema: 'Voorklimmersval maken',
      voorkant: 'Tijdens de val',
      achterkant:
        'Laat los, grijp je inbindknoop vast (blijft rechtop, geen gevaarlijk grijpen), vang de wandimpact op met licht gespreide, inklappende benen als schokbrekers.',
    },
    {
      id: 'k2-f22',
      thema: 'Statisch vs dynamisch',
      voorkant: 'Statisch zekeren, wanneer',
      achterkant:
        'Om de valdiepte te beperken: eerste 2-3 setjes, boven een uitsteeksel, in een dal met structuur, bij projecten in overhang, of als lichtere zekeraar met zware voorklimmer.',
    },
    {
      id: 'k2-f23',
      thema: 'Statisch vs dynamisch',
      voorkant: 'Statisch zekeren, effect',
      achterkant:
        'Achteruit springen, touw aanspannen. Beperkte valdiepte maar abrupte stop → hoge piekbelasting in de zekeringsketen, harde schok, klap tegen de wand. Vang op in de benen.',
    },
    {
      id: 'k2-f24',
      thema: 'Statisch vs dynamisch',
      voorkant: 'Dynamisch zekeren, hoe',
      achterkant:
        'Kleine slackboog, je lichaam meetrekken richting wand/eerste setje, mee omhoog lopen/springen. Remfase duurt langer → dieper maar zachter, lagere piekbelasting.',
    },
    {
      id: 'k2-f25',
      thema: 'Statisch vs dynamisch',
      voorkant: 'Max. afstand achteruit',
      achterkant:
        'Nooit meer dan ± 1,5 à 2 m achteruit. Anders word je van je voeten getrokken en knal je tegen de wand zonder echt dynamisch te zekeren.',
    },
    {
      id: 'k2-f26',
      thema: 'Zekeringsketen',
      voorkant: 'Zekeringsketen',
      achterkant:
        'Al het materiaal dat de valenergie verwerkt: gordel klimmer, inbindknoop, touw, setje van de val, haak, klimmuur, zekertoestel, safebiner, gordel zekeraar.',
    },
    {
      id: 'k2-f27',
      thema: 'Recupereren',
      voorkant: 'Aankomst aan de relais',
      achterkant:
        'Klip het touw in BEIDE musketons van het relais, vraag dan ‘Blok!’. Bij schuine/overhangende routes: gebruik een télépherique om de setjes te recupereren.',
    },
    {
      id: 'k2-f28',
      thema: 'Recupereren',
      voorkant: 'Télépherique',
      achterkant:
        'Haaksnapper van het setje los van de haak en aan je zekerlus; de touwsnapper blijft rond het touw. Bij het zakken kom je automatisch bij de volgende te recupereren zekering.',
    },
    {
      id: 'k2-f29',
      thema: 'Recupereren',
      voorkant: 'Zakken op een tussenzekering',
      achterkant:
        'Wil je halverwege zakken op een gewone zekering, laat dan ALLE reeds ingepikte setjes onder je ingepikt, anders hangt je veiligheid aan één setje en één haak.',
    },
    {
      id: 'k2-f30',
      thema: 'Examen',
      voorkant: 'Evaluatiecriteria',
      achterkant:
        'Theorie: 75 % juist. Praktijk: max. 2 kleinere fouten, géén directe veiligheidsfout. Je klimt en zekert 3 routes (dynamisch toestel, autotuber, halfautomaat).',
    },
    {
      id: 'k2-f31',
      thema: 'Examen',
      voorkant: 'Directe veiligheidsfouten',
      achterkant:
        'Bv.: setje overslaan/fout en niet corrigeren, te ver links/rechts klimmen, val niet uitvoeren, remhand lossen, te ver achteruit lopen, geen partnercheck, geen stopknoop.',
    },
    {
      id: 'k2-f32',
      thema: 'Examen',
      voorkant: 'Praktijkexamen route 1',
      achterkant:
        'Voorklimmersval op overhang, inbindpunt ± 50 cm boven het setje, eerst oogcontact met de evaluator. Klimmer grijpt het touw, vangt op in de benen; zekeraar dynamisch, 2 handen op remtouw.',
    },
  ],
};
