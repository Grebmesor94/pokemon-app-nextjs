import pokeApi from "@/api/pokeApi"
import { Pokemon, PokemonPageInfo } from "@/interfaces"

export const getPokemonInfo = async( property: string ): Promise<PokemonPageInfo> => { 
  
  
  const { data } = await pokeApi.get<Pokemon>( `/pokemon/${ property }` )

  const pokemonPageInfo: PokemonPageInfo = {
    backDefault: data.sprites.back_default,
    backShiny: data.sprites.back_shiny,
    dreamWorld: data.sprites.other?.dream_world.front_default || '',
    frontDefault: data.sprites.front_default,
    frontShiny: data.sprites.front_shiny,
    id: data.id,
    name: data.name
  }

  return pokemonPageInfo
}