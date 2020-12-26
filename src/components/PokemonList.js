import React from "react";
import PokemonItem from "./PokemonItem";
import styled from "styled-components";

const PokemonContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

const PageTitle = styled.h1`
    text-align: center;
`;

const PokemonList = (props) => {
    const getPokemons = () =>
        props.pokemons.map((pokemon) => (
            <PokemonItem
                key={pokemon.url}
                name={pokemon.name}
                url={pokemon.url}
            />
        ));

    return (
        <React.Fragment>
            <PageTitle>Pokemons</PageTitle>
            <PokemonContainer>{getPokemons()}</PokemonContainer>
        </React.Fragment>
    );
};

export default PokemonList;
