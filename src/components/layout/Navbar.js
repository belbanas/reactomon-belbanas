import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar" style={navbarStyle}>
                <Link to="/" style={linkStyle}>Home</Link>|
                <Link to="/pokemons" style={linkStyle}>Pokemons</Link>|
                <Link to="/types" style={linkStyle}>Types</Link>
            </div>
        );
    }
}

const navbarStyle = {
    background: "#fff",
    borderRadius: "1rem",
    border: "1px solid",
    padding: "1rem",
};

const linkStyle = {
    textDecoration: "none",
    padding: "1rem",
    color: "#333",
}

export default Navbar;