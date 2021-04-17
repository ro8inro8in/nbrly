import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { withRouter } from 'react-router';

const Nav = styled.nav`
background: #CFCFCF;
width: 100%;
height: 50px:
margin-top -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
//border: 1px solid blue;
@media screen and (max-width: 960px) {
  transition: 0.8s all ease;
}
`;

const Banner = styled.div`
  display: flex;
  justify-content: left;
  width: 50%;
`;
const NavLogo = styled.div`
  color: white;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;
const ImgIcon = styled.div`
  display: flex;
  justify-content: center;
  width: 51px;
  height: 61px;
  @media screen and (max-width: 960px) {
    left: 300px;
  }
  @media screen and (max-width: 460px) {
    left: 160px;
  }
`;
const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 40%);
    font-size: 1.4rem;
    cursor: pointer;
    color: white;
  }
`;
const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;
const NavItem = styled.li`
  height: 80px;
  //border: 1px solid red;
`;
const NavLinks = styled(Link)`
  color: white;
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  height: 115%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid red;
  }
`;

const LogoutLink = styled.a`
  color: white;
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  height: 115%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid red;
  }
`;

const Navbar = ({ toggle, handleLogout, currentUserUid }) => {
  
  return (
    <>
      <Nav>
        <Banner>
          <Link to="/">
          <ImgIcon>
            <img src="../images/Mess3.png" alt="navbar-logo" />
          </ImgIcon>
          </Link>
          <Link to="/" style={{ textDecoration: "none"}}>
          <NavLogo>NBRLY</NavLogo>
          </Link>
        </Banner>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="/Home" style={{ textDecoration: "none"}}>Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to={`/Profile/${currentUserUid}`} style={{ textDecoration: "none"}}>My Profile</NavLinks>
          </NavItem>
          <NavItem>
            <LogoutLink onClick={handleLogout} style={{ textDecoration: "none"}}>Logout</LogoutLink>
          </NavItem>
        </NavMenu>
      </Nav>
    </>
  );
};
export default withRouter(Navbar);
