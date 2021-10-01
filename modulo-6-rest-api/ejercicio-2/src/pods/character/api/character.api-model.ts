export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  bestSentences: string[],
  origin: object;
  location: object;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
