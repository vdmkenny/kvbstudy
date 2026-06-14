import type { LevelContent } from '../types';

export const kvb2plus: LevelContent = {
  id: 'kvb2plus',
  naam: 'KVB 2+',
  ondertitel: 'Outdoor Voorklimmen Singlepitch',
  beschikbaar: true,
  quiz: [
    {
      id: 'k2p-q1',
      thema: 'Ombouwen',
      vraag: 'Wat is het belangrijkste verschil tussen indoor en outdoor voorklimmen singlepitch?',
      opties: [
        'Outdoor heeft de relais meestal geen snappers om in te klippen, dus moet je ‘ombouwen’ om je touw door de relais te krijgen',
        'Outdoor klim je altijd in toprope',
        'Outdoor heb je geen zekeraar nodig',
        'Outdoor zijn de routes altijd korter',
      ],
      juist: 0,
      uitleg:
        'Outdoor is er vaak geen snapper aan het relais. Om bij het zakken alle materiaal en setjes te recupereren moet je je touw door de relais krijgen: dat heet ‘ombouwen’.',
    },
    {
      id: 'k2p-q2',
      thema: 'Standplaats',
      vraag: 'Op welk punt van een standaardrelais (met ketting) ga je werken?',
      opties: [
        'Op de ring of maillon aan de onderste haak; de belasting komt dan op de onderste haak',
        'Altijd op de bovenste haak',
        'Op de ketting zelf',
        'Op beide haken tegelijk met aparte touwen',
      ],
      juist: 0,
      uitleg:
        'Je werkt op de ring/maillon aan de onderste haak. Breekt die uit, dan gaat de belasting via de ketting (schuin) over op de bovenste haak. De ketting zelf gebruik je nooit.',
    },
    {
      id: 'k2p-q3',
      thema: 'Boorhaken',
      vraag: 'Wat is het verschil tussen een expansiehaak en een lijmhaak?',
      opties: [
        'Expansiehaak zet zich vast als een plug (meteen bruikbaar, verwijderbaar); lijmhaak wordt ingelijmd (dagen uitharden, niet verwijderbaar)',
        'Een lijmhaak is meteen bruikbaar, een expansiehaak niet',
        'Beide moeten dagen uitharden',
        'Er is geen verschil',
      ],
      juist: 0,
      uitleg:
        'Expansiehaken zetten zich vast door druk (enkel in harde steensoorten, meteen bruikbaar, verwijderbaar). Lijmhaken worden ingelijmd, moeten dagen uitharden en kunnen niet verwijderd worden.',
    },
    {
      id: 'k2p-q4',
      thema: 'Bandsling & leeflijn',
      vraag: 'Is bandsling geschikt om rechtstreeks schokken op te vangen?',
      opties: [
        'Nee, bandsling is statisch en niet geschikt voor directe dynamische belasting',
        'Ja, bandsling is heel dynamisch',
        'Ja, even goed als een dynamisch touw',
        'Enkel dyneema-sling is dynamisch',
      ],
      juist: 0,
      uitleg:
        'Bandsling is statisch en vangt geen schokken op (tenzij de schok eerst op een dynamisch touw terechtkomt). Vermijd knopen in een sling, want elke knoop verzwakt hem.',
    },
    {
      id: 'k2p-q5',
      thema: 'Bandsling & leeflijn',
      vraag: 'Hoe lang is de leeflijn en waarom ‘hang je eraan’?',
      opties: [
        'Een sling van 60 cm; je blijft eraan hangen omdat statisch materiaal slecht omgaat met een dynamische belasting',
        'Een sling van 120 cm; om sneller te kunnen klimmen',
        'Een touw van 2 m; om dynamisch te zekeren',
        'Een sling van 30 cm; om af te dalen',
      ],
      juist: 0,
      uitleg:
        'De leeflijn = sling van 60 cm, met ankersteek aan de zekerlus en een gewone schroefmusketon. Je hangt er constant aan, zodat er geen dynamische schokbelasting op het statische materiaal komt.',
    },
    {
      id: 'k2p-q6',
      thema: 'Helmen',
      vraag: 'Welke drie soorten klimhelmen bestaan er?',
      opties: [
        'Schaalhelmen (hard plastic), schuimhelmen (absorptie) en hybride helmen',
        'Fietshelmen, skihelmen en bouwhelmen',
        'Lichte, zware en middelgrote helmen',
        'Plastic, metalen en kartonnen helmen',
      ],
      juist: 0,
      uitleg:
        'Schaalhelm: hard plastic, vangt op door stijfheid, duurzaam maar zwaar. Schuimhelm: absorptie/vervorming, licht maar na een klap weggooien. Hybride: combinatie van beide.',
    },
    {
      id: 'k2p-q7',
      thema: 'Helmen',
      vraag: 'Wat doe je als zekeraar best als er ‘Caillou!’ geroepen wordt?',
      opties: [
        'Niet omhoog kijken, je zo klein mogelijk maken onder je helm en je remtouw blijven vasthouden',
        'Omhoog kijken om te zien wat eraan komt',
        'Wegrennen en het remtouw lossen',
        'De helm afzetten',
      ],
      juist: 0,
      uitleg:
        'Omhoog kijken is een foute reflex (je kan amper nog wegspringen en kan je helm verliezen). Maak je klein onder je helm en hou het remtouw vast. Iedereen draagt altijd een helm aan de rotsen.',
    },
    {
      id: 'k2p-q8',
      thema: 'Prusik & machard',
      vraag: 'Waarvoor gebruik je een machardlus uit prusiktouw?',
      opties: [
        'Om een machardknoop rond een ander touw te leggen die zich vastzet en wrijving genereert',
        'Om in te binden in plaats van een achtknoop',
        'Om te zekeren als hoofdtoestel',
        'Als vervanging voor de leeflijn',
      ],
      juist: 0,
      uitleg:
        'Prusiktouw (5-7 mm), ± 1,5 m, geknoopt met een dubbele vissersknoop of zaksteek tot een machardlus. Hoe soepeler de lus, hoe meer wrijving de machard genereert en hoe makkelijker hij zich vastzet.',
    },
    {
      id: 'k2p-q9',
      thema: 'Partnercheck',
      vraag: 'Wat controleer je outdoor EXTRA bij de partnercheck (t.o.v. indoor)?',
      opties: [
        'Helm op, propere klimschoenen, extra materiaal (leeflijn, machardlus, extra musketon) en de uit te voeren handelingen aan de relais',
        'Enkel of het touw lang genoeg is',
        'Niets extra',
        'De weersvoorspelling',
      ],
      juist: 0,
      uitleg:
        'Outdoor check je extra: helm, propere schoenen, voldoende materiaal (setjes, extra musketon, leeflijn, machardlus), orde aan de gordel, en je overloopt samen de handelingen aan de relais (inpikken of ombouwen).',
    },
    {
      id: 'k2p-q10',
      thema: 'Voorklimmen zonder ombouwen',
      vraag: 'Wanneer hoeft de eerste voorklimmer NIET om te bouwen?',
      opties: [
        'Als er na hem nog iemand dezelfde route gaat voorklimmen, dan laat hij materiaal en setjes hangen',
        'Nooit, je moet altijd ombouwen',
        'Alleen bij een relais zonder ketting',
        'Enkel als de route korter is dan 10 m',
      ],
      juist: 0,
      uitleg:
        'Gaat er na hem nog iemand klimmen, dan plaatst de eerste voorklimmer een musketon en twee setjes aan de relais en laat alles hangen. Dat spaart de ring/maillon en zet alles klaar voor de volgende.',
    },
    {
      id: 'k2p-q11',
      thema: 'Toprope / moulinette',
      vraag: 'Op welk touweinde bindt de naklimmer zich in bij toprope/moulinette?',
      opties: [
        'Op het andere einde (dat aan de touwzak vastzat); hij klimt op het touw dat door de tussenzekeringen loopt en klipt ze los',
        'Op hetzelfde einde als de voorklimmer',
        'Hij bindt zich niet in',
        'Op het midden van het touw',
      ],
      juist: 0,
      uitleg:
        'De naklimmer bindt in op het andere einde en klimt van setje naar setje, die hij telkens losklipt. Zo klimt hij niet uit de route en vermijdt hij een pendelval en touwhinder.',
    },
    {
      id: 'k2p-q12',
      thema: 'Ombouwen',
      vraag: 'Waarom verlies je bij standaard ombouwen niet de volledige touwlengte?',
      opties: [
        'Je verliest ± 2 m resttouw dat je door de maillon haalt voor de nieuwe inbindknoop, een 35 m route kan je dus niet zomaar veilig tot de grond zakken',
        'Je verliest niets',
        'Je verliest de helft van het touw',
        'Je wint 2 m touw',
      ],
      juist: 0,
      uitleg:
        'Bij ombouwen verlies je ± 2 m (het resttouw door de maillon voor de nieuwe knoop). Een 70 m touw volstaat dan niet zeker voor een 35 m route → leg altijd een stopknoop; een 80 m touw is veiliger.',
    },
    {
      id: 'k2p-q13',
      thema: 'Ombouwen',
      vraag: 'Wat is de extra voorzorgsmaatregel bij ombouwen vanuit toprope of op een relais zonder ketting?',
      opties: [
        'De twee setjes in de bovenste haak ingepikt laten en het touw van onderuit door de maillon steken, zodat je nog gezekerd bent als het misgaat',
        'De setjes meteen weghalen',
        'Het touw door de ketting halen',
        'Zonder leeflijn werken',
      ],
      juist: 0,
      uitleg:
        'Bij toprope zijn de setjes onder je losgeklipt, dus laat je tijdens het ombouwen de twee setjes in de bovenste haak ingepikt en steek je het touw van onderuit door de maillon. Zo redden die setjes je bij een fout.',
    },
    {
      id: 'k2p-q14',
      thema: 'Ombouwen',
      vraag: 'Wanneer bouw je om ‘met behoud van de volledige touwlengte’ (tijdelijke achtknoop)?',
      opties: [
        'Als je niet zeker bent of je touw lang genoeg is, of bij een te kleine ring/maillon waar je het touw niet dubbel door krijgt',
        'Altijd, bij elke route',
        'Enkel bij multipitchen',
        'Nooit, dat bestaat niet',
      ],
      juist: 0,
      uitleg:
        'Bij twijfel over de touwlengte (of midden van het touw komt al aan het toestel) bouw je om met behoud van de volledige lengte: tijdelijke dubbele achtknoop, enkele streng door de maillon, opnieuw inbinden.',
    },
    {
      id: 'k2p-q15',
      thema: 'Fysica',
      vraag: 'Wat is de ‘vangstoot’?',
      opties: [
        'De maximale kracht die een voorklimmer op het lichaam te verwerken krijgt tijdens een val',
        'De kracht op het relais',
        'De snelheid van de val',
        'De lengte van de val',
      ],
      juist: 0,
      uitleg:
        'De vangstoot is de maximale kracht op het lichaam tijdens een voorklimmersval. Hoe elastischer het touw en hoe dynamischer er gezekerd wordt, hoe lager de vangstoot.',
    },
    {
      id: 'k2p-q16',
      thema: 'Fysica',
      vraag: 'Wat zegt het ‘pulley-effect’ over de kracht op de tussenzekering?',
      opties: [
        'De tussenzekering krijgt ongeveer 5/3 van de vangstoot: de som van de kracht van de klimmer (≈ vangstoot) en van de zekeraar (≈ 2/3)',
        'De tussenzekering krijgt exact het gewicht van de klimmer',
        'De zekeraar krijgt evenveel als de klimmer',
        'Er komt geen extra kracht bij',
      ],
      juist: 0,
      uitleg:
        'De kracht op de zekering is de resultante van klimmer + zekeraar. Ongeveer 1/3 van de vangstoot gaat verloren in wrijving; de zekeraar voelt ± 2/3, de zekering ± 5/3 van de vangstoot.',
    },
    {
      id: 'k2p-q17',
      thema: 'Fysica',
      vraag: 'Hoe wordt de valfactor berekend?',
      opties: [
        'Valdiepte gedeeld door het aantal meter touw dat de val opvangt',
        'Aantal meter touw gedeeld door de valdiepte',
        'Gewicht van de klimmer maal de valdiepte',
        'Valdiepte maal de vangstoot',
      ],
      juist: 0,
      uitleg:
        'Valfactor = valdiepte / aantal meter touw dat de val opvangt. Hoe hoger de valfactor, hoe zwaarder de val aankomt. Verdubbelt de valfactor, dan stijgt de vangstoot met √2.',
    },
    {
      id: 'k2p-q18',
      thema: 'Fysica',
      vraag: 'Waarom voelt een val dicht bij de grond zwaarder aan dan hoger in de route?',
      opties: [
        'Er is nog weinig touw in omloop, dus de vangstoot wordt minder gedempt door het touw',
        'Omdat je dichter bij de zekeraar bent',
        'Omdat het touw daar dunner is',
        'Dat is niet zo, het voelt net zachter',
      ],
      juist: 0,
      uitleg:
        'Met weinig touw in omloop rekt het touw minder uit en neemt het minder energie op → hogere vangstoot. Daarom: in het begin van de route dicht bij de wand blijven en heel actief zekeren.',
    },
    {
      id: 'k2p-q19',
      thema: 'Fysica',
      vraag: 'Heeft dynamisch zekeren invloed op de valfactor?',
      opties: [
        'Nee, de valfactor blijft gelijk; dynamisch zekeren verlaagt wel de vangstoot',
        'Ja, het verlaagt de valfactor',
        'Ja, het verhoogt de valfactor',
        'Dynamisch zekeren bestaat niet outdoor',
      ],
      juist: 0,
      uitleg:
        'Dynamisch zekeren verandert de valfactor niet, maar verlaagt wel de vangstoot (en dus de belasting op de laatste zekering en op je eigen lichaam). Statisch zekeren doet het omgekeerde.',
    },
    {
      id: 'k2p-q20',
      thema: 'Noodafdaling',
      vraag: 'Wat is een ‘noodafdaling’ / terugkeren op je laatste tussenzekering?',
      opties: [
        'Als je niet voorbij een pas geraakt en de laatste klimmer bent: met een machard rond het touw veilig naar beneden, setjes recupererend, met beperkte valdiepte',
        'Snel naar beneden springen',
        'Het touw doorknippen',
        'Te voet naar boven wandelen',
      ],
      juist: 0,
      uitleg:
        'Lukt de pas niet en ben je de laatste, dan doe je een noodafdaling: machardlus met ankersteek aan je zekerlus, machard rond de enkele streng, en je laat je zakken. Zo blijft de valdiepte beperkt.',
    },
    {
      id: 'k2p-q21',
      thema: 'Noodafdaling',
      vraag: 'Waarom steek je je touw nooit rechtstreeks door een boorhaak?',
      opties: [
        'Plaquettes hebben een scherp randje dat het touw beschadigt en lijmhaken slijt je uit; je laat ook beter geen maillon achter',
        'Omdat het touw er niet doorpast',
        'Omdat dat sneller gaat',
        'Dat mag wel, het is veilig',
      ],
      juist: 0,
      uitleg:
        'Plaquettes hebben een scherp randje (beschadigt het touw); lijmhaken slijt je uit bij het zakken. Laat ook geen maillon achter: een volgende klimmer zou die voor een relais kunnen aanzien.',
    },
    {
      id: 'k2p-q22',
      thema: 'Ethiek',
      vraag: 'Waarom werk je outdoor altijd zoveel mogelijk op je eigen materiaal?',
      opties: [
        'Massieven worden behaakt door lokale vrijwilligers die het materiaal zelf betalen; je spaart zo de ring/maillon van het relais',
        'Omdat eigen materiaal sterker is',
        'Omdat het verplicht is bij wet',
        'Om sneller te kunnen klimmen',
      ],
      juist: 0,
      uitleg:
        'Lokale klimmers equiperen routes uit eigen zak. Topropen op je eigen musketon en setjes (niet op de ring/maillon) spaart het relais. Koop de lokale topo om het onderhoud te steunen.',
    },
    {
      id: 'k2p-q23',
      thema: 'Ethiek',
      vraag: 'Wat houdt ‘Leave no trace’ / het ‘papiertje van de dag’ in?',
      opties: [
        'Na elke dag in de natuur neem je een extra vuiltje mee, om de stukjes te compenseren die je zelf onbewust verliest',
        'Je mag papiertjes achterlaten als ze klein zijn',
        'Je verbrandt je afval ter plaatse',
        'Je begraaft alles ter plaatse',
      ],
      juist: 0,
      uitleg:
        '‘Leave no trace’: neem een extra vuiltje mee naar huis. Hou het rustig, beperk magnesium, maak geen vuur, blijf op de paden, en neem je toiletpapier mee (laat nooit vochtige doekjes achter).',
    },
    {
      id: 'k2p-q24',
      thema: 'Ethiek',
      vraag: 'Waarom hou je je klimschoenen proper aan de rotsen?',
      opties: [
        'Zandkorrels aan je zolen polijsten de rots, wat alle klimrotsen op termijn glad maakt',
        'Omdat vuile schoenen verboden zijn',
        'Om je schoenen langer te laten meegaan',
        'Het maakt niet uit voor de rots',
      ],
      juist: 0,
      uitleg:
        'Doe je schoenen aan op je touwzak: minuscule zandkorrels aan vuile zolen polijsten de rots en maken ze glad. Als klimmer help je dat slijtageproces zo lang mogelijk uit te stellen.',
    },
    {
      id: 'k2p-q25',
      thema: 'Geologie',
      vraag: 'Op welk gesteente klim je in Belgie meestal singlepitch?',
      opties: [
        'Kalksteen (calcaire) in de Maas-, Lesse- en Ourthevallei',
        'Graniet',
        'Zandsteen',
        'Marmer',
      ],
      juist: 0,
      uitleg:
        'De Belgische sportrotsen (Freyr, Beez, Marche-les-Dames, Dave...) zijn overwegend kalksteen. Ook in de Franse sportgebieden (Gorges du Tarn, Orpierre) klim je meestal op kalksteen.',
    },
    {
      id: 'k2p-q26',
      thema: 'Ecologie',
      vraag: 'Waarom kunnen sommige rotsen tijdelijk gesloten zijn?',
      opties: [
        'Om broedende roofvogels (slechtvalk, oehoe) niet te storen',
        'Omdat de haken vervangen worden',
        'Voor een klimcompetitie',
        'Omdat het te warm is',
      ],
      juist: 0,
      uitleg:
        'Heel wat rotsen kennen een seizoensverbod voor broedende roofvogels. Respecteer de toegangsregeling van de federatie; die vind je in de topo.',
    },
  ],
  flashcards: [
    {
      id: 'k2p-f1',
      thema: 'Ombouwen',
      voorkant: 'Ombouwen',
      achterkant:
        'Outdoor heeft de relais meestal geen snapper. Om je touw door de relais te krijgen (en zo materiaal/setjes te recupereren bij het zakken) moet je ‘ombouwen’.',
    },
    {
      id: 'k2p-f2',
      thema: 'Standplaats',
      voorkant: 'Standaardrelais',
      achterkant:
        'Twee haken schuin boven elkaar, verbonden met ketting; ring/maillon aan de onderste haak. Je werkt op de onderste haak; breekt die uit, dan neemt de bovenste het over. Ketting nooit gebruiken.',
    },
    {
      id: 'k2p-f3',
      thema: 'Boorhaken',
      voorkant: 'Expansie- vs lijmhaak',
      achterkant:
        'Expansiehaak: kort, zet vast als een plug, enkel in harde steen, meteen bruikbaar, verwijderbaar. Lijmhaak: ingelijmd, dagen uitharden, niet verwijderbaar.',
    },
    {
      id: 'k2p-f4',
      thema: 'Boorhaken',
      voorkant: 'Roestige haken',
      achterkant:
        'Vooral bij zee roesten haken snel. Daarom raadt men inox of titanium aan. Controleer altijd de staat van haken en relais voor je ze vertrouwt.',
    },
    {
      id: 'k2p-f5',
      thema: 'Bandsling & leeflijn',
      voorkant: 'Bandsling',
      achterkant:
        'Statisch materiaal (nylon of dyneema), niet geschikt voor directe schokken. Lengtes 60/90/120/240 cm. Knopen verzwakken een sling, dus vermijden.',
    },
    {
      id: 'k2p-f6',
      thema: 'Bandsling & leeflijn',
      voorkant: 'Leeflijn',
      achterkant:
        'Sling van 60 cm, met ankersteek aan de zekerlus + gewone schroefmusketon (geen safebiner). Je hangt er constant aan, zodat statisch materiaal geen dynamische schok krijgt.',
    },
    {
      id: 'k2p-f7',
      thema: 'Helmen',
      voorkant: 'Drie soorten helmen',
      achterkant:
        'Schaalhelm: hard plastic, stijfheid, duurzaam maar zwaar. Schuimhelm: absorptie, licht maar na een klap weggooien. Hybride: hard buiten, schuim binnen.',
    },
    {
      id: 'k2p-f8',
      thema: 'Helmen',
      voorkant: 'Helm aan de rotsen',
      achterkant:
        'Iedereen draagt altijd een helm (klimmer én zekeraar), riempje onder de kin. Bij ‘Caillou!’: niet omhoog kijken, klein maken, remtouw vasthouden.',
    },
    {
      id: 'k2p-f9',
      thema: 'Prusik & machard',
      voorkant: 'Machardlus',
      achterkant:
        'Prusiktouw 5-7 mm, ± 1,5 m, geknoopt met dubbele vissersknoop of zaksteek. De machardknoop zet zich vast rond een ander touw. Soepeler = meer wrijving = zet sneller vast.',
    },
    {
      id: 'k2p-f10',
      thema: 'Partnercheck',
      voorkant: 'Partnercheck outdoor, extra',
      achterkant:
        'Bovenop indoor: helm op, propere schoenen, extra materiaal (leeflijn, machardlus, extra musketon), en samen de handelingen aan de relais overlopen (inpikken/ombouwen).',
    },
    {
      id: 'k2p-f11',
      thema: 'Drie situaties',
      voorkant: 'Drie situaties aan de relais',
      achterkant:
        '1) Meerdere klimmen → 1e plaatst musketon + 2 setjes (geen leeflijn). 2) Volgende pikken die in. 3) Laatste klimmer bouwt om (leeflijn nodig, alles meenemen).',
    },
    {
      id: 'k2p-f12',
      thema: 'Voorklimmen zonder ombouwen',
      voorkant: 'Zonder ombouwen',
      achterkant:
        'Komt er nog iemand na jou? Plaats een musketon en twee setjes aan de relais en laat de setjes ingepikt bij het zakken. Spaart de ring/maillon en zet alles klaar.',
    },
    {
      id: 'k2p-f13',
      thema: 'Toprope / moulinette',
      voorkant: 'Toprope / moulinette',
      achterkant:
        'Naklimmer bindt in op het andere touweinde, klimt van setje naar setje en klipt ze los. Zo: niet uit de route klimmen, geen pendelval, geen touwhinder.',
    },
    {
      id: 'k2p-f14',
      thema: 'Ombouwen',
      voorkant: 'Ombouwen, stappen',
      achterkant:
        'Onderste setje inpikken, musketon naar zekerlus, leeflijn in maillon en hangen, setjes weg, touw dubbel door de maillon, nieuwe achtknoop, oude knoop los, ‘Blok!’, checken, leeflijn los.',
    },
    {
      id: 'k2p-f15',
      thema: 'Ombouwen',
      voorkant: 'Touwverlies bij ombouwen',
      achterkant:
        'Je verliest ± 2 m resttouw (door de maillon, voor de nieuwe knoop). Een 35 m route is dan riskant met 70 m touw. Altijd een stopknoop; 80 m touw is veiliger.',
    },
    {
      id: 'k2p-f16',
      thema: 'Ombouwen',
      voorkant: 'Extra voorzorg (toprope / geen ketting)',
      achterkant:
        'De setjes onder je zijn los (toprope) of de haken zijn niet verbonden → laat de twee setjes in de BOVENSTE haak ingepikt en steek het touw van onderuit door de maillon. Zo redden ze je bij een fout.',
    },
    {
      id: 'k2p-f17',
      thema: 'Ombouwen',
      voorkant: 'Behoud volledige touwlengte',
      achterkant:
        'Bij twijfel over de lengte of een te kleine ring: tijdelijke dubbele achtknoop aan de zekerlus, enkele streng door de maillon, opnieuw inbinden, tijdelijke knoop los.',
    },
    {
      id: 'k2p-f18',
      thema: 'Ombouwen',
      voorkant: 'Ombouwen in twee keer',
      achterkant:
        'Voor routes > 35 m (bv. Gorges du Tarn): via een tussenrelais in etappes naar beneden. Leeflijn in de maillon, extra achtknoop, touw doortrekken, opnieuw inbinden, ‘Blok!’.',
    },
    {
      id: 'k2p-f19',
      thema: 'Fysica',
      voorkant: 'Zekeringsketen (outdoor)',
      achterkant:
        'Gordel voorklimmer, inbindknoop, touw, het setje van de val, de (boor)haak, het zekertoestel, de safebiner en de gordel van de zekeraar.',
    },
    {
      id: 'k2p-f20',
      thema: 'Fysica',
      voorkant: 'Vangstoot',
      achterkant:
        'Maximale kracht op het lichaam van de voorklimmer tijdens een val. Lager bij een elastischer touw en bij dynamisch zekeren.',
    },
    {
      id: 'k2p-f21',
      thema: 'Fysica',
      voorkant: 'Pulley-effect',
      achterkant:
        'Kracht op de zekering = resultante van klimmer + zekeraar. ± 1/3 vangstoot verdwijnt in wrijving → zekeraar voelt ± 2/3, de zekering krijgt ± 5/3 van de vangstoot.',
    },
    {
      id: 'k2p-f22',
      thema: 'Fysica',
      voorkant: 'Valfactor',
      achterkant:
        'Valfactor = valdiepte / meter touw dat de val opvangt. Hoger = zwaardere val. Verdubbelt de valfactor, dan stijgt de vangstoot met √2. Niet de diepte maar de hoeveelheid touw telt.',
    },
    {
      id: 'k2p-f23',
      thema: 'Fysica',
      voorkant: 'Val dicht bij de grond',
      achterkant:
        'Weinig touw in omloop → minder rek, minder energieopname → hogere vangstoot. Daarom in het begin dicht bij de wand blijven en heel actief zekeren.',
    },
    {
      id: 'k2p-f24',
      thema: 'Fysica',
      voorkant: 'Dynamisch zekeren & valfactor',
      achterkant:
        'Dynamisch zekeren verandert de valfactor niet, maar verlaagt de vangstoot. Statisch zekeren verhoogt de vangstoot op de zekering en je eigen lichaam.',
    },
    {
      id: 'k2p-f25',
      thema: 'Noodafdaling',
      voorkant: 'Noodafdaling',
      achterkant:
        'Pas lukt niet en je bent de laatste klimmer: machardlus met ankersteek aan de zekerlus, machard rond de enkele streng (genoeg windingen), ‘Descend!’. Beperkte valdiepte bij uitbreken haak.',
    },
    {
      id: 'k2p-f26',
      thema: 'Noodafdaling',
      voorkant: 'Nooit door een boorhaak',
      achterkant:
        'Plaquettes hebben een scherp randje (beschadigt touw); lijmhaken slijt je uit. Laat ook geen maillon achter (kan voor relais aanzien worden en roest vast).',
    },
    {
      id: 'k2p-f27',
      thema: 'Noodafdaling',
      voorkant: 'Opties bij een crux die niet lukt',
      achterkant:
        'Sterkere klimmer vragen, via een makkelijkere route recupereren, te voet naar de top (gevaarlijk), zakken en setjes achterlaten (duur), of afklimmen (gevaarlijk). Anders: noodafdaling.',
    },
    {
      id: 'k2p-f28',
      thema: 'Ethiek',
      voorkant: 'Op eigen materiaal werken',
      achterkant:
        'Lokale vrijwilligers betalen de haken/relais zelf. Toprope op je eigen musketon en setjes (niet op ring/maillon). Koop de lokale topo, kopieer geen topo’s.',
    },
    {
      id: 'k2p-f29',
      thema: 'Ethiek',
      voorkant: 'Leave no trace',
      achterkant:
        'Neem een extra vuiltje mee (‘papiertje van de dag’). Hou het rustig, beperk magnesium/tickmarks, geen vuur, blijf op de paden, neem je toiletpapier mee.',
    },
    {
      id: 'k2p-f30',
      thema: 'Ethiek',
      voorkant: 'Propere klimschoenen',
      achterkant:
        'Schoenen aan op je touwzak: zandkorrels aan vuile zolen polijsten de rots en maken ze glad. Zo stel je de slijtage van het massief uit.',
    },
    {
      id: 'k2p-f31',
      thema: 'Geologie',
      voorkant: 'Gesteente Belgie en Frankrijk',
      achterkant:
        'Belgie: overwegend kalksteen (Maas-, Lesse-, Ourthevallei). Frankrijk: sportgebieden meestal kalksteen (Gorges du Tarn, Orpierre), graniet in de bergen, zandsteen in Fontainebleau.',
    },
    {
      id: 'k2p-f32',
      thema: 'Ecologie',
      voorkant: 'Toegang en broedseizoen',
      achterkant:
        'Sommige rotsen zijn tijdelijk gesloten voor broedende roofvogels (slechtvalk, oehoe). Respecteer de toegangsregeling; ze staat in de topo.',
    },
  ],
};
