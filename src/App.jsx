import { useState, useEffect, useCallback } from 'react';
import Biblingo from '../biblingo-hd.jsx';
import { loadProgress, saveProgress } from './lib/storage';

export default function App() {
  const [initialState, setInitialState] = useState(null);

  useEffect(() => {
    setInitialState(loadProgress());
  }, []);

  const onProgressChange = useCallback((completed, xp, streak) => {
    saveProgress(completed, xp, streak);
  }, []);

  if (initialState === null) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#faf7f2' }}>
        <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 24, color: '#d97706' }}>Loading…</div>
      </div>
    );
  }

  return (
    <Biblingo
      initialCompleted={initialState.completed}
      initialXp={initialState.xp}
      initialStreak={initialState.streak}
      onProgressChange={onProgressChange}
    />
  );
}
