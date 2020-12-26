import React from "react";
import styled from "styled-components";

const NavbarDiv = styled.div`
    background: #fff;
    border-radius: 1rem;
    border: 1px solid;
    padding: 1rem;
`;

const Link = styled.a`
    text-decoration: none;
    padding: 1rem;
    color: #333;
`;

const Navbar = (props) => {
    return (
        <NavbarDiv className="navbar">
            <Link href="/">Home</Link>|<Link href="/pokemons">Pokemons</Link>|
            <Link href="/types">Types</Link>
        </NavbarDiv>
    );
};

export default Navbar;
