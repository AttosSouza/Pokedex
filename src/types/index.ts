export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonResponse {
  count: number;
  next: string;
  previous: string | null;
  results: Pokemon[];
}

export interface PokeAttributes {
  id: number;
  name: string;
  sprites: Sprites;
  types: PokemonType[];
  height: number;
  weight: number;
  stats: PokemonStat[];
}

export interface Sprites {
  other: {
    dream_world: {
      front_default: string;
    };
  };
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}
