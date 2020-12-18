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
                <PokemonList pokemons={this.state.pokemons} />
                <TypeList types={this.state.types} />
            </div>
        );
    }
}

const appStyle = {
    background: "gray",
};

export default App;
