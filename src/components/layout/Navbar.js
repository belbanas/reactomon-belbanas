import React, { useContext } from "react";
import styled from "styled-components";
import { PokemonContext } from "../PokemonContext";
import { Link } from "react-router-dom";

const NavbarDiv = styled.div`
    background: #fff;
    border-radius: 1rem;
    border: 1px solid;
    padding: 1rem;
`;

const Link2 = styled.a`
    text-decoration: none;
    padding: 1rem;
    color: #333;
`;

const Navbar = (props) => {
    const [pokemons, setPokemons] = useContext(PokemonContext);

    return (
        <NavbarDiv className="navbar">
            <Link to="/">Home</Link>|<Link to="/pokemons">Pokemons</Link>|
            <Link to="/types">Types</Link>|
            <Link to="/catched">Catched Pokemons: {pokemons.length}</Link>
        </NavbarDiv>
    );
};

export default Navbar;
