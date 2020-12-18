import "./App.css";
import React, { Component } from "react";
import PokemonList from "./components/PokemonList";
import axios from "axios";

class App extends Component {
  state = {
    pokemons: [
      {
        url: "valemi",
        name: "kukika"
      }
    ],
};

componentDidMount() {
    axios
        .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10")
        .then((response) => this.setState({ pokemons: response.data.results }));
}

    render() {
        return (
            <div className="App">
                <PokemonList pokemons={this.state.pokemons} />
            </div>
        );
    }
}

export default App;
