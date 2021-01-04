import React, { useState, useContext } from "react";
import { PokemonContext } from "./PokemonContext";

const AddPokemon = (props) => {
    const [pokemons, setPokemons] = useContext(PokemonContext);

    const addPokemon = () => {
        console.log(props.name);
        setPokemons((prevPokemons) => [...prevPokemons, { name: props.name }]);
    };

    return (
        <button type="submit" onClick={addPokemon}>
            Catch!
        </button>
    );
};

export default AddPokemon;
