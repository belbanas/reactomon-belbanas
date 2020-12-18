import React, { Component } from "react";
import PokemonItem from "./PokemonItem";

export class PokemonList extends Component {
    getPokemons = () => (
        this.props.pokemons.map((pokemon) => (
            <PokemonItem key={pokemon.url} name={pokemon.name} url={pokemon.url} />
        ))
    )

    render() {
        return <div style={contentsStyle}>
            <h1>Pokemons</h1>
            <div style={pokemonContainerStyle}>
            {this.getPokemons()}
            </div>
            </div>
    }
}

const pokemonContainerStyle = {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
};

const contentsStyle = {
    background: "#fff",
    margin: "auto 20rem auto 20rem",
    borderRadius: "1rem",
    padding: "2rem",
    textAlign: "center",
}

export default PokemonList;
