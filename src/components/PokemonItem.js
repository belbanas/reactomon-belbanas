import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class PokemonItem extends Component {
    state = {
        image: null,
        id: null
    };

    componentDidMount() {
        axios.get(this.props.url).then((response) =>
            this.setState({
                image: response.data.sprites.other.dream_world.front_default,
                id: response.data.id
            })
        );
    }

    capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    render() {
        return (
            <Link to={`pokemon/${this.state.id}`} style={linkStyle}>
                <div className="pokemon-item-container" style={containerStyle}>
                    <img
                        src={this.state.image}
                        alt={this.state.name}
                        style={pictureStyle}
                    />
                    <p style={{ margin: "0.5rem" }}>
                        {this.capitalize(this.props.name)}
                    </p>
                </div>
            </Link>
        );
    }
}

const pictureStyle = {
    maxWidth: "150px",
    maxHeight: "150px",
};

const containerStyle = {
    background: "white",
    margin: "1rem",
    border: "1px solid",
    borderRadius: "2rem",
    textAlign: "center",
    width: "200px",
    height: "200px",
    padding: "1rem",
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-evenly",
};

const linkStyle = {
    textDecoration: "none",
    color: "#333",
}

export default PokemonItem;
