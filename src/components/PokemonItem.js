import React, { Component } from 'react'

export class PokemonItem extends Component {
    render() {
        return (
            <div>
                <p>
                    {this.props.name}
                    {this.props.key}
                </p>
            </div>
        )
    }
}

export default PokemonItem
