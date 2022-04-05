import Head from 'next/head';
import { useState } from 'react';
import { Card } from '../components/Card';
import { ListCard } from '../components/ListCard';
import { ContentContainer } from './styles';



interface IPokemonNameProps {
  name: string;
}


export default function Home() {
  const [pokemonName, setPokemonName] = useState<IPokemonNameProps>();


  async function handleAddPokemonData(value: IPokemonNameProps) {
    setPokemonName(value);

  }

  return (
    <>
      <Head>
        <title> Home | Pokédex</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <ContentContainer>
        <Card pokemonName={pokemonName} />
        <ListCard handleAddPokemonData={setPokemonName} />
      </ContentContainer>

    </>
  )
}