import { Result } from './pokemon-list';
import { Dispatch, SetStateAction } from 'react';

export interface Props {
    pokemons: Result [];
}

export interface PropsCard {
  id: number;
  name: string;
  img: string;
}

export interface PropsFavorites {
  setFavoritePokemons: Dispatch<SetStateAction<number[]>>;
  favoritePokemons: number[];
}

export interface PropsState {
  showBtn: boolean;
  cardId: number;
}

export interface PropsDeleteFavorite {
  setFavoritePokemons: Dispatch<SetStateAction<number[]>>;
  id: number;
}

