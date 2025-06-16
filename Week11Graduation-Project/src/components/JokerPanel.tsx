import React, { useState } from 'react';

interface JokerPanelProps {
  onSkip: () => void;
  onEliminate: () => void;
}

const JokerPanel: React.FC<JokerPanelProps> = ({ onSkip, onEliminate }) => {
  const [usedJokers, setUsedJokers] = useState({
    search: false,
    skip: false,
    eliminate: false,
  });

  const handleClick = (type: 'search' | 'skip' | 'eliminate') => {
    if (usedJokers[type]) return;

    setUsedJokers((prev) => ({ ...prev, [type]: true }));

    switch (type) {
      case 'search':
        alert('🔍 Arama jokeri ileride aktif edilecek.');
        break;
      case 'skip':
        alert('⏭️ Soru geçiliyor...');
        onSkip();
        break;
      case 'eliminate':
        alert('🚫 İki yanlış şık devre dışı bırakılıyor...');
        onEliminate();
        break;
    }
  };

  return (
    <div>
      <h3>🎴 Jokerler</h3>
      <button onClick={() => handleClick('search')} disabled={usedJokers.search}>
        🔍 Arama Jokeri
      </button>
      <button onClick={() => handleClick('skip')} disabled={usedJokers.skip}>
        ⏭️ Soru Geç
      </button>
      <button onClick={() => handleClick('eliminate')} disabled={usedJokers.eliminate}>
        🚫 Yanlış Şıkları Ele
      </button>
    </div>
  );
};

export default JokerPanel;
