import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import axios from 'axios';

const url = "/api/characters/";

export const getCharacter = (id: string): Promise<Character> => {
  return axios.get(`${url}${id}`)
              .then((resp) => resp.data);
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return axios.put(`${url}${character.id}`, character, {headers: {"Content-Type": "application/json"}})
              .then(resp => resp.data)
};
