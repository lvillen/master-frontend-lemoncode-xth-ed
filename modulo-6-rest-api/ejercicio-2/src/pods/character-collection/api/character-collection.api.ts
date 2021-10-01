import { CharacterEntityApi } from './character-collection.api-model';

const axios = require('axios');

const characterCollectionEndpoint = "/api/characters"; //localhost

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  return axios.get(characterCollectionEndpoint).then(resp => resp.data); //resp.data > porque no tenemos results en bbdd
};
