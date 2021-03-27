import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #cfcfcf;
  display: grid;
  align-items: center;
  top: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;
const CloseIcon = styled(FaTimes)`
  color: white;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SidebarWrapper = styled.div`
  color: red;
`;
const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 10px);
  text-align: center;

  @media screen and (max-width 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: white;
    font-weight: bold;
    cursor: pointer

    &:hover{
        color: #CFCFCF;
        transition: 0.2s ease-in-out;
    }
`;
const SideBar = ({ isOpen, toggle, handleLogout }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="/Home">Home</SidebarLink>
          </SidebarMenu>
          <SidebarMenu>
            <SidebarLink to="/Profile">Profile</SidebarLink>
          </SidebarMenu>
          <SidebarMenu>
            <SidebarLink onClick={handleLogout}>
              {/*change from router Link to normal to remove error "failed prop type" */}
              Logout
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default SideBar;
