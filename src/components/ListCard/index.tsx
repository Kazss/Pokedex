import Image from 'next/image';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { NavigationList, PokemonList } from './styles';

interface PokemonGetList {
  results: {
    name: string;
    url: string;
    urlImage: string;
  }[]
}

interface IPokemonList {
  name: string;
  url: string;
  urlImage: string;
}[]

interface IPokemonNameProps {
  name: string;
}

interface ListProps {
  handleAddPokemonData: (data: IPokemonNameProps) => void;
}

export function ListCard({ handleAddPokemonData }: ListProps) {

  const [activePokemon, setActivePokemon] = useState('bulbasaur');
  const [pokemon, setPokemon] = useState<IPokemonList[]>([]);
  const PokeurlImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

  function filteringPokemonData(data: PokemonGetList) {
    const FilteringUrlPokemon: IPokemonList[] = data.results.map((resultsData: { name: string; url: string; urlImage: string; }) => {
      return {
        name: resultsData.name,
        url: resultsData.url.replace(/\/+$/, ''),
        urlImage: resultsData.urlImage,
      }
    })

    const FilteredPokemonList: IPokemonList[] = FilteringUrlPokemon.map(resultsData => {
      return {
        name: resultsData.name,
        url: resultsData.url,
        urlImage: PokeurlImage + resultsData.url.substring(resultsData.url.lastIndexOf('/') + 1) + '.png'
      }
    })

    setPokemon(FilteredPokemonList)
  }


  useEffect(() => {
    async function getPokemonData() {
      const { data } = await api.get('?offset=0&limit=151');
      filteringPokemonData(data);

    }

    getPokemonData();

  }, [])

  function handleAddPokeName(data: IPokemonNameProps) {
    setActivePokemon(data.name);
    handleAddPokemonData(data);
  }

  return (
    <NavigationList>
      <ul>
        {pokemon.map(data => (
          <PokemonList WhichPokemon={activePokemon} pokemonType={data.name} onClick={() => handleAddPokeName(data)} key={data.name}>
            <Image src={data.urlImage} alt={data.name} height={50} width={50} />
            <span>{data.name}</span>
          </PokemonList>
        ))}
      </ul>
    </NavigationList>
  )
}