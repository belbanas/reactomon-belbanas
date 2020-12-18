import React, { Component } from "react";
import TypeItem from "./TypeItem";

export class TypeList extends Component {
    getTypes = () => (
        this.props.types.map((type) => (
            <TypeItem key={type.url} name={type.name} />
        ))
    );

    render() {
        return <div style={typesContainerStyle}>
            <h1>Type List</h1><br></br>
            {this.getTypes()}
        </div>
    };
}

const typesContainerStyle = {
    background: "#fff",
    margin: "auto 20rem auto 20rem",
    borderRadius: "1rem",
    padding: "2rem",
    textAlign: "center",
};

export default TypeList;
