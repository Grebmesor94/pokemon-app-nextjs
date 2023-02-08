import { Container, Text, Image } from '@nextui-org/react'
import React from 'react'

export const NoFavorites = () => {
  return (
    <Container
      className='favorites-container'
    >
      <Text h1>No hay Favoritos</Text>
      <Image 
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg'
        alt='mewtwo'
        width={ 250 }
        height={ 250 }
        css={{ opacity: 0.2 }}
      />
    </Container>
  )
}
