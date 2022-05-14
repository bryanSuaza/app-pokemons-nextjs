
import { useEffect, useState } from 'react';
import Layout from "../../components/layouts/Layout"
import NoFavorites from "../../components/ui/NoFavorites"
import { pokemons } from "../../utils/localFavorites";
import FavoritesPokemons from "../../components/pokemon/FavoritesPokemons";

const Favoritos = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(()=>{
    setFavoritePokemons(pokemons());
  },[])

  return (
    <Layout title='favoritos'>

      {
        favoritePokemons.length === 0 
        ? ( <NoFavorites /> )
        : (
            <FavoritesPokemons setFavoritePokemons={setFavoritePokemons} favoritePokemons={favoritePokemons} />
        )
      }

    </Layout>

  )
}

export default Favoritos
