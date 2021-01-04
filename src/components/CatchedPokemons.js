import React, { useState, useContext } from "react";
import { PokemonContext } from "./PokemonContext";

const CatchedPokemons = () => {
    const [pokemons, setPokemons] = useContext(PokemonContext);

    return (
        <div>
            {pokemons.map((pokemon) => (
                <li>
                    {pokemon.name}
                </li>
            ))}
        </div>
    );
};

export default CatchedPokemons;
