import { useState } from 'react';

import { GetStaticPaths } from 'next'
import { Button, Card, Container, Grid, Text } from '@nextui-org/react';
import Image from 'next/image';

import { Layout } from '@/components/layouts/Layout'
import { GetStaticProps } from 'next';
import pokeApi from '@/api/pokeApi';
import { Pokemon } from '../../interfaces';
import { fire, getPokemonInfo, isPokemonInFavorites, toggleFavorite } from '../../helpers';
import { PokemonPageInfo } from '../../interfaces';



interface Props { 
  pokemon: PokemonPageInfo
}



const PokemonPage = ({ pokemon }: Props) => {

  const [isInFavorites, setIsInFavorites] = useState( isPokemonInFavorites( pokemon.id ) )

  const onToggleFavorite = () => { 
    toggleFavorite( pokemon.id )
    setIsInFavorites( !isInFavorites )

    if( isInFavorites ) return;
    
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
    
  }
  
  
  return (
    <Layout title={ pokemon.name }>
      <Grid.Container css={{ marginTop: '5px' }} gap={ 2 }>

        <Grid xs={ 12 } sm={ 4 } >
          <Card isHoverable css={{ padding: '30px' }}>
            <Card.Image 
              src={ pokemon.dreamWorld || '/no-image.png' }
              alt={ pokemon.name }
              width='100%'
              height={ 200 }
            />
          </Card>
        </Grid>

        <Grid xs={ 12 } sm={ 8 }>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform='capitalize'>{ pokemon.name }</Text>
              <Button 
                color='gradient'
                ghost={ !isInFavorites } 
                onPress={ onToggleFavorite }
              >
                { isInFavorites ? 'En favoritos' : 'Guardar en favoritos'}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={ 30 }>Sprites:</Text>
              <Container direction='row' justify='space-evenly' display='flex'>
                <Image 
                  src={ pokemon.frontDefault }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image 
                  src={ pokemon.backDefault }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image 
                  src={ pokemon.frontShiny }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image 
                  src={ pokemon.backShiny }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid> 

      </Grid.Container>
    </Layout>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemons151 = [...Array(151) ].map( (value, index) => `${ index + 1 }` )

  return {
    paths: pokemons151.map( id => ({ params: { id } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id: string };

  return {
    props: {
      pokemon: await getPokemonInfo( id )
    }
  }
}

export default PokemonPage;