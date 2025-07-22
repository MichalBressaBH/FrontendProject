export type PokemonType =
  | "X"
  | "normal"
  | "fire"
  | "water"
  | "grass"
  | "flying"
  | "fighting"
  | "poison"
  | "electric"
  | "ground"
  | "rock"
  | "psychic"
  | "ice"
  | "bug"
  | "ghost"
  | "steel"
  | "dragon"
  | "dark"
  | "fairy";
  
 export const pokemonTypes: PokemonType[] = [
    "X",
    "normal",
    "fire",
    "water",
    "grass",
    "flying",
    "fighting",
    "poison",
    "electric",
    "ground",
    "rock",
    "psychic",
    "ice",
    "bug",
    "ghost",
    "steel",
    "dragon",
    "dark",
    "fairy",
  ];

  export type PokemonCard = {
    name: string;
    id: number;
    types: TypeSlot[];
    image: string;
    hp: number;
    weight: number;
    height: number;
  }
  
  export type Type = {
    name: PokemonType;
    url: string;
  }
  
  export type TypeSlot = {
    slot: number;
    type: Type;
  }

  export type errorContainer = {
    status: boolean;
    message: string;
  }