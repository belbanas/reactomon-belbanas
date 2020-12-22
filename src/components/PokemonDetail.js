import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PokemonDetail = (props) => {
    const [state, setState] = useState({
        name: null,
        picture: null,
        height: null,
        weight: null,
        hp: null,
        attack: null,
        defense: null,
        specialAttack: null,
        specialDefense: null,
        speed: null,
    });

    const { id } = useParams();

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/" + id).then((response) =>
            setState({
                name: response.data.name,
                picture:
                    response.data.sprites.other["official-artwork"]
                        .front_default,
                height: response.data.height,
                weight: response.data.weight,
                hp: response.data.stats[0].base_stat,
                attack: response.data.stats[1].base_stat,
                defense: response.data.stats[2].base_stat,
                specialAttack: response.data.stats[3].base_stat,
                specialDefense: response.data.stats[4].base_stat,
                speed: response.data.stats[5].base_stat,
            })
        );
    }, [id]);

    if (state.name === null) {
        return (
            <React.Fragment>
                <h1 style={{ textAlign: "center" }}>Loading...</h1>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                    Profile
                </h1>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "row",
                        justifyContent: "center",
                    }}
                >
                    <img
                        src={state.picture}
                        alt="Official-Artwork"
                        style={{ maxWidth: "50%" }}
                    />
                    <div className="stats">
                        <h3
                            style={{
                                padding: "1rem 0 1rem 1rem",
                                textTransform: "capitalize",
                            }}
                        >
                            Name: {state.name}
                        </h3>
                        <p style={paragraphStyle}>Height: {state.height} </p>
                        <p style={paragraphStyle}>Weight {state.weight} </p>
                        <p style={paragraphStyle}>HP: {state.hp} </p>
                        <p style={paragraphStyle}>Attack: {state.attack} </p>
                        <p style={paragraphStyle}>Defense: {state.defense} </p>
                        <p style={paragraphStyle}>
                            Special Attack: {state.specialAttack}{" "}
                        </p>
                        <p style={paragraphStyle}>
                            Special Defense: {state.specialDefense}{" "}
                        </p>
                        <p style={paragraphStyle}>Speed: {state.speed} </p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};

const paragraphStyle = {
    padding: "0.5rem 0rem 0.5rem 1rem",
};

export default PokemonDetail;
