import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";

class App extends Component {
    state = {
        pokemons: [],
        types: [],
    };

    componentDidMount() {
        axios
            .get("https://pokeapi.co/api/v2/pokemon")
            .then((response) =>
                this.setState({ pokemons: response.data.results })
            );
        axios
            .get("https://pokeapi.co/api/v2/type")
            .then((response) =>
                this.setState({ types: response.data.results })
            );
    }

    render() {
        return (
            <div className="App" style={appStyle}>
                <div className="contents" style={contentsStyle}>
                    <PokemonList pokemons={this.state.pokemons} />
                    <TypeList types={this.state.types} />
                </div>
            </div>
        );
    }
}

const appStyle = {
    background: "gray",
};

const contentsStyle = {
    background: "#fff",
    margin: "auto 20rem auto 20rem",
    borderRadius: "1rem",
    padding: "2rem",
    textAlign: "center",
}

export default App;
