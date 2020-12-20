import React from "react";

const TypeItem = (props) => {
    return (
        <p style={{ padding: "1rem", textTransform: "capitalize" }}>
            {props.name}
        </p>
    );
};

export default TypeItem;
