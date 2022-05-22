import { useContext } from "react";
import { PokemonContext } from "../contexts/Pokemon";

export function usePokemon() {
  return useContext(PokemonContext);
}
