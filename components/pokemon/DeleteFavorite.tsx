
import { Button, Card } from "@nextui-org/react";
import { PropsDeleteFavorite } from "../../interfaces/props";
import { pokemons, toggleFavorite } from "../../utils/localFavorites";

const DeleteFavorite = ({ setFavoritePokemons, id }: PropsDeleteFavorite) => {

    const deleteFavorite = (id:number) => {
        toggleFavorite(id);
        setFavoritePokemons(pokemons());
    }

  return (
      <Card.Header css={{ justifyContent: 'center' }}>

          <Button
              color={'gradient'}
              size={'sm'}
              onPress={()=>deleteFavorite(id)}
          >
              Quitar Favorito
          </Button>

      </Card.Header>
  )
}

export default DeleteFavorite
