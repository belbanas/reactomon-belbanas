import React, { Component } from 'react';
import PokemonItem from "./PokemonItem";

export class PokemonList extends Component {
    render() {
        return this.props.pokemons.map(pokemon => (
            <PokemonItem key={pokemon.url} name={pokemon.name} url={pokemon.url}/>
        ))
    }
}

export default PokemonList
