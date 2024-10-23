import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CharacterDetail = ({ characterId }) => {
  const [characterDetails, setCharacterDetails] = useState(null);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const response = await axios.get(
          `https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=19736d4704c205617e9aed5b69bffddc&hash=06308d71106e43629b28f1304aa7b6ba`
        );
        setCharacterDetails(response.data.data.results[0]);
      } catch (error) {
        console.error('Error fetching character details', error);
      }
    };

    if (characterId) {
      fetchCharacterDetails();
    }
  }, [characterId]);

  if (!characterDetails) return <div>Loading...</div>;

  return (
    <div>
      <h2>{characterDetails.name}</h2>
      <p>{characterDetails.description}</p>
      <h3>Comics</h3>
      <ul>
        {characterDetails.comics.items.map((comic) => (
          <li key={comic.resourceURI}>{comic.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterDetail;
