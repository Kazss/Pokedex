import Image from 'next/image';
import { useState } from 'react';
import { usePokemon } from '../../hooks';
import { NavigationList, PokemonList } from './styles';


interface ListCardProps {
  pokemonList: {
    name: string;
    url: string;
    urlImage: string;
  }[]
}


export function ListCard({ pokemonList }: ListCardProps) {
  const { pokemonName, putPokemonName } = usePokemon();

  const [activePokemon, setActivePokemon] = useState('bulbasaur');


  function handleAddPokeName(PokemonDataName: string) {
    setActivePokemon(PokemonDataName);
    putPokemonName(PokemonDataName);
    console.log(pokemonName);
  }

  return (
    <NavigationList>
      <ul>
        {pokemonList?.map(pokemon => (
          <PokemonList WhichPokemon={activePokemon} pokemonType={pokemon.name} onClick={() => handleAddPokeName(pokemon.name)} key={pokemon.name}>
            <Image src={pokemon.urlImage} alt={pokemon.name} height={50} width={50} />
            <span>{pokemon.name}</span>
          </PokemonList>
        ))}
      </ul>
    </NavigationList>
  )
}