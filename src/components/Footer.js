import React from 'react';
import styled from "styled-components";

const FooterContainer = styled.div` 
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2.5rem;    
    background-color: #CFCFCF;        
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p>If you get hunted with this app it is not our fault</p>
        </FooterContainer>
    )
}

export default Footer

