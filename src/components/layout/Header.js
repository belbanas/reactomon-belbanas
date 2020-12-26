import React from "react";
import Navbar from "./Navbar";
import logo from "./pokemon_logo.png";
import styled from "styled-components";

const HeaderHeader = styled.header`
    text-align: center;
    margin: auto 20rem auto 20rem;
`;

const Title = styled.div`
    background: #fff;
    border-radius: 1rem;
    padding: 1rem;
`;

const Image = styled.img`
    max-height: 8rem;
`;

const Header = (props) => {
    return (
        <HeaderHeader>
            <Title>
                <Image src={logo} alt="logo" />
                <h1>Reactomon</h1>
            </Title>
            <Navbar />
        </HeaderHeader>
    );
};

export default Header;
