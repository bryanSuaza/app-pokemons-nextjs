import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { PokemonResponse } from '../../interfaces/pokemon-list';
import { Pokemon } from '../../interfaces/pokemon-full';
import pokeApi from '../../core/api/pokeApi';
import Layout from '../../components/layouts/Layout';
import GridsListPokemons from '../../components/pokemon/GridsListPokemons';
import { getPokemonInfo } from '../../utils/getPokemonInfo';

interface Props {
    pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
    return (
        <Layout title={pokemon.name}>
            <GridsListPokemons pokemon={pokemon} />
        </Layout>
    )

};

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const { data } = await pokeApi.get<PokemonResponse>(`/pokemon?limit=151`);

    const pokemons: string[] = data.results.map(poke => poke.name);

    const paths = pokemons.map(name => ({
        params: { name }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { name } = params as { name: string }

    const pokemon = await getPokemonInfo(name);

    return {
        props: {
            pokemon
        }
    }
}

export default PokemonByNamePage

