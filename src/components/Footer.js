import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

const FooterContainer = styled.div`
  padding-top: 5em;
  font-size: 0.8em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialLinks = styled.div`
  padding: 1em;
`;

const SocialIcon = styled.a`
  padding: 2em;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialIcon>
          <FacebookIcon />
        </SocialIcon>
        <SocialIcon>
          <TwitterIcon />
        </SocialIcon>
      </SocialLinks>

      <p>Copyright NBRLY 2021</p>
    </FooterContainer>
  );
};

export default Footer;
