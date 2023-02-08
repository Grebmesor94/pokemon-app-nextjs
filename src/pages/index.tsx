import { GetStaticProps } from 'next'
import pokeApi from '@/api/pokeApi';
import { PokemonListResponse, PokemonSchema } from '@/interfaces';
import type { NextPage } from 'next'
import { Layout } from '@/components/layouts/Layout';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { PokemonCard } from '@/components/ui';

interface Props { 
  pokemons: PokemonSchema[]
}


const HomePage: NextPage<Props> = ({ pokemons }) => {

  return (
    <Layout title='Pokemons list' >
      <Grid.Container gap={ 2 } justify='space-evenly' >
        {
          pokemons.map( pokemon => (
            <PokemonCard pokemon={ pokemon } key={ pokemon.id } />
          ))
        }
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>( '/pokemon?limit=151' )

  const pokemons = data.results.map(( pokemon, index ) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ index + 1 }.svg`
  }))

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;
