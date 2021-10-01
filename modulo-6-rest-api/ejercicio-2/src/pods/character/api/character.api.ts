import { Character } from './character.api-model';
import { Lookup } from 'common/models';

const axios = require('axios');

const url = "/api/characters/";

export const getCharacter = (id: string): Promise<Character> => {
  return axios.get(`${url}${id}`)
              .then((resp) => resp.data);
};

export const editCharacter = (id: string): Promise<Character> => {
  return axios.get(`${url}${id}`)
              .then((resp) => resp.data.bestSentences); //Me devuelve un json

}



// export const saveHotel = async (hotel: Hotel): Promise<boolean> => {
//   return true;
// };
