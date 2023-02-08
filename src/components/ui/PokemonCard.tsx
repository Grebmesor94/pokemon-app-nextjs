import { Grid, Card, Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router';
import React from 'react'
import { PokemonSchema } from '../../interfaces/pokemonListResponse';

interface Props { 
  pokemon: PokemonSchema
}

export const PokemonCard = ({ pokemon }: Props ) => {

  const router = useRouter()

  const handleClick = () => { 
    router.push(`/name/${ pokemon.name }`)
  }
  
  return (
    <Grid
      key={ pokemon.id }
      xs={ 6 }
      sm={ 3 }
      md={ 2 }
      xl={ 1.25 } 
    >
      <Card isHoverable isPressable onClick={ handleClick }>
        <Card.Body>
          <Card.Image
            src={ pokemon.img || '' }
            alt={ pokemon.name }
            width='100%'
            height={ 140 }
          />
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between'>
            <Text>{ pokemon.name }</Text>
            <Text>#{ pokemon.id }</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}
