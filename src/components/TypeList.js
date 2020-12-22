import React from "react";
import TypeItem from "./TypeItem";

const TypeList = (props) => {
    const getTypes = () =>
        props.types.map((type) => <TypeItem key={type.url} name={type.name} />);

    return (
        <React.Fragment>
            <h1 style={{ textAlign: "center" }}>Type List</h1>
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
                {getTypes()}
            </div>
        </React.Fragment>
    );
};

export default TypeList;
