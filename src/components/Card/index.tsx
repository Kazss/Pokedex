import Image from 'next/image';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { PokemonCard, PokemonCardBody, PokemonCardBodyInfo, PokemonCardHeader, PokemonCardHeaderDetails, PokemonCardHeaderImage, PokemonCardHeaderTypes } from './styles';




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


interface IPokemonNameProps {
  name: string;
}


interface CardProps {
  pokemonName: IPokemonNameProps;
}

export function Card({ pokemonName }: CardProps) {
  const [pokemonData, setPokemonData] = useState<PokemonDataProps>();
  const [currentBgColor, setCurrentBgColor] = useState('');
  const [bgColor, setBgColor] = useState({
    normal: "#A8A878",
    fire: "#F08030",
    fighting: "#C03028",
    water: "#6890F0",
    flying: "#A890F0",
    grass: "#78C850",
    poison: "#A040A0",
    electric: "#F8D030",
    ground: "#E0C068",
    psychic: "#F85888",
    rock: "#B8A038",
    ice: "#98D8D8",
    bug: "#A8B820",
    dragon: "#7038F8",  
    ghost: "#705898",
    dark: "#705848",
    steel: "#B8B8D0", 
    fairy: "#EE99AC"
  })
  const imageLink = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png';
  const pokeballimg = 'https://i.postimg.cc/25tpYM1w/pokebola.png';

  useEffect(() => {
    function getBackgroundColor() {
      const name = pokemonData?.types[0].type.name;

      setCurrentBgColor(bgColor[name]);


    }

    getBackgroundColor();
  }, [bgColor, pokemonData?.types])

  useEffect(() => {

  

    async function getPokemonData() {
      const { data } = await api.get<PokemonDataProps>(`${pokemonName?.name}`);



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
          <h2>{pokemonData?.name ? pokemonData.name : 'Bulbasaur'}</h2>
          <span>#{pokemonData?.id ? pokemonData.id : '1'}</span>
        </PokemonCardHeaderDetails>
        <PokemonCardHeaderTypes >
          {pokemonData?.types ? (
            pokemonData.types.map(data => (
              <span key={data.type.name}>{data.type.name}</span>
            ))) :
            <>
              <span>grass</span>
              <span>poison</span>
            </>
          }
        </PokemonCardHeaderTypes>

        <PokemonCardHeaderImage>
          <Image
            src={pokemonData?.sprites.other['official-artwork'].front_default ?
              pokemonData.sprites.other['official-artwork'].front_default : imageLink}
            alt={pokemonData?.name} width={350}
            height={350} />
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

            <ul>
              <li>HP: 45</li>
              <li>Attack: 49</li>
              <li>Defense: 49</li>
              <li>Special-attack: 65</li>
              <li>Special-defense: 45</li>
              <li>Speed: 45</li>
            </ul>
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
            <ul>
              <li>Overgrow</li>
              <li>Chlorophyll</li>
            </ul>
          }
        </PokemonCardBodyInfo>
      </PokemonCardBody>
    </PokemonCard>

  )
}
