import React from "react";
import styled from "styled-components";

const PokemonTypes = styled.p`
    padding: 1rem;
    text-transform: capitalize;
`;

const TypeItem = (props) => {
    return <PokemonTypes>{props.name}</PokemonTypes>;
};

export default TypeItem;
