import React, { Component } from "react";
import PokemonItem from "./PokemonItem";

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
            <h1 style={{ textAlign: "center" }}>Pokemons</h1>
            <div style={pokemonContainerStyle}>{getPokemons()}</div>
        </React.Fragment>
    );
};

const pokemonContainerStyle = {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
};

export default PokemonList;
