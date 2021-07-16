import create from 'zustand'
import { getPokemon } from '../NET/getPokemon'

export const usePokemonState = create((set) => ({
  loading: true,
  flyingPokemon: [],
  fetchPokemon: async () => {
    const response = await getPokemon()
    set({
      flyingPokemon: await response.json().then((poke) => poke.pokemon),
      loading: false,
    })
  },
}))
