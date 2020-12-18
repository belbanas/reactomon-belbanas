import React, { Component } from "react";
import axios from "axios";

export class PokemonItem extends Component {
    state = {
        image: null,
    };

    componentDidMount() {
        axios
            .get(this.props.url)
            .then((response) =>
                this.setState({
                    image:
                        response.data.sprites.other.dream_world.front_default,
                })
            );
    }

    capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render() {
        return (
            <div className="pokemon-item-container" style={containerStyle}>
                <img src={this.state.image} alt="Pokemon's profile" style={{maxWidth: '150px', maxHeight: '150px' }} />
                <p style={{margin: '0.5rem'}}>
                    {this.capitalize(this.props.name)}
                </p>
            </div>
        );
    }
}

const containerStyle = {
    background: 'white',
    margin: "1rem",
    border: "1px solid",
    borderRadius: "2rem",
    textAlign: 'center',
    width: '200px',
    height: '200px',
    padding: '1rem',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-evenly'
};

export default PokemonItem;
