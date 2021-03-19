import React, { useState } from "react";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import Home from "./Home";
import Profile from "./Profile";
import { Route, Switch } from "react-router-dom";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Profile">
          <Profile />
        </Route>
      </Switch>
    </>
  );
};

export default Main;
