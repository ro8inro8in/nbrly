import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import DropDown from "../DropDown";

const TitleHomeWrap= styled.div`

height: 80px:
margin-top -80px;
padding-top: 80px;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 960px) {
  transition: 0.8s all ease;
}
`;

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <TitleHomeWrap>
      <h2>What do you want to do today?</h2>
      </TitleHomeWrap>
      <DropDown />
    </>
  );
};

export default Home;
