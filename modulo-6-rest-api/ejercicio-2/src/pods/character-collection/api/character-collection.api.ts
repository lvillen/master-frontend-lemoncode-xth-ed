import { CharacterEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

const axios = require('axios');

const characterCollectionEndpoint = "https://rickandmortyapi.com/api/character"; //localhost 

// let characterCollection = [...mockCharacterCollection];

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  return axios.get(characterCollectionEndpoint).then(resp => resp.data.results); //resp.data > porque no tenemos results en bbdd
};

// export const deleteCharacter = async (id: string): Promise<boolean> => {
//   characterCollection = characterCollection.filter((c) => c.id !== id);
//   return true;
// };
