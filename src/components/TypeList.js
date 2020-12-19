import React, { Component } from "react";
import TypeItem from "./TypeItem";

export class TypeList extends Component {
    getTypes = () => (
        this.props.types.map((type) => (
            <TypeItem key={type.url} name={type.name} />
        ))
    );

    render() {
        return <React.Fragment>
            <h1 style={{textAlign: 'center'}}>Type List</h1>
            <ol>
                {this.getTypes()}
            </ol>
        </React.Fragment>
    };
}

export default TypeList;
