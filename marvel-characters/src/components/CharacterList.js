// src/components/CharacterList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterList = ({ onCharacterSelect }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
        try {
          const response = await axios.get(
            'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=19736d4704c205617e9aed5b69bffddc&hash=06308d71106e43629b28f1304aa7b6ba'
          );
          setCharacters(response.data.data.results);
        } catch (error) {
          console.error('Error fetching data', error);
        }
      };
      
  
    fetchCharacters();
  }, []);
  

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
      {characters.map((character) => (
        <div key={character.id} onClick={() => onCharacterSelect(character.id)} style={{ cursor: 'pointer' }}>
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          />
          <h3>{character.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
