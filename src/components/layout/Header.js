import React, { Component } from "react";
import Navbar from "./Navbar";

export class Header extends Component {
    render() {
        return (
            <header style={headerStyle}>
                <h1 style={titleStyle}>Reactomon</h1>
                <Navbar />
            </header>
        );
    }
}

const headerStyle = {
    textAlign: "center",
    margin: "auto 20rem auto 20rem",
};

const titleStyle = {
    background: "white",
    borderRadius: "1rem",
    padding: "1rem",
};

export default Header;
