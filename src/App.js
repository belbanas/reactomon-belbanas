import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import Header from "./components/layout/Header";
import Welcome from "./components/layout/Welcome";
import PokemonDetail from "./components/PokemonDetail";

const App = (props) => {
    const [pokemons, setPokemons] = useState([]);
    const [types, setTypes] = useState([]);

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon")
            .then((response) => setPokemons(response.data.results));
        axios
            .get("https://pokeapi.co/api/v2/type")
            .then((response) => setTypes(response.data.results));
    }, []);

    return (
        <Router>
            <div className="App" style={appStyle}>
                <Header />
                <div className="contents" style={contentsStyle}>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/pokemons">
                        <PokemonList pokemons={pokemons} />
                    </Route>
                    <Route path="/types">
                        <TypeList types={types} />
                    </Route>
                    <Route path="/pokemon/:id">
                        <PokemonDetail />
                    </Route>
                </div>
            </div>
        </Router>
    );
};

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
