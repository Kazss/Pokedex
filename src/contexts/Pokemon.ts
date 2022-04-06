import { createContext } from "react";

interface PokemonContextData {
  pokemonName: string;
  putPokemonName: (PokemonDataName: string) => Promise<void>;
}

export const PokemonContext = createContext<PokemonContextData>(
  {} as PokemonContextData
);
