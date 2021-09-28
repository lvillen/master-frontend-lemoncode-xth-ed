import { Character } from './character.api-model';
import { Lookup } from 'common/models';

const axios = require('axios');

const url = "https://rickandmortyapi.com/api/character/";

export const getCharacter = async (id: string): Promise<Character> => {
  return axios.get(`${url}${id}`)
              .then((resp) => resp.data);
};

// export const saveHotel = async (hotel: Hotel): Promise<boolean> => {
//   return true;
// };
