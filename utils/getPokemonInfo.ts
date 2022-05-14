import pokeApi from "../core/api/pokeApi";
import { Pokemon } from "../interfaces/pokemon-full";

const getPokemonInfo = async (nameOrId: string) => {

     const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };
}

export { getPokemonInfo };