import { Layout } from '@/components/layouts/Layout'
import { NoFavorites, FavoriteCard } from '@/components/ui'
import { getPokemonsFromStorage } from '@/helpers/storageFavorites'
import { Card, Grid } from '@nextui-org/react'
import React, { useState, useEffect } from 'react'


const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState< number[] >()

  useEffect(() => {
    setFavoritePokemons( getPokemonsFromStorage() )
  }, [])
  
  
  return (
    <Layout title='Favorites Pokemons'>
      {
        favoritePokemons?.length === 0
          ? <NoFavorites />
          : <FavoriteCard favoritePokemons={ favoritePokemons! } />
      }
    </Layout>
  )
}

export default FavoritesPage