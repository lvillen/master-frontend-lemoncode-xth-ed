import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { Character, createEmptyCharacter } from './character.vm';
import { mapCharacterFromApiToVm } from './character.mappers';
// import { mapCharacterFromApiToVm, mapCharacterFromVmToApi } from './character.mappers';
import { Lookup } from 'common/models';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter()); 
  const { id } = useParams();
  const history = useHistory();

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  // const handleSave = async (hotel: Hotel) => {
  //   const apiHotel = mapHotelFromVmToApi(hotel);
  //   const success = await api.saveHotel(apiHotel);
  //   if (success) {
  //     history.goBack();
  //   } else {
  //     alert('Error on save hotel');
  //   }
  // };

  return <CharacterComponent character={character} />;
  // return <CharacterComponent character={character} onSave={handleSave} />;
};
