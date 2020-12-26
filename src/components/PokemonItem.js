import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import styled from "styled-components";

const Link = styled.a`
    text-decoration: none;
    color: #333;
`;

const Card = styled.div`
    background: white;
    margin: 1rem;
    border: 1px solid;
    border-radius: 2rem;
    text-align: center;
    width: 200px;
    height: 200px;
    padding: 1rem;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
`;

const Image = styled.img`
    max-width: 150px;
    max-height: 150px;
`;

const PokemonName = styled.p`
    margin: 0.5rem;
    text-transform: capitalize;
`;

const PokemonItem = (props) => {
    const [imageUrl, setImageUrl] = useState();
    const [id, setId] = useState();
    const name = props.name;

    useEffect(() => {
        axios.get(props.url).then((response) => {
            setImageUrl(response.data.sprites.other.dream_world.front_default);
            setId(response.data.id);
        });
    }, [props.url]);

    return (
        <Link href={`pokemon/${id}`}>
            <Card className="pokemon-item-container">
                <Image src={imageUrl} alt={name} />
                <PokemonName>{name}</PokemonName>
            </Card>
        </Link>
    );
};

export default PokemonItem;
