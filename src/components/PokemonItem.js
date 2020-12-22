import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        <Link to={`pokemon/${id}`} style={linkStyle}>
            <div className="pokemon-item-container" style={containerStyle}>
                <img src={imageUrl} alt={name} style={pictureStyle} />
                <p style={{ margin: "0.5rem", textTransform: "capitalize" }}>
                    {name}
                </p>
            </div>
        </Link>
    );
};

const pictureStyle = {
    maxWidth: "150px",
    maxHeight: "150px",
};

const containerStyle = {
    background: "white",
    margin: "1rem",
    border: "1px solid",
    borderRadius: "2rem",
    textAlign: "center",
    width: "200px",
    height: "200px",
    padding: "1rem",
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-evenly",
};

const linkStyle = {
    textDecoration: "none",
    color: "#333",
};

export default PokemonItem;
