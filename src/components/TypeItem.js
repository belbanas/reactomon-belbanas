import React, { Component } from "react";

export class TypeItem extends Component {
    capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    render() {
        return (
            <li style={{ padding: "1rem" }}>
                {this.capitalize(this.props.name)}
            </li>
        );
    }
}

export default TypeItem;
