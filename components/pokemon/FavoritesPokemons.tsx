import { Card, Grid, Input } from "@nextui-org/react";
import { NextPage } from "next";
import { PropsFavorites, PropsState } from "../../interfaces/props";
import { useState } from 'react';
import DeleteFavorite from "./DeleteFavorite";
import { useRouter } from "next/router";

const FavoritesPokemons: NextPage<PropsFavorites> = ({ setFavoritePokemons, favoritePokemons }) => {


    const router = useRouter();

    const [{ showBtn, cardId }, setShowBtn] = useState<PropsState>({
        showBtn: false,
        cardId: 0
    });

    const showButton = (id: number) => {
        setShowBtn({
            showBtn: true,
            cardId: id
        });
    }

    const hideButton = (id: number) => {
        setShowBtn({
            showBtn: false,
            cardId: id
        });
    }

    const goFeatures = (id:number) => {
        router.push(`/pokemon/${id}`);
    }

    return (
        <Grid.Container gap={2} direction="row" justify='flex-start'>
            {
                favoritePokemons.map((id) => (
                    <Grid
                        key={id}
                        xs={6}
                        sm={3}
                        md={2}
                        xl={1}
                        onMouseEnter={() => showButton(id)}
                        onMouseLeave={() => hideButton(id)}
                        onClick={()=>goFeatures(id)}
                    >
                        <Card hoverable css={{ padding: 10 }}>

                            {
                                cardId === id
                                    ? showBtn ? (<DeleteFavorite setFavoritePokemons={setFavoritePokemons} id={id} />) : false
                                    : false
                            }

                            <Card.Image
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                                width={'100%'}
                                height={140}
                            />
                        </Card>
                    </Grid>
                ))
            }
        </Grid.Container>
    )
}

export default FavoritesPokemons
