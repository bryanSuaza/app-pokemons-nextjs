
import {  Grid } from '@nextui-org/react';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import Layout from '../../components/layouts/Layout';
import pokeApi from '../../core/api/pokeApi';
import { Pokemon } from '../../interfaces/pokemon-full';
import { PokemonResponse, Result, ResultPokes } from '../../interfaces/pokemon-list';
import PokemonCard from '../../components/pokemon/PokemonCard';
import GridsListPokemons from '../../components/pokemon/GridsListPokemons';
import { getPokemonInfo } from '../../utils/getPokemonInfo';

interface Props {
    pokemons: Result[];
    pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemons, pokemon }) => {

    return (
        <Layout title={pokemon.name}>

            <GridsListPokemons pokemon={pokemon}/>

            <Grid.Container gap={2} justify='flex-start'>
                {
                    pokemons.map(({ id, name, img }) => (
                        <PokemonCard key={id} id={id} name={name} img={img} />
                    ))
                }
            </Grid.Container>
        </Layout>
    )
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const { data } = await pokeApi.get<PokemonResponse>(`/pokemon?limit=151`);

    const pokemons: ResultPokes[] = data.results.map((poke, i) => ({
        ...poke,
        id: `${i + 1}`,
    }))

    const paths = pokemons.map((pokes) => ({
        params: { id: pokes.id },
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as { id: string };

    const pokemon = await getPokemonInfo(id);

    const { data } = await pokeApi.get<PokemonResponse>('/pokemon?limit=151');

    const pokemons: Result[] = data.results.map((poke, i) => ({
        ...poke,
        id: i + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`,
    }))

    return {
        props: {
            pokemon,
            pokemons
        }
    }
}


export default PokemonPage
