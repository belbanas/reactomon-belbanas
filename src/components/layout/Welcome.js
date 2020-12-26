import React from "react";
import styled from "styled-components";

const WelcomeDiv = styled.div`
    padding: 10rem;
    text-align: center;
`;
const Paragraph = styled.div`
    padding: 1rem;
`;

const Welcome = (props) => {
    return (
        <WelcomeDiv className="welcome">
            <h2>Welcome to my Reactomon page</h2>
            <Paragraph>Please choose from the menu above</Paragraph>
        </WelcomeDiv>
    );
};

export default Welcome;
