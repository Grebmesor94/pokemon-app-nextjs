import { useEffect } from "react"

export const toggleFavorite = ( id: number ) => { 

  let favoritePokemons: number[] = JSON.parse( localStorage.getItem( 'favorites' ) || '[]' )

  favoritePokemons.includes( id ) 
    ? favoritePokemons = favoritePokemons.filter( pokemonId => pokemonId !== id )
    : favoritePokemons.push( id )
  
  localStorage.setItem( 'favorites', JSON.stringify( favoritePokemons ) )
  
}

export const isPokemonInFavorites = ( id: number ): boolean => { 

  if( typeof window === 'undefined' ) return false;

  let favoritePokemons: number[] = JSON.parse( localStorage.getItem( 'favorites' ) || '[]' )
  return favoritePokemons.includes( id )
  
}

export const getPokemonsFromStorage = (): number[] => { 

  return JSON.parse( localStorage.getItem('favorites') || '[]' )
  
}