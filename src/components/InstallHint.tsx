import { useEffect, useState } from 'react';
import { ArrowDownTrayIcon, ArrowUpOnSquareIcon, XMarkIcon } from '@heroicons/react/20/solid';

type InstallEvent = Event & {
  prompt: () => void;
  userChoice: Promise<{ outcome: string }>;
};

export function InstallHint() {
  const [installEvent, setInstallEvent] = useState<InstallEvent | null>(null);
  const [zichtbaar, setZichtbaar] = useState(false);
  const [ios, setIos] = useState(false);

  useEffect(() => {
    const nav = navigator as Navigator & { standalone?: boolean };
    const standalone =
      window.matchMedia('(display-mode: standalone)').matches || nav.standalone === true;
    if (standalone) return;

    try {
      if (localStorage.getItem('kvb-install-dismissed') === '1') return;
    } catch {
      // negeren
    }

    if (/iphone|ipad|ipod/i.test(navigator.userAgent)) {
      setIos(true);
      setZichtbaar(true);
      return;
    }

    const onPrompt = (e: Event) => {
      e.preventDefault();
      setInstallEvent(e as InstallEvent);
      setZichtbaar(true);
    };
    const onInstalled = () => setZichtbaar(false);
    window.addEventListener('beforeinstallprompt', onPrompt);
    window.addEventListener('appinstalled', onInstalled);
    return () => {
      window.removeEventListener('beforeinstallprompt', onPrompt);
      window.removeEventListener('appinstalled', onInstalled);
    };
  }, []);

  function sluit() {
    setZichtbaar(false);
    try {
      localStorage.setItem('kvb-install-dismissed', '1');
    } catch {
      // negeren
    }
  }

  async function installeer() {
    if (!installEvent) return;
    installEvent.prompt();
    try {
      await installEvent.userChoice;
    } catch {
      // negeren
    }
    setInstallEvent(null);
    setZichtbaar(false);
  }

  if (!zichtbaar) return null;

  return (
    <div className="mx-5 mb-2 mt-6 flex items-start gap-3 rounded-2xl border border-sand-300 bg-surface/70 p-4 text-sm shadow-sm">
      <ArrowDownTrayIcon
        className="mt-0.5 h-5 w-5 shrink-0"
        style={{ color: 'var(--color-clay-500)' }}
        aria-hidden="true"
      />
      <div className="flex-1">
        <div className="font-semibold text-bark-800">Installeer KVB Studie</div>
        {ios ? (
          <p className="mt-0.5 inline-flex flex-wrap items-center gap-1 text-bark-600">
            Tik op
            <ArrowUpOnSquareIcon className="h-4 w-4" aria-hidden="true" />
            Deel en kies dan ‘Zet op beginscherm’.
          </p>
        ) : (
          <>
            <p className="mt-0.5 text-bark-600">
              Voeg de app toe aan je beginscherm voor snel, offline gebruik.
            </p>
            <button
              type="button"
              onClick={installeer}
              className="mt-2 rounded-lg px-3 py-1.5 text-sm font-medium text-white"
              style={{ backgroundColor: 'var(--color-clay-500)' }}
            >
              Installeren
            </button>
          </>
        )}
      </div>
      <button type="button" onClick={sluit} aria-label="Melding sluiten" className="shrink-0 text-bark-500">
        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}
