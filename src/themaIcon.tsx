import type { ComponentType, SVGProps } from 'react';
import {
  LinkIcon,
  ShieldCheckIcon,
  Square3Stack3DIcon,
  ExclamationTriangleIcon,
  WrenchScrewdriverIcon,
  CalculatorIcon,
  GlobeEuropeAfricaIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
  IdentificationIcon,
  FireIcon,
  AcademicCapIcon,
  MapPinIcon,
} from '@heroicons/react/20/solid';

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

/** Kies een passend icoon op basis van een thema- of categorienaam. */
export function iconVoorThema(naam: string): Icon {
  const t = naam.toLowerCase();
  if (/(knoop|knopen|inbinden|setje|stopknoop|verbinden)/.test(t)) return LinkIcon;
  if (/(zeker|toestel|remhand|spotten|dummy|deblok|halfautomaat)/.test(t)) return ShieldCheckIcon;
  if (/(redding|noodafdaling|zelfredding|expresstakel|val|risico|blessure|ongeval|ehbo|voetfout)/.test(t))
    return ExclamationTriangleIcon;
  if (/(touw|relais|standplaats|ombouwen|rappel|multipitch|stappenplan|recupereren|zelfzekering|scenario|timing|orde)/.test(t))
    return Square3Stack3DIcon;
  if (/(gordel|helm|musketon|materiaal|schoen|boorhaken|sling|leeflijn|prusik|machard|touwzak)/.test(t))
    return WrenchScrewdriverIcon;
  if (/(fysica|valfactor|zekeringsketen|normering)/.test(t)) return CalculatorIcon;
  if (/geolog/.test(t)) return GlobeEuropeAfricaIcon;
  if (/(ecolog|ethiek|fairplay)/.test(t)) return SparklesIcon;
  if (/commando/.test(t)) return ChatBubbleLeftRightIcon;
  if (/(topo|checklist|examen|drie situaties|veiligheid)/.test(t)) return ClipboardDocumentCheckIcon;
  if (/(verzekering|systeem|kvb)/.test(t)) return IdentificationIcon;
  if (/opwarm/.test(t)) return FireIcon;
  if (/(toprope|voorklim|klimschoenen)/.test(t)) return MapPinIcon;
  return AcademicCapIcon;
}
