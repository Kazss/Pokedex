import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePokemon } from '../../hooks/usePokemon';
import { api } from '../../services/api';
import { bgColor, pokeballimg, staticPokeData } from '../../utils/staticPoke';
import {
  PokemonCard, PokemonCardBody,
  PokemonCardBodyInfo, PokemonCardHeader,
  PokemonCardHeaderDetails, PokemonCardHeaderImage,
  PokemonCardHeaderTypes
} from './styles';

interface ITypes {
  type: {
    name: string;
  }
}[]

interface ISprite {
  other: {
    'official-artwork': {
      front_default: string;
    }
  }
}

interface IBaseStats {
  base_stat: string;
  stat: {
    name: string;
  }
}

interface IAbilities {
  ability: {
    name: string;
  }
}

interface PokemonDataProps {
  name: string;
  id: string;
  types: ITypes[];
  sprites: ISprite;
  stats: IBaseStats[];
  abilities: IAbilities[];
}


export function Card() {
  const { pokemonName } = usePokemon();
  const [pokemonData, setPokemonData] = useState<PokemonDataProps>();
  const [currentBgColor, setCurrentBgColor] = useState('');
  
  useEffect(() => {
    function getBackgroundColor() {
      const name = pokemonData?.types[0].type.name;
      setCurrentBgColor(bgColor[name]);
    }
    getBackgroundColor();
  }, [pokemonData?.types])

  useEffect(() => {
    async function getPokemonData() {
      const { data } = await api.get<PokemonDataProps>(`${pokemonName}`);
      setPokemonData(data);
    }

    if (pokemonName) {
      getPokemonData();

    }

  }, [pokemonName])

  return (
    <PokemonCard backgroundColor={currentBgColor}>

      {/* Card Header */}

      <PokemonCardHeader icon={pokeballimg}>
        <PokemonCardHeaderDetails>
          <h2>{pokemonData?.name ? pokemonData.name : staticPokeData.name}</h2>
          <span>#{pokemonData?.id ? pokemonData.id : staticPokeData.id}</span>
        </PokemonCardHeaderDetails>
        <PokemonCardHeaderTypes >
          {pokemonData?.types ? (
            pokemonData.types.map(data => (
              <span key={data.type.name}>{data.type.name}</span>
            ))) :
            <>
              <span>{staticPokeData.type[0].name}</span>
              <span>{staticPokeData.type[1].name}</span>
            </>
          }
        </PokemonCardHeaderTypes>

        <PokemonCardHeaderImage>
          <Image
            src={pokemonData?.sprites.other['official-artwork'].front_default ?
              pokemonData.sprites.other['official-artwork'].front_default : staticPokeData.urlImg}
            alt={pokemonData?.name} width={350}
            height={350} priority />
        </PokemonCardHeaderImage>
      </PokemonCardHeader>

      {/* Card Body */}

      <PokemonCardBody>
        <PokemonCardBodyInfo>
          <h2>Base Stats</h2>
          {pokemonData?.stats ? (
            pokemonData.stats.map(data => (
              <ul key={data.stat.name}>
                <li>{data.stat.name}: {data.base_stat}</li>
              </ul>
            ))) :
            staticPokeData.stats.map(data => (
              <ul key={data.stat.name}>
                <li>{data.stat.name}: {data.base_stat}</li>
              </ul>
            ))
          }
        </PokemonCardBodyInfo>
        <PokemonCardBodyInfo>
          <h2>Abilities</h2>
          {pokemonData?.abilities ? (
            pokemonData.abilities.map(data => (
              <ul key={data.ability.name}>
                <li>{data.ability.name}</li>
              </ul>

            ))) :
            staticPokeData.abilities.map(data => (
              <ul key={data.name}>
                <li>{data.name}</li>
              </ul>
            ))
          }
        </PokemonCardBodyInfo>
      </PokemonCardBody>
    </PokemonCard>

  )
}
