// src/App.js
import React, { useState } from 'react';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';

const App = () => {
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  return (
    <div>
      <h1>Marvel Characters</h1>
      <CharacterList onCharacterSelect={(id) => setSelectedCharacterId(id)} />
      <CharacterDetail characterId={selectedCharacterId} />
    </div>
  );
};

export default App;
