export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  url: string;
}

export const createEmptyCharacter = (): Character => ({
  id: 0,
  name: '',
  status: '',
  species: '',
  url: '',
});

