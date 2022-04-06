import { ReactNode, useState } from "react";
import { PokemonContext } from "../contexts/Pokemon";

interface PokemonProviderProps {
  children: ReactNode;
}



export function PokemonProvider({ children }: PokemonProviderProps) {
  const [pokemonName, setPokemonName] = useState<string>('' as string);

  

  async function putPokemonName(PokemonDataName: string) {
    setPokemonName(PokemonDataName);
  }

  return (
    <PokemonContext.Provider value={{ pokemonName, putPokemonName }}>
      {children}
    </PokemonContext.Provider>
  );
}
