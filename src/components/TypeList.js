import React from "react";
import TypeItem from "./TypeItem";
import styled from "styled-components";

const PageTitle = styled.h1`
    text-align: center;
`;

const PokemonTypes = styled.div`
    text-align: center;
    margin-top: 2rem;
`;

const TypeList = (props) => {
    const getTypes = () =>
        props.types.map((type) => <TypeItem key={type.url} name={type.name} />);

    return (
        <React.Fragment>
            <PageTitle>Type List</PageTitle>
            <PokemonTypes>{getTypes()}</PokemonTypes>
        </React.Fragment>
    );
};

export default TypeList;
