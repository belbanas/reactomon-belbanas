import React from "react";
import Navbar from "./Navbar";
import logo from "./pokemon_logo.png";

const Header = (props) => {
    return (
        <header style={headerStyle}>
            <div style={titleStyle}>
                <img src={logo} alt="logo" style={{ maxHeight: "8rem" }} />
                <h1>Reactomon</h1>
            </div>
            <Navbar />
        </header>
    );
};

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
