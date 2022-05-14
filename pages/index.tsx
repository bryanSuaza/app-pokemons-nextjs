import { Grid } from '@nextui-org/react'
import type { GetStaticProps, NextPage } from 'next'
import Layout from '../components/layouts/Layout'
import PokemonCard from '../components/pokemon/PokemonCard';
import pokeApi from '../core/api/pokeApi';
import { PokemonResponse, Result } from '../interfaces/pokemon-list';
import { Props } from '../interfaces/props';

const Home: NextPage<Props> = ({ pokemons }) => {

  return (
    <Layout title={'listado de pokemons'}>

      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map(({ id, name, img }) => (
            <PokemonCard key={id} id={id} name={name} img={img} />
          ))
        }
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {

  const { data } = await pokeApi.get<PokemonResponse>('/pokemon?limit=151');

  const pokemons: Result[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`,
  }))

  return {
    props: {
      pokemons
    }, // will be passed to the page component as props
  }
}

export default Home
