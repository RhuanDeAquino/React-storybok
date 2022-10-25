import React from "react";

import styled from "styled-components";

const Button = styled.button`
    background-color: #9659FB;
    color: #FFF;
    padding: 15px 125px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    border: none;
    border-radius: 5px;
`;

export const LoginButton = () => {
    return(
        <Button>Clique</Button>
    );
};