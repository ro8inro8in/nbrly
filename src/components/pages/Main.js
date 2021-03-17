import React, { useState } from "react";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import Home from "./Home";
import Profile from "./Profile";


const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Home />
      <Profile />
    
     
    </>
  );
};

export default Main;