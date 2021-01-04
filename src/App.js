import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import Header from "./components/layout/Header";
import Welcome from "./components/layout/Welcome";
import PokemonDetail from "./components/PokemonDetail";
import CatchedPokemons from "./components/CatchedPokemons";
import { PokemonProvider } from "./components/PokemonContext";

const lightTheme = {
    backgroundColor: "#adddd7",
};

const darkTheme = {
    backgroundColor: "black",
};

const Application = styled.div`
    background: ${(props) => props.theme.backgroundColor};
`;

const Contents = styled.div`
    background: #fff;
    margin: auto 20rem auto 20rem;
    border-radius: 1rem;
    padding: 2rem;
    min-height: 80vh;
`;

const App = () => {
    const [pokemons, setPokemons] = useState([]);
    const [types, setTypes] = useState([]);
    const [theme, setTheme] = useState("LightTheme");
    const [catchedPokemons, setCatchedPokemons] = useState([
        {
            name: "Proba1",
        },
        {
            name: "Proba2",
        },
        {
            name: "Proba3",
        },
    ]);

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon")
            .then((response) => setPokemons(response.data.results));
        axios
            .get("https://pokeapi.co/api/v2/type")
            .then((response) => setTypes(response.data.results));
    }, []);

    return (
        <ThemeProvider theme={theme === "DarkTheme" ? darkTheme : lightTheme}>
            <PokemonProvider catched={catchedPokemons}>
                <Router>
                    <Application className="app">
                        <Header />
                        <button
                            onClick={(e) =>
                                setTheme(
                                    theme === "DarkTheme"
                                        ? "LightTheme"
                                        : "DarkTheme"
                                )}>
                            ToggleTheme
                        </button>
                        <Contents className="contents">
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
                            <Route path="/catched">
                                <CatchedPokemons />
                            </Route>
                        </Contents>
                    </Application>
                </Router>
            </PokemonProvider>
        </ThemeProvider>
    );
};

export default App;
