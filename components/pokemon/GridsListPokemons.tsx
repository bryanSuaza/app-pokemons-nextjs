import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react'
import React, { useState } from 'react'
import { NextPage } from 'next';
import { Pokemon } from '../../interfaces/pokemon-full';
import { existInFavorites, toggleFavorite } from '../../utils/localFavorites';
import confetti from 'canvas-confetti';

interface Props {
    pokemon: Pokemon;
}

const GridsListPokemons: NextPage<Props> = ({pokemon}) => {
    
    const [isInFavorites, setInFavorites] = useState(existInFavorites(pokemon.id));

    const onToggleFavorite = () => {
        toggleFavorite(pokemon.id);
        setInFavorites(!isInFavorites);

        if (!isInFavorites) {
            return confetti({
                zIndex: 999,
                particleCount: 100,
                spread: 160,
                angle: -100,
                origin: {
                    x: 0.8,
                    y: 0.1,
                }
            })
        }
    }
  
    return (
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
          <Grid xs={12} sm={4}>
              <Card>

                  <Card.Body>
                      <Card.Image
                          src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                          alt={pokemon.name}
                          width="100%"
                          height={200}
                      />
                  </Card.Body>

              </Card>
          </Grid>

          <Grid xs={12} sm={8}>
              <Card>
                  <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Text h1 >{pokemon.name}</Text>
                      <Button
                          color="gradient"
                          ghost={!isInFavorites}
                          onPress={onToggleFavorite}
                      >
                          {isInFavorites ? 'En favoritos' : 'Guardar en favoritos'}
                      </Button>
                  </Card.Header>

                  <Card.Body>
                      <Text size={30}>Sprites:</Text>
                      <Container direction='row' display='flex' gap={0}>
                          <Image
                              src={pokemon.sprites.front_default}
                              alt={pokemon.name}
                              width={100}
                              height={100}
                          />
                          <Image
                              src={pokemon.sprites.back_default}
                              alt={pokemon.name}
                              width={100}
                              height={100}
                          />
                          <Image
                              src={pokemon.sprites.front_shiny}
                              alt={pokemon.name}
                              width={100}
                              height={100}
                          />
                          <Image
                              src={pokemon.sprites.back_shiny}
                              alt={pokemon.name}
                              width={100}
                              height={100}
                          />
                      </Container>
                  </Card.Body>

              </Card>
          </Grid>

      </Grid.Container>
  )
}

export default GridsListPokemons
