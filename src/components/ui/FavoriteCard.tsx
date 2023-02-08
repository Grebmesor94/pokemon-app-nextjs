import { Grid, Card } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React from 'react'

interface Props { 
  favoritePokemons: number[]
}

export const FavoriteCard = ({ favoritePokemons }: Props ) => {

  const router = useRouter()
  
  const onPress = ( id: number ) => { 
    router.push(`/pokemon/${ id }`)
  }
  
  return (
    <Grid.Container gap={ 2 } direction='row' justify='flex-start' >
      {
        favoritePokemons?.map( id => (
          <Grid
            
            key={ `${ id }` }
            xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 }
          >
            <Card isHoverable 
              isPressable 
              css={{ padding: 10 }}
              onPress={ () => onPress( id ) }
            >
              <Card.Image 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ id }.svg`}
                width='100%'
                height={ 140 }
              />
            </Card>
          </Grid>
        ))
      }
    </Grid.Container>
  )
}
