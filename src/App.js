import "./App.css";
import React, { Component } from "react";
import PokemonList from "./components/PokemonList";
import axios from "axios";

class App extends Component {
    state = {
        pokemons: [],
    };

    componentDidMount() {
        axios
            .get("https://pokeapi.co/api/v2/pokemon")
            .then((response) =>
                this.setState({ pokemons: response.data.results })
            );
    }

    render() {
        return (
            <div className="App" style={appStyle}>
                <div
                    className="pokemon-container"
                    style={pokemonContainerStyle}
                >
                    <PokemonList pokemons={this.state.pokemons} />
                </div>
            </div>
        );
    }
}

const appStyle = {
    display: "flex",
    justifyContent: "center",
    background: "gray",
};

const pokemonContainerStyle = {
    background: "#fff",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    margin: "auto 20rem auto 20rem",
    borderRadius: "1rem",
    padding: "2rem",
};

export default App;
