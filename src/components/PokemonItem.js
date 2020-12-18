import React, { Component } from 'react'
import axios from "axios";

export class PokemonItem extends Component {
    state = {
        image: null
    }


    componentDidMount() {
        axios
            .get(this.props.url)
            .then(response => this.setState({ image: response.data.sprites.other.dream_world.front_default }))
    }


    render() {
        return (
            <div>
                <img src={this.state.image} alt="Pokemon's profile"/>
                <p>
                    {this.props.name}
                    {this.props.key}
                </p>
            </div>
        )
    }
}

export default PokemonItem
