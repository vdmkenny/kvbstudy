import { useEffect, useMemo, useState } from 'react';
import type { LevelId, StudieModus } from './types';
import { getLevel, vorigeNiveaus } from './data';
import { Home } from './components/Home';
import { LevelPage } from './components/LevelPage';
import { Quiz } from './components/Quiz';
import { Flashcards } from './components/Flashcards';
import { KnotGuide } from './components/KnotGuide';
import { Glossary } from './components/Glossary';
import { MateriaalGuide } from './components/MateriaalGuide';

type LevelTab = 'info' | 'examen' | 'oefenen';

type View =
  | { naam: 'home' }
  | { naam: 'niveau'; id: LevelId; tab: LevelTab }
  | { naam: 'oefenen'; id: LevelId; modus: StudieModus; thema: string; vorige: boolean }
  | { naam: 'knopen'; openId?: string }
  | { naam: 'woordenlijst' }
  | { naam: 'materiaal' };

function parseHash(): View {
  const raw = window.location.hash.replace(/^#/, '');
  if (!raw) return { naam: 'home' };
  try {
    const v = JSON.parse(decodeURIComponent(raw)) as View;
    if (v && typeof v === 'object' && 'naam' in v) return v;
  } catch {
    // ongeldige hash, terug naar home
  }
  return { naam: 'home' };
}

function hashVoor(view: View): string {
  return view.naam === 'home' ? '' : '#' + encodeURIComponent(JSON.stringify(view));
}

export default function App() {
  const [view, setView] = useState<View>(() => parseHash());

  // Schrijf de huidige view naar de URL-hash (zodat refresh op dezelfde pagina blijft).
  useEffect(() => {
    const target = hashVoor(view);
    const current = window.location.hash;
    if (current !== target && !(target === '' && current === '')) {
      if (target === '') history.replaceState(null, '', window.location.pathname + window.location.search);
      else window.location.hash = target;
    }
  }, [view]);

  // Reageer op terug/vooruit van de browser.
  useEffect(() => {
    const onHash = () => setView(parseHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Scroll naar boven bij elke schermwissel (een SPA onthoudt anders de scrollpositie).
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [view]);

  const level = 'id' in view ? getLevel(view.id) : undefined;

  const oefenData = useMemo(() => {
    if (view.naam !== 'oefenen' || !level) return null;
    const niveaus = view.vorige ? [...vorigeNiveaus(level.id), level] : [level];
    return {
      vragen: niveaus.flatMap((l) => l.quiz.map((q) => ({ ...q, bron: l.id }))),
      kaarten: niveaus.flatMap((l) => l.flashcards),
    };
  }, [view, level]);

  return (
    <div className="mx-auto flex min-h-full w-full max-w-xl flex-col">
      {view.naam === 'home' && (
        <Home
          onNiveau={(id) => setView({ naam: 'niveau', id, tab: 'info' })}
          onKnopen={() => setView({ naam: 'knopen' })}
          onWoordenlijst={() => setView({ naam: 'woordenlijst' })}
          onMateriaal={() => setView({ naam: 'materiaal' })}
        />
      )}

      {view.naam === 'niveau' && level && (
        <LevelPage
          level={level}
          tab={view.tab}
          onTab={(tab) => setView({ naam: 'niveau', id: view.id, tab })}
          onTerug={() => setView({ naam: 'home' })}
          onStart={(modus, thema, vorige) =>
            setView({ naam: 'oefenen', id: view.id, modus, thema, vorige })
          }
          onKnoop={(openId) => setView({ naam: 'knopen', openId })}
        />
      )}

      {view.naam === 'oefenen' && level && oefenData && view.modus === 'quiz' && (
        <Quiz
          vragen={oefenData.vragen}
          thema={view.thema}
          accent={level.accent ?? '#9a4f31'}
          titel={level.naam}
          toonBron={view.vorige}
          onTerug={() => setView({ naam: 'niveau', id: view.id, tab: 'oefenen' })}
        />
      )}

      {view.naam === 'oefenen' && level && oefenData && view.modus === 'flashcards' && (
        <Flashcards
          kaarten={oefenData.kaarten}
          thema={view.thema}
          accent={level.accent ?? '#9a4f31'}
          titel={level.naam}
          onTerug={() => setView({ naam: 'niveau', id: view.id, tab: 'oefenen' })}
        />
      )}

      {view.naam === 'knopen' && (
        <KnotGuide openId={view.openId} onTerug={() => setView({ naam: 'home' })} />
      )}

      {view.naam === 'woordenlijst' && <Glossary onTerug={() => setView({ naam: 'home' })} />}

      {view.naam === 'materiaal' && <MateriaalGuide onTerug={() => setView({ naam: 'home' })} />}
    </div>
  );
}
