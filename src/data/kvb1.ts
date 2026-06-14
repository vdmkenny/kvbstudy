import type { LevelContent } from '../types';

export const kvb1: LevelContent = {
  id: 'kvb1',
  naam: 'KVB 1',
  ondertitel: 'Indoor Toprope',
  beschikbaar: true,
  quiz: [
    {
      id: 'k1-q1',
      thema: 'Toprope & voorklimmen',
      vraag: 'Wat is het kenmerk van toprope-klimmen (naklimmen)?',
      opties: [
        'Het touw loopt bovenaan door een vast omlooppunt, waardoor de valdiepte beperkt blijft',
        'De klimmer neemt het touw al klimmend mee omhoog en pikt het in tussenzekeringen',
        'Er wordt zonder touw geklommen op kleine hoogte',
        'De zekeraar staat bovenaan de wand',
      ],
      juist: 0,
      uitleg:
        'Bij toprope loopt het touw door een vast omlooppunt bovenaan. De zekeraar haalt in naarmate de klimmer stijgt, dus de mogelijke valdiepte is beperkt.',
    },
    {
      id: 'k1-q2',
      thema: 'Toprope & voorklimmen',
      vraag: 'Waarom nemen de krachten en risico’s toe bij voorklimmen (lead)?',
      opties: [
        'Omdat de klimmer boven zijn laatste tussenzekering uitklimt, wat de valdiepte vergroot',
        'Omdat het touw korter is dan bij toprope',
        'Omdat er geen zekeraar nodig is',
        'Omdat voorklimmen enkel binnen gebeurt',
      ],
      juist: 0,
      uitleg:
        'De voorklimmer klimt telkens boven de ingepikte tussenzekering uit, waardoor de potentiële valdiepte, de optredende krachten en de risico’s toenemen.',
    },
    {
      id: 'k1-q3',
      thema: 'KVB-systeem',
      vraag: 'Welke klimvaardigheidsbewijzen bestaan er in het standaardtraject?',
      opties: [
        'KVB 1 (Indoor Toprope), 2 (Indoor Voorklimmen), 3 (Outdoor Voorklimmen) en 4 (Adventure Climbing)',
        'Enkel KVB 1 en KVB 2',
        'KVB A tot KVB E',
        'Brons, zilver en goud',
      ],
      juist: 0,
      uitleg:
        'KVB 1 = indoor toprope, KVB 2 = indoor voorklimmen, KVB 3 = outdoor voorklimmen (multipitch), KVB 4 = adventure climbing met mobiele zekeringen.',
    },
    {
      id: 'k1-q4',
      thema: 'KVB-systeem',
      vraag: 'Is een KVB 3 wettelijk verplicht om op de rotsen te mogen klimmen?',
      opties: [
        'Nee, maar je moet wel lid zijn van een erkende bergsportfederatie',
        'Ja, anders mag je niet klimmen op de rotsen',
        'Ja, en het wordt aan de rotsen gecontroleerd',
        'Nee, en lidmaatschap van een federatie is ook niet nodig',
      ],
      juist: 0,
      uitleg:
        'Geen enkel KVB is verplicht aan de rotsen. Wel is lidmaatschap van een erkende bergsportfederatie verplicht, en dat kan gecontroleerd worden.',
    },
    {
      id: 'k1-q5',
      thema: 'Verzekering',
      vraag: 'Waarvoor heb je een lidmaatschap van de Klim- en Bergsportfederatie (KBF) nodig?',
      opties: [
        'Voor de bergsportverzekering en toegang tot de (gehuurde) rotsmassieven',
        'Enkel om een KVB te kunnen behalen',
        'Het is verplicht om in een indoorklimzaal te mogen klimmen',
        'Om korting te krijgen op je KVB-examen',
      ],
      juist: 0,
      uitleg:
        'Mutualiteiten dekken bergsportongevallen niet. Het KBF-lidmaatschap bevat een uitgebreide in- en outdoorverzekering en geeft toegang tot de gehuurde massieven.',
    },
    {
      id: 'k1-q6',
      thema: 'Gordels',
      vraag: 'Welke drie soorten gordels bestaan er op de markt?',
      opties: [
        'Heupgordels, integraalgordels en borstgordels',
        'Initiatie-, sport- en alpinegordels',
        'Heren-, dames- en kindergordels',
        'Verstelbare, vaste en hybride gordels',
      ],
      juist: 0,
      uitleg:
        'De drie soorten zijn heupgordels (de standaard), integraalgordels (ook rond de schouders) en borstgordels (maken van een heupgordel een integraalgordel).',
    },
    {
      id: 'k1-q7',
      thema: 'Gordels',
      vraag: 'Wat is het verschil tussen een initiatiegordel en een sportklimgordel?',
      opties: [
        'Een initiatiegordel heeft één gekleurde lus voor zowel inbinden als zekeren; een sportklimgordel heeft een beenlus, heuplus en een beweegbare zekerlus',
        'Een sportklimgordel heeft geen beenlussen',
        'Een initiatiegordel is altijd volledig verstelbaar',
        'Er is geen verschil, enkel de kleur verschilt',
      ],
      juist: 0,
      uitleg:
        'Bij een initiatiegordel bind je in (direct en indirect) en zeker je aan één en dezelfde gekleurde lus. Een sportklimgordel heeft een gecombineerd inbindpunt: beenlus, heuplus en een beweegbare zekerlus.',
    },
    {
      id: 'k1-q8',
      thema: 'Gordels',
      vraag: 'Welk onderdeel van de gordel is het meest gevoelig voor slijtage en moet je controleren?',
      opties: [
        'Het inbindpunt, vooral de beenlus',
        'De materiaallussen',
        'De heupriem-gesp',
        'De zitkussens',
      ],
      juist: 0,
      uitleg:
        'De slijtvastheid van het inbindpunt bepaalt de levensduur; het is vooral de beenlus die gecontroleerd moet worden. Een plastic bescherming verlengt de levensduur.',
    },
    {
      id: 'k1-q9',
      thema: 'Gordels',
      vraag: 'Hoeveel mag een materiaallus van een gordel dragen?',
      opties: ['Slechts ongeveer vijf kilo', 'Tot 21 kN', 'Evenveel als de zekerlus', 'Onbeperkt'],
      juist: 0,
      uitleg:
        'Let op: materiaallussen kunnen slechts ongeveer vijf kilo dragen, ze zijn niet bedoeld om in te zekeren of in te binden.',
    },
    {
      id: 'k1-q10',
      thema: 'Musketons',
      vraag: 'Wat kenmerkt een peervormige HMS-musketon?',
      opties: [
        'Een bredere kant met minder scherpe binnenhoek, zodat je ook met een halve mastworp kan zekeren',
        'Twee bijna evenwijdige zijden met scherpe hoeken',
        'Hij kan nooit beveiligd worden tegen openen',
        'Hij is altijd lichter dan een D-musketon',
      ],
      juist: 0,
      uitleg:
        'HMS staat voor ‘Halbe Mastwurf Sicherung’. De brede kant met minder scherpe hoek laat zekeren met een halve mastworp toe; gemarkeerd met een ‘H’ in een cirkel.',
    },
    {
      id: 'k1-q11',
      thema: 'Musketons',
      vraag: 'Welke sluitingen worden aanvaard als echte ‘safebiner’ om mee te zekeren?',
      opties: [
        'Triple-lock van het type Ball-lock en Belay Master',
        'Elke snapper',
        'Elke schroefmusketon',
        'Enkel twistlock-musketons',
      ],
      juist: 0,
      uitleg:
        'Enkel de Ball-lock en de Belay Master worden aanvaard als safebiner: een voldoende extra beveiligde triple-musketon. Twistlocks worden afgeraden bij het klimmen.',
    },
    {
      id: 'k1-q12',
      thema: 'Musketons',
      vraag: 'Hoeveel sterkte verliest een musketon gemiddeld bij dwarsbelasting of met open snapper?',
      opties: ['Ongeveer twee derde', 'Ongeveer een tiende', 'Niets, de sterkte blijft gelijk', 'De helft'],
      juist: 0,
      uitleg:
        'Een musketon verliest gemiddeld twee derde van zijn sterkte bij dwarsbelasting of bij belasting in de lengte met geopende snapper. Breeksterktes staan in kN op de musketon.',
    },
    {
      id: 'k1-q13',
      thema: 'Touwen',
      vraag: 'Wat betekent ‘kernmanteltouw’?',
      opties: [
        'Een kern van verstrengelde draden voor de sterkte, met een beschermende gekleurde mantel errond',
        'Een touw met twee aparte kabels',
        'Een touw zonder buitenlaag',
        'Een touw dat enkel uit een mantel bestaat',
      ],
      juist: 0,
      uitleg:
        'De kern (honderden verstrengelde draadjes) zorgt voor de sterkte en eigenschappen; de mantel is de gekleurde buitenkant die de kern tegen slijtage beschermt.',
    },
    {
      id: 'k1-q14',
      thema: 'Touwen',
      vraag: 'Wat is het verschil tussen statische en dynamische touwen?',
      opties: [
        'Dynamische touwen rekken uit en vangen valenergie op; statische touwen rekken niet en zijn ongeschikt voor sportklimmen',
        'Statische touwen zijn elastischer dan dynamische',
        'Dynamische touwen worden gebruikt voor speleologie',
        'Er is geen verschil in gebruik',
      ],
      juist: 0,
      uitleg:
        'Statische touwen (als een staalkabel) rekken niet en zijn voor canyoning/speleo. Dynamische touwen (als een elastiek) rekken uit, beperken de piekbelasting en zijn voor sportklimmen.',
    },
    {
      id: 'k1-q15',
      thema: 'Touwen',
      vraag: 'Hoe herken je een enkeltouw aan het tekentje op de plakker aan het uiteinde?',
      opties: [
        "Een '1' in een cirkeltje (dubbel = ½, tweeling = ∞)",
        "Altijd een '2'",
        'Aan de kleur van de mantel',
        'Er staat geen markering op',
      ],
      juist: 0,
      uitleg:
        "Enkeltouw = '1', dubbel-/halftouw = '½', tweelingtouw = '∞'. Voor indoor toprope en singlepitch gebruik je een enkeltouw (diameter 8,5-11 mm).",
    },
    {
      id: 'k1-q16',
      thema: 'Touwen',
      vraag: 'Hoe lang gebruik je klimmateriaal zoals touwen in het algemeen maximaal?',
      opties: [
        'Ongeveer 10 jaar, afhankelijk van slijtage en gebruik',
        'Onbeperkt zolang het er goed uitziet',
        'Maximaal 2 jaar',
        '25 jaar',
      ],
      juist: 0,
      uitleg:
        'In het algemeen gebruik je klimmateriaal en touwen maximaal 10 jaar, afhankelijk van slijtvastheid van de mantel, aantal vallen, gewicht van de klimmer…',
    },
    {
      id: 'k1-q17',
      thema: 'Zekertoestellen',
      vraag: 'In welke drie categorieën deel je zekertoestellen in?',
      opties: [
        'Dynamische zekertoestellen, autotubers en halfautomaten',
        'Acht, tuber en HMS',
        'Manuele, automatische en elektrische',
        'Enkel-, dubbel- en tweelingtoestellen',
      ],
      juist: 0,
      uitleg:
        'Dynamische toestellen (HMS, tuber…) zijn remhandkracht- en positie-afhankelijk; autotubers geven extra remassistentie; halfautomaten klemmen het touw volledig vast.',
    },
    {
      id: 'k1-q18',
      thema: 'Zekertoestellen',
      vraag: 'Waarom is een halfautomaat niet automatisch veiliger dan een dynamisch toestel?',
      opties: [
        'Hij is alleen veiliger bij correct gebruik, een goede zekeraar met een dynamisch toestel is meer waard dan een slechte met een halfautomaat',
        'Halfautomaten blokkeren nooit',
        'Hij werkt enkel met dubbeltouw',
        'Hij is altijd onveiliger',
      ],
      juist: 0,
      uitleg:
        'Halfautomaten zijn in theorie het veiligst, maar alleen mits correct gebruik. Laat ook hier nooit je remtouw los, en blijf met remhand en remtouw onder het toestel.',
    },
    {
      id: 'k1-q19',
      thema: 'Normering',
      vraag: 'Wat betekent de CE-markering op klimmateriaal?',
      opties: [
        'Zelfcertificering door de producent dat het product conform de Europese normen is, zonder onafhankelijke keuring',
        'Onafhankelijke keuring door een labo',
        'Dat het materiaal door de UIAA goedgekeurd is',
        'Dat het materiaal Belgisch gemaakt is',
      ],
      juist: 0,
      uitleg:
        'CE (Conformité Européenne) gebeurt via zelfcertificering. UIAA-markering vereist daarentegen externe tests door een onafhankelijk keuringslabo en is gemiddeld strenger.',
    },
    {
      id: 'k1-q20',
      thema: 'Inbinden & knopen',
      vraag: 'Waarop let je bij een gestoken/geweven achtknoop als inbindknoop?',
      opties: [
        'Touw door de twee inbindpunten, parallelle strengen zonder kruisingen, vuistregel-uiteinde en strak aangetrokken',
        'Het touw enkel door de zekerlus',
        'Een zo groot mogelijke lus zodat de knoop los kan bewegen',
        'Een zo kort mogelijk uiteinde',
      ],
      juist: 0,
      uitleg:
        'De achtknoop loopt door de twee inbindpunten, met parallel lopende strengen zonder kruisingen, een gepaste lus, en een uiteinde volgens de vuistregel (minstens één vuist breed, maximaal twee vuisten), strak aangetrokken.',
    },
    {
      id: 'k1-q21',
      thema: 'Inbinden & knopen',
      vraag: 'Waarvoor dient de stopknoop (dubbele overhandse knoop) op het remtouw?',
      opties: [
        'Vermijden dat het touweinde door het zekertoestel schiet als de route te lang is voor het touw, plus signalisatie van het zekertouw',
        'Het touw verstevigen',
        'De klimmer sneller laten zakken',
        'De gordel vastmaken',
      ],
      juist: 0,
      uitleg:
        'De stopknoop voorkomt dat het touweinde door het toestel schiet bij het laten zakken met een te kort touw, en signaleert dat dit het zekertouw is.',
    },
    {
      id: 'k1-q22',
      thema: 'Partnercheck',
      vraag: 'Wanneer moet je een grondige partnercheck uitvoeren?',
      opties: [
        'Altijd opnieuw en grondig, hoe lang je ook al klimt, voor elke beklimming',
        'Enkel bij beginners',
        'Enkel de eerste keer op een dag',
        'Alleen bij voorklimmen',
      ],
      juist: 0,
      uitleg:
        'De partnercheck is superbelangrijk en gebeurt ALTIJD opnieuw en grondig. Je checkt route, partner (gordel + inbindknoop), touw, zekeraar (toestel + safebiner) en de stopknoop.',
    },
    {
      id: 'k1-q23',
      thema: 'Zekeren',
      vraag: 'Waar staat de zekeraar bij verticale routes?',
      opties: [
        'Nooit meer dan ongeveer twee meter van de wand',
        'Zo ver mogelijk van de wand voor een beter zicht',
        'Recht onder de klimmer, tegen de wand gedrukt',
        'Het maakt niet uit waar',
      ],
      juist: 0,
      uitleg:
        'Bij verticale routes blijft de zekeraar binnen ± twee meter van de wand. Bij overhangende routes staat hij ongeveer loodrecht onder het omlooppunt.',
    },
    {
      id: 'k1-q24',
      thema: 'Zekeren',
      vraag: 'Vanaf welk gewichtsverschil tussen klimmer en zekeraar moet je extra opletten?',
      opties: [
        'Meer dan ongeveer 30 %',
        'Meer dan 5 %',
        'Pas vanaf 100 %',
        'Gewichtsverschil speelt geen rol',
      ],
      juist: 0,
      uitleg:
        'Bij meer dan ongeveer 30 % verschil wordt de lichtere zekeraar snel de lucht in gekatapulteerd. Blijf dicht bij de muur, draai de strengen rond elkaar, of overweeg een Ohm.',
    },
    {
      id: 'k1-q25',
      thema: 'Zekeren',
      vraag: 'Wat is het voordeel van zekeren met de tunnelbeweging tegenover de klassieke methode?',
      opties: [
        'Je remhand blijft laag, je moet nooit verpakken en je houdt altijd het remtouw vast',
        'Je hoeft het remtouw niet vast te houden',
        'Je hoeft niet naar de klimmer te kijken',
        'Het werkt enkel met een halfautomaat',
      ],
      juist: 0,
      uitleg:
        'Bij de tunnelbeweging strek je de remhand vooruit i.p.v. omhoog, en de handen blijven in een gesloten tunnel rond het touw. Je verpakt nooit, dus je lost het remtouw nooit.',
    },
    {
      id: 'k1-q26',
      thema: 'Touwcommando’s',
      vraag: 'Wat betekent het commando ‘Sec!’?',
      opties: [
        'De klimmer wil het touw strakker, zonder dat de zekeraar zijn gewicht erop zet',
        'De klimmer wil meer touw',
        'De klimmer wil naar beneden gelaten worden',
        'De klimmer gaat vertrekken',
      ],
      juist: 0,
      uitleg:
        '‘Sec!’ = strakker aanspannen zonder blok. ‘Mou!’ = wat meer touw. ‘Blok!’ = de zekeraar zet zijn gewicht erop. ‘Descend!’ = laat me zakken.',
    },
    {
      id: 'k1-q27',
      thema: 'Touwcommando’s',
      vraag: 'Wat doet de zekeraar bij een ‘Blok!’?',
      opties: [
        'Touw aanspannen, sensorhand op het remtouw, eigen gewicht erop en ‘Blok oké!’ antwoorden',
        'Het remtouw lossen en wachten',
        'Een stap naar de wand toe zetten',
        'De klimmer onmiddellijk laten zakken',
      ],
      juist: 0,
      uitleg:
        'Bij ‘Blok!’ spant de zekeraar het touw maximaal aan, brengt zijn sensorhand mee op het remtouw, hangt met zijn gewicht in de gordel en antwoordt ‘Blok oké!’.',
    },
    {
      id: 'k1-q28',
      thema: 'Fairplay & ethiek',
      vraag: 'Wie heeft voorrang op de klimmuur?',
      opties: [
        'Wie eerst startte, maar na een ‘Blok!’ of een val speel je je voorrang kwijt',
        'De sterkste klimmer',
        'Wie het langst wacht',
        'De zekeraar',
      ],
      juist: 0,
      uitleg:
        'Wie eerst startte heeft voorrang. Na een ‘Blok!’ of een val verlies je die voorrang. Klim niet te dicht boven, naast of onder een andere klimmer.',
    },
    {
      id: 'k1-q29',
      thema: 'Fairplay & ethiek',
      vraag: 'Wanneer is een route correct ‘uitgeklommen’?',
      opties: [
        'In één keer tot de laatste greep, zonder blokken, vallen, touwsteun, vreemde grepen of op de haken te staan',
        'Zodra je boven geraakt op eender welke manier',
        'Zodra je halfweg geraakt',
        'Als je de route ooit al eens probeerde',
      ],
      juist: 0,
      uitleg:
        'Uitgeklommen = in één keer, zonder blokken, vallen of touwsteun, zonder grepen van andere kleuren en zonder op de haken te staan, tot de laatste greep. Anders ‘ben je boven geraakt’.',
    },
    {
      id: 'k1-q30',
      thema: 'Fairplay & ethiek',
      vraag: 'Wat betekent een route ‘à vue’ klimmen?',
      opties: [
        'In je allereerste poging meteen uitklimmen zonder voorkennis over de route',
        'De route uitklimmen na ze meermaals geprobeerd te hebben',
        'Uitklimmen met wat info vooraf (bv. waar de moeilijke pas zit)',
        'De route bekijken zonder te klimmen',
      ],
      juist: 0,
      uitleg:
        'À vue = eerste poging, zonder enige info. Flash = eerste poging maar met voorkennis. Redpoint/après travail = uitklimmen na meermaals proberen.',
    },
    {
      id: 'k1-q31',
      thema: 'Opwarmen & blessures',
      vraag: 'Uit welke drie onderdelen bestaat de klassieke algemene opwarming?',
      opties: [
        'Cardiovasculair, lenigheid en kracht/vormspanning',
        'Vingers, schouders en heupen',
        'Lopen, springen en hangen',
        'Stretchen, planken en pull-ups',
      ],
      juist: 0,
      uitleg:
        'Algemene opwarming = cardiovasculair, lenigheid (schouders en bekken) en kracht/vormspanning. Daarna volgt klimspecifiek: 3 tot 5 makkelijke routes klimmen.',
    },
    {
      id: 'k1-q32',
      thema: 'Opwarmen & blessures',
      vraag: 'Welke vingerpositie vermijd je best om peesblessures te voorkomen?',
      opties: [
        "'Arqué' (crimping)",
        "'Tendue'",
        "'Semi-arqué'",
        'Een open hand',
      ],
      juist: 0,
      uitleg:
        "Klim zoveel mogelijk 'tendue' tot 'semi-arqué' en vermijd 'arqué' (crimpen): daar komt veel kracht op de ringbandjes (pulleys) die kunnen inscheuren.",
    },
    {
      id: 'k1-q33',
      thema: 'Ongeval & EHBO',
      vraag: 'Waarom laat je een slachtoffer van een klimongeval zoveel mogelijk stil liggen?',
      opties: [
        'Wegens mogelijke letsels aan nek of rug en beschadiging van het ruggenmerg',
        'Omdat het slachtoffer zo sneller herstelt',
        'Om de hulpdiensten tijd te geven om te factureren',
        'Dat hoeft niet, je mag het slachtoffer recht laten staan',
      ],
      juist: 0,
      uitleg:
        'Ga bij klimongevallen altijd uit van mogelijke nek-/rugletsels. Laat het slachtoffer in dezelfde positie liggen; enkel stabiele zijlig bij braakneigingen om stikken te vermijden.',
    },
    {
      id: 'k1-q34',
      thema: 'Ongeval & EHBO',
      vraag: 'Wat is het juiste ritme en de diepte voor hartmassage bij reanimatie?',
      opties: [
        '5 à 6 cm diep, 100 à 120 keer per minuut (‘Stayin’ Alive’)',
        '2 cm diep, 60 keer per minuut',
        '10 cm diep, 200 keer per minuut',
        'Zo hard en snel mogelijk zonder ritme',
      ],
      juist: 0,
      uitleg:
        'Druk het borstbeen 5 à 6 cm in met een ritme van 100 à 120/min, 30 keer, dan 2 beademingen via de kinlift. Bel zo snel mogelijk 112 (of via de app 112 BE).',
    },
    {
      id: 'k1-q35',
      thema: 'Inbinden & knopen',
      vraag: 'Wat is het verschil tussen direct en indirect inbinden?',
      opties: [
        'Direct: door de twee inbindpunten van je gordel met een geweven achtknoop. Indirect: aan de zekerlus met een acht in lus en een safebiner',
        'Direct: aan de zekerlus. Indirect: door de inbindlussen',
        'Direct: met een paalsteek. Indirect: met een achtknoop',
        'Er is geen verschil',
      ],
      juist: 0,
      uitleg:
        'Direct inbinden (door de twee inbindpunten met de geweven achtknoop) is de standaard, zonder extra schakels. Indirect inbinden (acht in lus met een safebiner aan de zekerlus) gebruik je enkel voor toprope in zalen met een vast touw.',
    },
  ],
  flashcards: [
    {
      id: 'k1-f1',
      thema: 'Toprope & voorklimmen',
      voorkant: 'Toprope (naklimmen)',
      achterkant:
        'Het touw loopt bovenaan door een vast omlooppunt. De zekeraar haalt in terwijl de klimmer stijgt, dus de valdiepte blijft beperkt. Standaard in Belgische zalen.',
    },
    {
      id: 'k1-f2',
      thema: 'Toprope & voorklimmen',
      voorkant: 'Voorklimmen (lead)',
      achterkant:
        'De klimmer neemt het touw mee omhoog en pikt het in tussenzekeringen (setjes). Hij klimt boven de laatste zekering uit → grotere valdiepte, krachten en risico.',
    },
    {
      id: 'k1-f3',
      thema: 'KVB-systeem',
      voorkant: 'KVB 1 / 2 / 3 / 4',
      achterkant:
        '1 = Indoor Toprope, 2 = Indoor Voorklimmen, 3 = Outdoor Voorklimmen (multipitch), 4 = Adventure Climbing (mobiele zekeringen: friends, nuts).',
    },
    {
      id: 'k1-f4',
      thema: 'Verzekering',
      voorkant: 'Lidmaatschap KBF',
      achterkant:
        'Bevat de bergsportverzekering (in- én outdoor, wereldwijd, helikopterredding/repatriëring) en geeft toegang tot de gehuurde rotsmassieven. Mutualiteiten dekken bergsport niet.',
    },
    {
      id: 'k1-f5',
      thema: 'Gordels',
      voorkant: 'Drie soorten gordels',
      achterkant:
        'Heupgordel (standaard), integraalgordel (ook rond schouders, voor kinderen/zwangere vrouwen) en borstgordel (maakt van een heupgordel een integraalgordel).',
    },
    {
      id: 'k1-f6',
      thema: 'Gordels',
      voorkant: 'Initiatie- vs sportklimgordel',
      achterkant:
        'Initiatiegordel: één gekleurde lus voor inbinden (direct en indirect) en zekeren. Sportklimgordel: gecombineerd inbindpunt met beenlus, heuplus en beweegbare zekerlus.',
    },
    {
      id: 'k1-f7',
      thema: 'Gordels',
      voorkant: 'Slijtage van de gordel',
      achterkant:
        'Het inbindpunt, vooral de beenlus, is het meest gevoelig voor slijtage. Materiaallussen dragen slechts ± 5 kg, niet om in te zekeren of inbinden!',
    },
    {
      id: 'k1-f8',
      thema: 'Klimschoenen',
      voorkant: 'Klimschoenen',
      achterkant:
        'Nauwsluitende pasvorm + speciaal rubber geven meer steun en wrijving op kleine treetjes. Sluiting met veters/velcro/elastiek; vlakke (neutraal) of kromme (overhang) zool.',
    },
    {
      id: 'k1-f9',
      thema: 'Musketons',
      voorkant: 'D- vs HMS-musketon',
      achterkant:
        'D-vormig: bijna evenwijdige zijden, scherpe hoeken. HMS (peervorm): brede kant met minder scherpe hoek → zekeren met halve mastworp mogelijk. Gemarkeerd met ‘H’ in cirkel.',
    },
    {
      id: 'k1-f10',
      thema: 'Musketons',
      voorkant: 'Sluitingen van musketons',
      achterkant:
        '1 handeling = snapper (onbeveiligd, voor setjes). 2 handelingen = schroef- of twistlock. 3 handelingen = triple-lock. Echte safebiner = Ball-lock of Belay Master.',
    },
    {
      id: 'k1-f11',
      thema: 'Musketons',
      voorkant: 'Breeksterkte musketon',
      achterkant:
        'Aangegeven in kN voor 3 belastingen: lengte gesloten, dwars, lengte open. Verliest ± 2/3 sterkte bij dwarsbelasting of met open snapper. 21 kN ≈ 2100 kg.',
    },
    {
      id: 'k1-f12',
      thema: 'Touwen',
      voorkant: 'Kernmanteltouw',
      achterkant:
        'Kern = honderden verstrengelde draadjes (sterkte + eigenschappen). Mantel = gekleurde buitenkant die de kern tegen slijtage beschermt.',
    },
    {
      id: 'k1-f13',
      thema: 'Touwen',
      voorkant: 'Statisch vs dynamisch touw',
      achterkant:
        'Statisch = rekt niet (canyoning, speleo, touwtechniek). Dynamisch = rekt uit als een elastiek, beperkt de piekbelasting bij een val → sportklimmen.',
    },
    {
      id: 'k1-f14',
      thema: 'Touwen',
      voorkant: 'Touwtypes herkennen',
      achterkant:
        "Teken in cirkeltje op de plakker: enkeltouw = '1', dubbel-/halftouw = '½', tweelingtouw = '∞'. Enkeltouw 8,5-11 mm voor zaal en singlepitch.",
    },
    {
      id: 'k1-f15',
      thema: 'Touwen',
      voorkant: 'Vangstoot (impact force)',
      achterkant:
        'De maximale schok die bij een val op het lichaam en de zekeringsketen uitkomt. Hoe lager de vangstoot, hoe meer energie het touw opneemt en hoe zachter de val.',
    },
    {
      id: 'k1-f16',
      thema: 'Touwen',
      voorkant: 'Levensduur touw',
      achterkant:
        'In het algemeen max. 10 jaar, afhankelijk van slijtage, aantal vallen en gewicht. Droog, donker, koel bewaren; uitspoelen met lauw water zonder zeep.',
    },
    {
      id: 'k1-f17',
      thema: 'Zekertoestellen',
      voorkant: 'Drie categorieën zekertoestellen',
      achterkant:
        'Dynamische (HMS, acht, tuber): remhandkracht- én positie-afhankelijk. Autotubers: extra remassistentie, nog positie-afhankelijk. Halfautomaten: klemmen volledig vast.',
    },
    {
      id: 'k1-f18',
      thema: 'Zekertoestellen',
      voorkant: 'Remhandkracht- vs positie-afhankelijk',
      achterkant:
        'Krachtafhankelijk = je remhandkracht bepaalt of je een val houdt. Positie-afhankelijk = met de remhand boven het toestel verlies je remwerking. Halfautomaten: geen van beide.',
    },
    {
      id: 'k1-f19',
      thema: 'Zekertoestellen',
      voorkant: 'Gouden regel zekeren',
      achterkant:
        'Laat NOOIT je remtouw los (ook niet met een halfautomaat) en hou remhand + remtouw zoveel mogelijk onder het zekertoestel. RTFM: lees de handleiding van elk toestel.',
    },
    {
      id: 'k1-f20',
      thema: 'Normering',
      voorkant: 'EN / CE / UIAA',
      achterkant:
        'EN = European Norm. CE = Conformité Européenne, zelfcertificering door producent. UIAA = wereldwijde bergsportkoepel, externe keuring, gemiddeld strenger dan EN.',
    },
    {
      id: 'k1-f21',
      thema: 'Materiaal',
      voorkant: 'Magnesium & pofzak',
      achterkant:
        'Wit poeder dat je grip verbetert bij zwetende handen. Mee in een pofzak op je rug. Wees zuinig en maak weinig stof: hou de pofbal in de zak.',
    },
    {
      id: 'k1-f22',
      thema: 'Inbinden & knopen',
      voorkant: 'Gestoken achtknoop, regels',
      achterkant:
        'Door de twee inbindpunten, parallelle strengen zonder kruisingen, gepaste lus, uiteinde volgens de vuistregel (minstens één vuist breed, maximaal twee vuisten), vier strengen strak.',
    },
    {
      id: 'k1-f23',
      thema: 'Inbinden & knopen',
      voorkant: 'Stopknoop',
      achterkant:
        'Dubbele overhandse knoop op het remtouw-uiteinde. Voorkomt dat het touw door het toestel schiet als de route te lang is, en signaleert het zekertouw.',
    },
    {
      id: 'k1-f24',
      thema: 'Inbinden & knopen',
      voorkant: 'Inbinden met safebiner op acht in lus',
      achterkant:
        'Enkel voor toprope in zalen met een vaste achtknoop. Vastmaken aan de zekerlus met een safebiner of twee tegengestelde schroefmusketons. Nadeel: extra schakel + dwarsbelasting mogelijk.',
    },
    {
      id: 'k1-f25',
      thema: 'Partnercheck',
      voorkant: 'Partnercheck, wat check je?',
      achterkant:
        'Route, partner (gordel + inbindknoop), via het touw (zelfde touw, niet gedraaid), zekeraar (toestel correct + safebiner dicht + gordel), stopknoop. Altijd opnieuw en grondig.',
    },
    {
      id: 'k1-f26',
      thema: 'Zekeren',
      voorkant: 'Positie van de zekeraar',
      achterkant:
        'Verticale route: max. ± 2 m van de wand. Overhang: ± loodrecht onder het omlooppunt. Nooit op blote voeten zekeren.',
    },
    {
      id: 'k1-f27',
      thema: 'Zekeren',
      voorkant: 'Groot gewichtsverschil',
      achterkant:
        'Let op bij > ± 30 %: lichtere zekeraar wordt gekatapulteerd. Dicht bij de muur blijven, strengen rond elkaar draaien, of een Ohm gebruiken.',
    },
    {
      id: 'k1-f28',
      thema: 'Zekeren',
      voorkant: 'Tunnelbeweging',
      achterkant:
        'Handen vormen een gesloten tunnel rond het touw en blijven samen. Remhand recht vooruit strekken (niet omhoog), nooit verpakken → je houdt altijd het remtouw vast.',
    },
    {
      id: 'k1-f29',
      thema: 'Zekeren',
      voorkant: 'Remhandreflex',
      achterkant:
        'Bij een val meteen de remhand naar beneden brengen (maximale remassistentie) en de sensorhand zo snel mogelijk mee op het remtouw brengen.',
    },
    {
      id: 'k1-f30',
      thema: 'Touwcommando’s',
      voorkant: 'Touwcommando’s',
      achterkant:
        'Départ / Départ oké = vertrekken. Sec = strakker zonder blok. Mou = meer touw. Blok / Blok oké = gewicht erop. Descend = laat me zakken.',
    },
    {
      id: 'k1-f31',
      thema: 'Fairplay & ethiek',
      voorkant: 'Voorrang op de muur',
      achterkant:
        'Wie eerst startte heeft voorrang, maar na een ‘Blok!’ of val verlies je die. Klim niet te dicht bij anderen. Sociale controle: spreek elkaar aan op fouten.',
    },
    {
      id: 'k1-f32',
      thema: 'Fairplay & ethiek',
      voorkant: 'Quotatie van routes',
      achterkant:
        'Cijfer 3 (makkelijk) tot 9 (heel moeilijk), daarna a/b/c (6a < 6b < 6c), eventueel ‘+’. Voorbeeld: 6a < 6a+ < 6b.',
    },
    {
      id: 'k1-f33',
      thema: 'Fairplay & ethiek',
      voorkant: 'À vue / flash / redpoint',
      achterkant:
        'À vue = eerste poging zonder info. Flash = eerste poging met info vooraf. Redpoint / après travail = uitklimmen na meermaals proberen.',
    },
    {
      id: 'k1-f34',
      thema: 'Opwarmen & blessures',
      voorkant: 'Opwarming',
      achterkant:
        'Algemeen: cardiovasculair, lenigheid (schouders/bekken), kracht/vormspanning. Klimspecifiek: 3 tot 5 makkelijke routes voor je aan moeilijkere begint.',
    },
    {
      id: 'k1-f35',
      thema: 'Opwarmen & blessures',
      voorkant: 'Blessurepreventie',
      achterkant:
        'Goede partnercheck, ringen af, lang haar vast, gewoon loslaten bij een val (niet grijpen), vingers tendue/semi-arqué i.p.v. arqué, en antagonisten (strekkers) trainen.',
    },
    {
      id: 'k1-f36',
      thema: 'Ongeval & EHBO',
      voorkant: 'Handelen bij een ongeval',
      achterkant:
        'Bel 112 (app 112 BE geeft je locatie) + verwittig het personeel. Ga uit van nek-/rugletsel: laat het slachtoffer stil liggen. Bewusteloos zonder ademhaling → reanimeren.',
    },
    {
      id: 'k1-f37',
      thema: 'Ongeval & EHBO',
      voorkant: 'Reanimatie',
      achterkant:
        'Hartmassage: 5 à 6 cm diep, 100-120/min (‘Stayin’ Alive’), 30 keer. Dan kinlift, neus dicht, 2 keer beademen. Herhalen. Iets fout doen is beter dan niets doen.',
    },
    {
      id: 'k1-f38',
      thema: 'Inbinden & knopen',
      voorkant: 'Direct vs indirect inbinden',
      achterkant:
        'Direct: door de twee inbindpunten met de geweven achtknoop, de standaard. Indirect: aan de zekerlus met een acht in lus en een safebiner, enkel voor toprope in zalen met een vast touw.',
    },
  ],
};
