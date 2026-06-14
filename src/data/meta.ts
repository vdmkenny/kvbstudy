import type { ExamenGids, LevelId } from '../types';

/** Pad naar een kaartafbeelding, met respect voor de Vite base (GitHub Pages subpad). */
const img = (naam: string) => `${import.meta.env.BASE_URL}levels/${naam}`;

export interface LevelMeta {
  beschikbaar: boolean;
  /** Of dit niveau een echt examen heeft. KVB 2+/3+ niet. */
  heeftExamen: boolean;
  accent: string;
  afbeelding: string;
  intro: string[];
  examen?: ExamenGids;
}

const kvb1Examen: ExamenGids = {
  intro:
    'De evaluatie gebeurt in groepjes. De knopen worden eerst uit de touwen gehaald en de gordels uitgedaan. Iedereen beantwoordt om beurt een theorievraag (75 % juist volstaat) en klimt en zekert daarna drie routes.',
  theorie: [
    {
      titel: 'Gordel, knopen en materiaal',
      items: [
        {
          vraag: 'De drie soorten gordels',
          antwoord:
            'Heupgordel (de standaard), integraalgordel (ook rond de schouders, voor kinderen en zwangere vrouwen) en borstgordel (maakt van een heupgordel een integraalgordel).',
        },
        {
          vraag: 'Het verschil tussen een initiatie- en een sportklimgordel',
          antwoord:
            'Een initiatiegordel heeft één gekleurde lus voor zowel inbinden als zekeren. Een sportklimgordel heeft een gecombineerd inbindpunt met beenlus, heuplus en een beweegbare zekerlus.',
        },
        {
          vraag: 'De onderdelen van een gordel',
          antwoord:
            'Heupriem, beenlussen, zekerlus, de twee inbindpunten en materiaallussen (dragen slechts circa 5 kg).',
        },
        {
          vraag: 'Het meest slijtgevoelige deel van een gordel',
          antwoord: 'Het inbindpunt, met name aan de beenlus. Dat controleer je dan ook het best.',
        },
        {
          vraag: 'Voor- en nadelen van verstelbare gordels',
          antwoord:
            'Verstelbare beenlussen: handig bij lichte of zware benen en bij veel of weinig kledij, maar duurder, zwaarder en minder overzichtelijk. Vaste beenlussen: goedkoop, licht en overzichtelijk, ideaal voor sportklimmen.',
        },
        {
          vraag: 'Waar je op let bij het controleren van een aangetrokken gordel',
          antwoord:
            'Heupriem boven de heupen in de lenden en strak genoeg, beenlussen niet gedraaid of gekruist, en de heupriem niet ondersteboven of achterstevoren.',
        },
        {
          vraag: 'Een stopknoop leggen en waarvoor hij dient',
          antwoord:
            'Een dubbele overhandse knoop op het remtouw. Hij voorkomt dat het touweinde door het toestel schiet en signaleert welk einde het zekertouw is.',
        },
        {
          vraag: 'De twee situaties waarin je een stopknoop nodig hebt',
          antwoord:
            '(1) Als de zekeraar te ver achteruit stapte, en (2) als de route te lang is voor het touw bij het laten zakken.',
        },
        {
          vraag: 'Het verschil tussen statische en dynamische touwen',
          antwoord:
            'Statisch touw rekt niet (canyoning, speleo). Dynamisch touw rekt uit en beperkt de piekbelasting bij een val (sportklimmen).',
        },
        {
          vraag: 'Wat een kernmanteltouw is',
          antwoord:
            'Een touw met een dragende kern van verstrengelde draden, met een beschermende gekleurde mantel errond.',
        },
        {
          vraag: 'Inbinden met een acht in lus, met een safebiner en met twee schroefmusketons',
          antwoord:
            'Voorgemaakte acht in lus aan de zekerlus, met een safebiner (bv. Petzl Am’D Ball-lock of DMM Belay Master) of met twee tegengesteld ingehangen schroefmusketons. Enkel voor toprope in zalen met een vast touw.',
        },
        {
          vraag: 'Waar je op let bij het leggen van achtknopen',
          antwoord:
            'Door de twee inbindpunten, parallelle strengen zonder kruisingen, gepaste lus, uiteinde volgens de vuistregel (minstens één vuist breed, maximaal twee vuisten), strak aangetrokken.',
        },
        {
          vraag: 'Voor- en nadelen van een voorgemaakte acht in lus',
          antwoord:
            'Voordeel: snel en makkelijk. Nadeel: de musketon is een extra schakel die kan openstaan of dwars belast worden.',
        },
        {
          vraag: 'Het verschil tussen direct en indirect inbinden',
          antwoord:
            'Direct inbinden: door de twee inbindpunten van je gordel met de geweven (dubbele) achtknoop, de standaard zonder extra schakels. Indirect inbinden: aan de zekerlus met een acht in lus en een safebiner, enkel voor toprope in zalen met een vast touw.',
        },
        {
          vraag: 'De twee vormen van musketons en de soorten sluiting',
          antwoord:
            'Vormen: recht D-vormig en peervormig HMS. Sluiting: snapper (1 handeling), schroef of twistlock (2 handelingen), triple-lock (3 handelingen).',
        },
        {
          vraag: 'De meest complete musketon en waarom',
          antwoord:
            'De HMS-safebiner: je kan er een halve mastworp mee zekeren en hij sluit veilig (bv. Petzl Attache, DMM Rhino).',
        },
        {
          vraag: 'De info (breeksterktes in kN) op een musketon verklaren',
          antwoord:
            'Drie waarden in kN: lengterichting gesloten, dwars, en lengterichting met open snapper. Hij verliest circa twee derde bij dwarsbelasting of een open snapper. 21 kN komt ruwweg overeen met 2100 kg.',
        },
      ],
    },
    {
      titel: 'Zekeren en partnercheck',
      items: [
        {
          vraag: 'Een volledige partnercheck demonstreren met twee personen',
          antwoord:
            'Check de route, de partner (gordel en inbindknoop), via het touw (zelfde touw, niet gedraaid), de zekeraar (toestel correct, safebiner dicht, gordel) en de stopknoop. Altijd opnieuw en grondig.',
        },
        {
          vraag: 'De dynamische zekertoestellen, autotubers en halfautomaten en hun verschillen',
          antwoord:
            'Dynamisch (tuber, HMS): remhandkracht- en positie-afhankelijk. Autotuber: extra remassistentie, nog positie-afhankelijk (bv. Mammut Smart, Edelrid Mega Jul). Halfautomaat: klemt volledig vast, niet meer kracht- of positie-afhankelijk (bv. Petzl Grigri).',
        },
        {
          vraag: 'De touwcommandos uitleggen: wanneer en waarom',
          antwoord:
            'Depart = vertrekken, Sec = strakker zonder blok, Mou = meer touw, Blok = gewicht erop, Descend = laat me zakken. Caillou waarschuwt voor vallend gesteente.',
        },
        {
          vraag: 'Omgaan met een groot gewichtsverschil tussen klimmer en zekeraar',
          antwoord:
            'Let op vanaf circa 30 % verschil. Blijf dicht bij de muur, draai de strengen rond elkaar, veranker de lichtere zekeraar of gebruik een Ohm (Edelrid).',
        },
      ],
    },
    {
      titel: 'Veiligheid en algemeen',
      items: [
        {
          vraag: 'Vier risicovolle situaties bij het indoorklimmen',
          antwoord:
            'Bv. fout inbinden of geen partnercheck, het remtouw lossen, te ver van de wand zekeren, te dicht bij een andere klimmer klimmen, een groot gewichtsverschil, of los haar en ringen.',
        },
        {
          vraag: 'Twee veelvoorkomende klimblessures',
          antwoord:
            'Bv. ingescheurde ringbandjes (pulleys) door crimpen, en schouderklachten door overontwikkelde trekspieren.',
        },
        {
          vraag: 'Het nut van een goede warming-up',
          antwoord: 'Een warming-up maakt pezen elastischer en verlaagt het blessurerisico.',
        },
        {
          vraag: 'Wat je doet bij een ongeval',
          antwoord:
            'Bel 112 (app 112 BE) en verwittig het personeel. Reanimeer als er geen ademhaling is.',
        },
        {
          vraag: 'Waarom je een slachtoffer stil laat liggen',
          antwoord:
            'Wegens mogelijke nek- of rugletsels. Enkel in stabiele zijlig leggen bij braakneigingen om stikken te vermijden.',
        },
        {
          vraag: 'Of je steeds verzekerd bent na het behalen van je KVB',
          antwoord:
            'Het bezit van een KVB staat los van de verzekering. Je hebt een aparte indoor- of bergsportverzekering nodig; die laatste zit in het KBF-lidmaatschap.',
        },
        {
          vraag: 'Twee fouten tegen de fairplay',
          antwoord: 'Bv. een touw bezet houden, of te dicht bij iemand klimmen.',
        },
        {
          vraag: 'Wie voorrang heeft op de muur',
          antwoord:
            'Wie eerst startte heeft voorrang, maar na een blok of een val verlies je die.',
        },
        {
          vraag: 'Wanneer een route correct uitgeklommen is',
          antwoord:
            'In een keer tot de laatste greep, zonder blokken, vallen, touwsteun, vreemde grepen of op de haken te staan.',
        },
        {
          vraag: 'A vue, flash en redpoint',
          antwoord:
            'A vue = eerste poging zonder info. Flash = eerste poging met info vooraf. Redpoint = uitklimmen na meermaals proberen.',
        },
        {
          vraag: 'Welke klimvaardigheidsbewijzen er bestaan',
          antwoord:
            'KVB 1 (indoor toprope), 2 (indoor voorklimmen), 2+ (outdoor singlepitch), 3 (outdoor multipitch), 3+ en 4 (adventure / trad climbing).',
        },
      ],
    },
  ],
  praktijk: [
    {
      titel: 'Klimmen en zekeren (drie routes)',
      items: [
        'Inbinden met een gestoken achtknoop',
        'Route 1 zekeren met een dynamisch zekertoestel naar keuze',
        'Route 2 zekeren met een autotuber naar keuze',
        'Route 3 zekeren met een halfautomaat naar keuze',
        'In route 1 een onaangekondigde val correct opvangen als zekeraar',
        'Alle knopen uit de touwen halen bij het doorschuiven naar een volgende route',
      ],
    },
  ],
};

const kvb2Examen: ExamenGids = {
  intro:
    'De deelnemers starten per twee. Eerst een theorie-examen (antwoorden 75 % juist), daarna een praktijkexamen van drie routes. Je mag tijdens het klimmen en zekeren maximaal twee kleinere fouten maken, maar geen enkele directe veiligheidsfout.',
  theorie: [
    {
      titel: 'Materiaal en techniek',
      items: [
        {
          vraag: 'Setjes: opbouw, haaksnapper vs touwsnapper, dyneema vs nylon',
          antwoord:
            'Twee snappers met een dogbone ertussen. Haaksnapper (recht) aan de haak; touwsnapper (gebogen) om het touw in te pikken. Dyneema is lichter en dunner; nylon is dynamischer, duurzamer en goedkoper.',
        },
        {
          vraag: 'Het nut en de voordelen van een touwzak',
          antwoord:
            'Beschermt het touw, vermijdt ongewenste knopen en je werkt sneller. Het niet-klimuiteinde zit met een stopknoop aan de zak zodat het niet door het toestel kan schieten.',
        },
        {
          vraag: 'Wat een relais is en wat redundantie betekent',
          antwoord:
            'Het omlooppunt bovenaan, aan twee punten, met het touw door twee musketons. Redundantie = dubbele veiligheid: faalt er een, dan neemt het andere de belasting over.',
        },
        {
          vraag: 'Orde aan de gordel bij het voorklimmen',
          antwoord:
            'Aan de voorste materiaallussen enkel setjes (met de haaksnapper, zelfde richting, helft links en helft rechts). Achteraan eventueel je safebiner met zekertoestel.',
        },
        {
          vraag: 'De drie regels van een setje en de orientatie van de onderste snapper',
          antwoord:
            '1) Haaksnapper aan de haak, touw in de touwsnapper. 2) De onderste snapper wijst weg van de klimrichting. 3) Het touw komt naar de klimmer toe uit het setje.',
        },
      ],
    },
    {
      titel: 'Zekeren en vallen',
      items: [
        {
          vraag: 'De positie van de zekeraar en waarom je dicht bij de wand blijft',
          antwoord:
            'Dicht bij de wand en onder de eerste tussenzekering. Te ver achteruit verlengt de valdiepte (grondval) en je kan hard tegen de muur knallen en het remtouw lossen. Nooit meer dan circa 1,5 a 2 m achteruit.',
        },
        {
          vraag: 'Spotten tot aan de eerste haak',
          antwoord:
            'Bij een val voor de eerste haak het lichaam bijsturen zodat de klimmer op de voeten landt. Hou je vingers niet gespreid.',
        },
        {
          vraag: 'Actief zekeren',
          antwoord:
            'Continu afwisselen tussen touw uitgeven en innemen volgens wat de klimmer doet.',
        },
        {
          vraag: 'Het verschil tussen statisch en dynamisch zekeren en wanneer je elk gebruikt',
          antwoord:
            'Statisch (achteruit springen) beperkt de valdiepte maar geeft een hoge piekbelasting: op de eerste setjes, boven een uitsteeksel of op een dal met structuur. Dynamisch (meegeven) geeft een diepere maar zachtere val: standaard.',
        },
        {
          vraag: 'Wat de zekeringsketen is',
          antwoord:
            'Al het materiaal dat de valenergie verwerkt: de gordels, de inbindknoop, het touw, het setje van de val, de haak, het zekertoestel en de safebiner.',
        },
        {
          vraag: 'Een voetfout herkennen, signaleren en corrigeren',
          antwoord:
            'Touw achter het been geeft bij een val een katapult-effect. Onthou: wand, touw, voeten. De zekeraar roept Voetfout; de klimmer maakt met zijn voet een 360 graden rond het touw.',
        },
      ],
    },
  ],
  praktijk: [
    {
      titel: 'Drie routes klimmen en zekeren',
      items: [
        'Route 1: zekeren met een dynamisch zekertoestel naar keuze',
        'Route 2: zekeren met een autotuber naar keuze',
        'Route 3: zekeren met een halfautomaat naar keuze',
        'Voorklimmersval op overhang (inbindpunt circa 50 cm boven het setje), eerst oogcontact met de evaluator',
        'Tijdens de val het touw vastnemen en de schok opvangen in de benen',
        'Als zekeraar de val dynamisch opvangen met beide handen op het remtouw (geen blok)',
        'Na de val verder klimmen en de setjes recupereren bij het naar beneden komen',
      ],
    },
    {
      titel: 'Geen enkele directe veiligheidsfout',
      items: [
        'Een setje nooit overslaan of fout inpikken zonder te corrigeren',
        'Niet te ver naar links of rechts klimmen',
        'Nooit het remtouw lossen of met een hand boven het toestel laten zakken',
        'Als zekeraar niet te ver achteruit lopen en steeds schoenen aan',
        'Steeds een partnercheck, een correcte inbindknoop en een stopknoop',
      ],
    },
  ],
};

const kvb2plusGids: ExamenGids = {
  intro:
    'Onderstaande punten zijn de vaardigheden die je vlot in de vingers moet hebben voor je outdoor singlepitch gaat voorklimmen.',
  theorie: [
    {
      titel: 'Materiaal en fysica',
      items: [
        {
          vraag: 'Standaardrelais: op welk punt je werkt en waarom de haken schuin boven elkaar staan',
          antwoord:
            'Je werkt op de ring of maillon aan de onderste haak. De haken staan schuin boven elkaar zodat bij uitbreken van de onderste de belasting via een schuine pendel op de bovenste overgaat, met een lagere piekbelasting.',
        },
        {
          vraag: 'Het verschil tussen expansiehaken en lijmhaken',
          antwoord:
            'Expansiehaak (goujon/plaquette): zet zich vast als een plug, enkel in harde steen, meteen bruikbaar en verwijderbaar. Lijmhaak (broche/scellement): ingelijmd, moet dagen uitharden en is niet verwijderbaar.',
        },
        {
          vraag: 'Bandsling en leeflijn: waarom statisch materiaal en waarom je blijft hangen',
          antwoord:
            'Bandsling is statisch en verdraagt geen directe schokbelasting. Daarom hang je constant aan je leeflijn (60 cm, ankersteek aan de zekerlus): zo sluit je elke dynamische belasting uit.',
        },
        {
          vraag: 'De drie soorten helmen',
          antwoord:
            'Schaalhelm (hard plastic, duurzaam, zwaar), schuimhelm (absorptie, licht, na een klap weggooien) en hybride (combinatie van beide).',
        },
        {
          vraag: 'Vangstoot, pulley-effect en valfactor uitleggen',
          antwoord:
            'Vangstoot = de maximale kracht op het lichaam. Pulley-effect: de zekering krijgt circa vijf derde van de vangstoot. Valfactor = de valdiepte gedeeld door de meter touw die de val opvangt.',
        },
      ],
    },
  ],
  praktijk: [
    {
      titel: 'Ombouwen en relaiswerk',
      items: [
        'Voorklimmen zonder ombouwen: musketon en twee setjes plaatsen',
        'Toprope/moulinette opzetten en op het juiste touweinde naklimmen',
        'Ombouwen op de standaardmanier (relais met ketting)',
        'Ombouwen met de extra voorzorg (twee setjes ingepikt, touw van onderuit) bij toprope of relais zonder ketting',
        'Ombouwen met behoud van de volledige touwlengte (tijdelijke achtknoop)',
      ],
    },
    {
      titel: 'Veiligheid en zelfredding',
      items: [
        'De partnercheck met de outdoor-extras (helm, propere schoenen, materiaal, handelingen)',
        'Een noodafdaling op de machardlus demonstreren',
        'Weten waarom je je touw nooit rechtstreeks door een boorhaak steekt',
        'Steeds een stopknoop, en weten waarom een touw van 80 m veiliger is',
      ],
    },
  ],
};

const kvb3Examen: ExamenGids = {
  intro:
    'De evaluatie gebeurt in Belgie, enkele weken na de stage. Er zijn geen herkansingen: vergelijk het met een rijexamen. Je moet de handelingen vlot en met vertrouwen demonstreren. Zodra er een veiligheidsfout gebeurt, wordt de evaluatie stopgezet.',
  theorie: [
    {
      titel: 'Ecologie en geologie',
      items: [
        {
          vraag: 'Manieren waarop je rotsklimmen ecologisch verantwoord houdt',
          antwoord:
            'Propere schoenen (zandkorrels polijsten de rots), leave no trace, magnesium en tickmarks beperken, op de paden blijven, rust houden, geen vuur, correct parkeren en de lokale topo kopen.',
        },
        {
          vraag: 'Op welk gesteente je hier klimt',
          antwoord:
            'In Belgie en de Franse sportgebieden klim je meestal op kalksteen (bv. Freyr, Gorges du Tarn, Orpierre).',
        },
        {
          vraag: 'Welke andere gesteenten je kent en waar ze voorkomen',
          antwoord:
            'Graniet in de bergen (bv. het Mont Blanc-massief) en zandsteen in Fontainebleau (boulderen).',
        },
      ],
    },
    {
      titel: 'Risicobewustzijn',
      items: [
        {
          vraag: 'Vier situaties waarin je niet wil vallen als voorklimmer',
          antwoord:
            'Tijdens het inpikken (touw in de hand), met het touw achter je been, vlak bij de grond of de eerste setjes, en boven een uitsteeksel.',
        },
        {
          vraag: 'Vier andere risicovolle situaties',
          antwoord:
            'Een groot gewichtsverschil, een Z-klip, te ver achteruit zekeren en een slecht touwverloop.',
        },
        {
          vraag: 'Valfactor, vangstoot en pulley-effect uitleggen',
          antwoord:
            'Valfactor = de valdiepte gedeeld door de meter touw die de val opvangt. Vangstoot = de maximale kracht op het lichaam. Pulley-effect: de zekering krijgt circa vijf derde van de vangstoot (klimmer plus zekeraar, min wrijving).',
        },
        {
          vraag: 'Vier voorbeelden van preventief gedrag',
          antwoord:
            'Partnercheck, stopknoop, dicht bij de wand zekeren, helm dragen, attent en actief zekeren.',
        },
        {
          vraag: 'Twee voorbeelden om blessures te vermijden',
          antwoord:
            'Goed opwarmen, en bij een val gewoon loslaten (niet grijpen naar grepen of setjes).',
        },
        {
          vraag: 'Waarom en wanneer je knopen op het touweinde legt',
          antwoord:
            'Een stopknoop op het touweinde voorkomt dat het door het toestel schiet bij het laten zakken of rappellen met een te kort touw (altijd bij singlepitch en bij elke rappel). Tijdens het multipitchen leg je bovendien bij het installeren van de rappel twee zaksteken (of achten) op het ene touweinde, en een halve achtknoop op het andere: zo herken je nadien welke streng je moet doortrekken om het touw te recupereren.',
        },
        {
          vraag: 'Wat je controleert tijdens een partnercheck',
          antwoord:
            'Route, partner (gordel, inbindknoop, materiaal, helm), touw, zekeraar (toestel, safebiner) en de stopknoop.',
        },
        {
          vraag: 'Waarom je altijd in je leeflijn blijft hangen',
          antwoord:
            'Omdat statisch materiaal (de sling) een dynamische schokbelasting slecht verdraagt.',
        },
        {
          vraag: 'De opties als je niet door een route geraakt',
          antwoord:
            'Setje trek, op de haak staan, een voetlus maken, een sterkere klimmer vragen, of een noodafdaling.',
        },
        {
          vraag: 'Voor- en nadelen van een vaste vs variabele voorklimmer',
          antwoord:
            'Vaste voorklimmer: goed bij niveauverschil of schrik. Variabele: sneller (minder touwhandelingen) en de mentale druk wordt verdeeld.',
        },
      ],
    },
    {
      titel: 'Materiaal en topo',
      items: [
        {
          vraag: 'De drie soorten helmen',
          antwoord:
            'Schaalhelm (hard, duurzaam, zwaar), schuimhelm (licht, na een klap weggooien) en hybride (combinatie).',
        },
        {
          vraag: 'De gevaren van een sling als leeflijn',
          antwoord:
            'Een sling is statisch: bij een schokbelasting (als je niet blijft hangen) kunnen hoge krachten optreden. Daarom blijf je er constant aan hangen.',
        },
        {
          vraag: 'Eigenschappen van nylon, dyneema en klimtouw',
          antwoord:
            'Nylon: dynamischer, duurzamer, slijtvaster. Dyneema: lichter en dunner maar statischer. Klimtouw: dynamisch.',
        },
        {
          vraag: 'Voor- en nadelen van langere setjes',
          antwoord:
            'Voordeel: een rechter touwverloop en minder wrijving. Nadeel: ze vergroten de valdiepte.',
        },
        {
          vraag: 'De drie categorieen klimtouwen',
          antwoord:
            'Enkeltouw (teken 1), halftouw (1/2) en tweelingtouw (oneindig-teken).',
        },
        {
          vraag: 'Twee voordelen van een touwzak',
          antwoord:
            'Hij beschermt het touw en vermijdt ongewenste knopen (plus sneller werken en veilig met de stopknoop).',
        },
        {
          vraag: 'Slag-, expansie- en boorhaken beschrijven en vergelijken',
          antwoord:
            'Slaghaken worden in een spleet geslagen (klassiek alpinisme). Expansiehaken zetten zich vast als een plug (harde steen, meteen bruikbaar, verwijderbaar). Lijmhaken worden ingelijmd (dagen uitharden, niet verwijderbaar).',
        },
        {
          vraag: 'Een route bespreken aan de hand van de topo',
          antwoord:
            'Bekijk de approach, het aantal en de lengte van de touwlengtes, de soorten relais (met of zonder ketting/maillon), of je rappelt of afwandelt, en de ontsnappingsmogelijkheden. camptocamp.org geeft vaak nuttige commentaar.',
        },
      ],
    },
    {
      titel: 'Handelen bij een ongeval',
      items: [
        {
          vraag: 'Hoe je reageert bij een ongeval of noodsituatie',
          antwoord:
            'Blijf kalm, bel 112 (app 112 BE geeft je locatie) en zorg eerst voor je eigen veiligheid.',
        },
        {
          vraag: 'Wat je meeneemt voor ongevallen of noodsituaties',
          antwoord:
            'EHBO, een scherp mes, een extra zekertoestel, een overlevingsdekentje, een hoofdlamp, een opgeladen GSM en je identiteits- en lidkaart.',
        },
        {
          vraag: 'Hoe je kan bijdragen aan de ongevallenregistratie van de KBF',
          antwoord:
            'Meld (ook bijna-)ongevallen anoniem aan de federatie via klimenbergsportongevallen.eu. Zo leert de KBF hoe de sport veiliger kan.',
        },
      ],
    },
  ],
  praktijk: [
    {
      titel: 'Multipitch op de rotsen',
      items: [
        'Standplaats opbouwen op twee verbonden en twee niet-verbonden haken (mastworp met een hand)',
        'Resttouw ophalen en de naklimmer zekeren met een Reverso-achtige',
        'Een noodafdaling (terugkeer op de laatste tussenzekering) demonstreren',
        'De Reverso deblokkeren en een expresstakel installeren voor touwsteun',
        'Verbouwen van naklimmer- naar voorklimmerzekering, materiaal doorgeven',
      ],
    },
    {
      titel: 'Rappel',
      items: [
        'Rappelstand installeren: overgaan van touw naar leeflijnen, touw in de maillon',
        'Afdaalsysteem installeren en rappellen, standplaats met centrale musketon opbouwen',
        'De volgende rappel voorbereiden en de voorbereiding controleren',
        'Het touw samen doortrekken en de volgende rappelstand afwerken; rappel 3 tot op de grond',
      ],
    },
    {
      titel: 'Relaisborden: ombouwen, HMS en alpiene slipsteek',
      items: [
        'Ombouwen op een verbonden relais (standaard) en op een niet-verbonden relais (enkelvoudig, behoud touwlengte)',
        'Het verschil tussen beide manieren uitleggen',
        'Een voorklimmer en naklimmer zekeren met de halve mastworp',
        'Een naklimmerzekering fixeren met een alpiene slipsteek en terug losmaken',
      ],
    },
    {
      titel: 'Zelfredding',
      items: [
        'Een rappelsysteem installeren op twee vrijhangende touwen',
        'Een stijgsysteem installeren en enkele meters omhoog prusikken, met een nieuwe veiligheidsknoop',
        'Terug ombouwen naar een rappelsysteem en naar beneden rappellen',
      ],
    },
  ],
};

export const LEVEL_META: Record<LevelId, LevelMeta> = {
  kvb1: {
    beschikbaar: true,
    heeftExamen: true,
    accent: '#700e35',
    afbeelding: img('KVB1.png'),
    intro: [
      'KVB 1 (Indoor Toprope) bundelt alle kennis en vaardigheden om veilig en zelfstandig indoor te leren naklimmen. Bij toprope loopt het touw bovenaan door een vast omlooppunt, waardoor de valdiepte beperkt blijft.',
      'Je leert het materiaal kennen (gordels, musketons, touwen, zekertoestellen), correct inbinden met een achtknoop, een grondige partnercheck doen en zekeren met de tunnelbeweging. Daarnaast komen veiligheid, fairplay, opwarming en eerste hulp aan bod.',
    ],
    examen: kvb1Examen,
  },
  kvb2: {
    beschikbaar: true,
    heeftExamen: true,
    accent: '#082b51',
    afbeelding: img('KVB2.png'),
    intro: [
      'KVB 2 (Indoor Voorklimmen) leert je veilig voorklimmen in de klimzaal en een voorklimmer zekeren. Anders dan bij toprope neem je het touw mee omhoog en pik je het in tussenzekeringen (setjes), waardoor de krachten en risicos toenemen.',
      'Centraal staan het plaatsen en inpikken van setjes, de juiste beenpositie, actief zekeren, spotten, en het verschil tussen statisch en dynamisch een voorklimmersval opvangen.',
    ],
    examen: kvb2Examen,
  },
  kvb2plus: {
    beschikbaar: true,
    heeftExamen: false,
    accent: '#082b51',
    afbeelding: img('KVB2plus.png'),
    intro: [
      'KVB 2+ (Outdoor Voorklimmen Singlepitch) brengt het indoor voorklimmen naar de rotsen. Het grote verschil is dat de relais buiten meestal geen snapper heeft, dus moet je leren ombouwen om je touw door de relais te krijgen.',
      'Voor KVB 2+ is er geen examen, enkel cursus en stages. Je leert standplaatsen en boorhaken kennen, werkt met leeflijn en machardlus, en oefent de verschillende manieren van ombouwen en een noodafdaling.',
    ],
    examen: kvb2plusGids,
  },
  kvb3: {
    beschikbaar: true,
    heeftExamen: true,
    accent: '#00492c',
    afbeelding: img('KVB3.png'),
    intro: [
      'KVB 3 (Outdoor Voorklimmen Multipitch) leert je met enkeltouw multipitchen op goed geequipeerde massieven, met standplaatsen op twee boorhaken en uitgeruste rappelpistes.',
      'Je leert standplaatsen bouwen, een zelfzekering op mastworp, het stappenplan op de relais, rappellen, en reddingstechnieken: deblokkeren van het zekertoestel, de expresstakel, de halve mastworp, de alpiene slipsteek en zelfredding (prusikken).',
    ],
    examen: kvb3Examen,
  },
  kvb3plus: {
    beschikbaar: false,
    heeftExamen: false,
    accent: '#00492c',
    afbeelding: img('KVB3plus.png'),
    intro: [
      'KVB 3+ richt zich op veilig klimmen op goed uitgeruste internationale rotsroutes, routevoorbereiding en noodprocedures. Voor KVB 3+ is er geen examen, enkel cursus en stages. Nog geen studiemateriaal toegevoegd.',
    ],
  },
  kvb4: {
    beschikbaar: false,
    heeftExamen: false,
    accent: '#003b73',
    afbeelding: img('KVB4.png'),
    intro: [
      'KVB 4 (Adventure / Trad Klimmen) gaat over klimmen op gedeeltelijk of niet uitgerust terrein met mobiele zekeringen (friends, nuts), artificieel klimmen en trip-voorbereiding. Nog geen studiemateriaal toegevoegd.',
    ],
  },
};
