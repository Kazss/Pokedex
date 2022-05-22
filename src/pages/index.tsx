import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Card } from '../components/Card';
import { ListCard } from '../components/ListCard';
import { api } from '../services/api';
import { PokeurlImage } from '../utils/staticPoke';
import Switch from 'react-switch';
import styles from '../styles/home.module.scss';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';

interface IPokemonList {
  name: string;
  url: string;
  urlImage: string;
}[]

interface HomeProps {
  pokemonList: {
    name: string;
    url: string;
    urlImage: string;
  }[],
  toggleTheme(): void;
}


export default function Home({ pokemonList, toggleTheme }: HomeProps) {

  const { title } = useContext(ThemeContext);


  return (
    <>
      <Head>
        <title> Home | Pokédex</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <main className={styles.contentContainer}>
        <Card />
        <ListCard pokemonList={pokemonList} />
        <label>
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={'#005'}
            onColor={'#fff'}
          />
        </label>

      </main>

    </>
  )
}



export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('?offset=0&limit=151');

  const FilteringUrlPokemon: IPokemonList[] = data.results.map((resultsData: { name: string; url: string; urlImage: string; }) => {
    return {
      name: resultsData.name,
      url: resultsData.url.replace(/\/+$/, ''),
      urlImage: resultsData.urlImage,
    }
  })


  const filteredPokemonList: IPokemonList[] = FilteringUrlPokemon.map(resultsData => {
    return {
      name: resultsData.name,
      url: resultsData.url,
      urlImage: PokeurlImage + resultsData.url.substring(resultsData.url.lastIndexOf('/') + 1) + '.png'
    }
  })

  const pokemonList = filteredPokemonList;

  console.log(pokemonList)

  return {
    props: {
      pokemonList
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}