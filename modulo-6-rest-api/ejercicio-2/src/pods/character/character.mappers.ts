import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  ...character,
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  url: character.url,
});

// export const mapCharacterFromVmToApi = (character: viewModel.Character): apiModel.Character =>
//   (({
//     ...character,
//     id: hotel.id,
//     name: hotel.name,
//     shortDescription: hotel.description,
//     hotelRating: hotel.rating,
//     address1: hotel.address,
//     city: hotel.city,
//   } as unknown) as apiModel.Hotel);
