import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import Header from "./components/layout/Header";
import Welcome from "./components/layout/Welcome";
import PokemonDetail from "./components/PokemonDetail";

class App extends Component {
    state = {
        pokemons: [],
        types: []
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
            <Router>
                <div className="App" style={appStyle}>
                    <Header />
                    <div className="contents" style={contentsStyle}>
                        <Route exact path="/" component={Welcome} />
                        <Route path="/pokemons">
                            <PokemonList pokemons={this.state.pokemons} />
                        </Route>
                        <Route path="/types">
                            <TypeList types={this.state.types} />
                        </Route>
                        <Route path="/pokemon/:id" >
                            <PokemonDetail />
                        </Route>
                    </div>
                </div>
            </Router>
        );
    }
}

const appStyle = {
    background: "#adddd7",
};

const contentsStyle = {
    background: "#fff",
    margin: "auto 20rem auto 20rem",
    borderRadius: "1rem",
    padding: "2rem",
    minHeight: "100vh",
};

export default App;
