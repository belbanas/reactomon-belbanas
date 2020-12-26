import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Stat = styled.p`
    padding: 0.5rem 0rem 0.5rem 1rem;
`;

const PokemonName = styled.h3`
    padding: 1rem 0 1rem 1rem;
    text-transform: capitalize;
`;

const PageTitle = styled.h1`
    text-align: center;
    margin-bottom: 2rem;
`;

const Card = styled.div`
    display: flex;
    flex-wrap: row;
    justify-content: center;
`;

const Image = styled.img`
    max-width: 50%;
`;

const Loading = styled.h1`
    text-align: center;
`;

const PokemonDetail = (props) => {
    const [state, setState] = useState({
        name: null,
        picture: null,
        height: null,
        weight: null,
        hp: null,
        attack: null,
        defense: null,
        specialAttack: null,
        specialDefense: null,
        speed: null,
    });

    const { id } = useParams();

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/" + id).then((response) =>
            setState({
                name: response.data.name,
                picture:
                    response.data.sprites.other["official-artwork"]
                        .front_default,
                height: response.data.height,
                weight: response.data.weight,
                hp: response.data.stats[0].base_stat,
                attack: response.data.stats[1].base_stat,
                defense: response.data.stats[2].base_stat,
                specialAttack: response.data.stats[3].base_stat,
                specialDefense: response.data.stats[4].base_stat,
                speed: response.data.stats[5].base_stat,
            })
        );
    }, [id]);

    if (state.name === null) {
        return (
            <React.Fragment>
                <Loading>Loading...</Loading>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <PageTitle>Profile</PageTitle>
                <Card>
                    <Image src={state.picture} alt="Official-Artwork" />
                    <div className="stats">
                        <PokemonName>Name: {state.name}</PokemonName>
                        <Stat>Height: {state.height} </Stat>
                        <Stat>Weight {state.weight} </Stat>
                        <Stat>HP: {state.hp} </Stat>
                        <Stat>Attack: {state.attack} </Stat>
                        <Stat>Defense: {state.defense} </Stat>
                        <Stat>Special Attack: {state.specialAttack} </Stat>
                        <Stat>Special Defense: {state.specialDefense} </Stat>
                        <Stat>Speed: {state.speed} </Stat>
                    </div>
                </Card>
            </React.Fragment>
        );
    }
};

export default PokemonDetail;
