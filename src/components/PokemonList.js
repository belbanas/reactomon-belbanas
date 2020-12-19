import React, { Component } from "react";
import PokemonItem from "./PokemonItem";

export class PokemonList extends Component {
    getPokemons = () =>
        this.props.pokemons.map((pokemon) => (
            <PokemonItem
                key={pokemon.url}
                name={pokemon.name}
                url={pokemon.url}
            />
        ));

    render() {
        return (
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>Pokemons</h1>
                <div style={pokemonContainerStyle}>{this.getPokemons()}</div>
            </React.Fragment>
        );
    }
}

const pokemonContainerStyle = {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
};

export default PokemonList;
