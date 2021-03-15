import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";

const Nav = styled.nav`
background: #CFCFCF;
height: 80px:
margin-top -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px) {
  transition: 0.8s all ease;
}
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

const NavLogo = styled.div`
  color: white;
  justify-self: center;
  cursor: arrow;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

const MobileIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 40%);
  font-size: 1.8rem;
  cursor: pointer;
  color: white;
`;


const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo>NBRLY</NavLogo>
          <NavLogo img src="../images/Mess3.png" alt="navbar-logo" />
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
        </NavContainer>
      </Nav>
    </>
  );
};
export default Navbar;
