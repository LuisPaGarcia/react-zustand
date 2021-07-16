const FLYING_POKE = 'https://pokeapi.co/api/v2/type/3'
export const getPokemon = () => {
  return fetch(FLYING_POKE)
}
