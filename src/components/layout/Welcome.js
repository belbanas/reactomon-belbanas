import React from "react";

function Welcome() {
    return (
        <div className="welcome" style={welcomeStyle}>
            <h2>Welcome to my Reactomon page</h2>
            <p style={{ padding: "1rem" }}>Please choose from the menu above</p>
        </div>
    );
}

const welcomeStyle = {
    padding: "10rem",
    textAlign: "center",
};

export default Welcome;
