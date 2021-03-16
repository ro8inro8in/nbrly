import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

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
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  position: absolute;
  width: 186px;
  height: 36px;
  left: 706px;
  top: 13px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;
const ImgIcon = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 81px;
  height: 91px;
  left: 645px;
  top: 0px;

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
          <ImgIcon>
            <img src="../images/Mess3.png" alt="navbar-logo" />
          </ImgIcon>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
        </NavContainer>
      </Nav>
    </>
  );
};
export default Navbar;
