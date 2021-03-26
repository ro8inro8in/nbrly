import { useState, useEffect } from "react";
import "../App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./Footer";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import "firebase/auth";
import { firebase, db } from "../index";

const App = ({ history }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState();
  const [geolocation, setGeolocation] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // does this belong here?
  const handleLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
       localStorage.setItem("token", "some-login-token");
       
        history.push("/Home");

       
      })
      .catch((error) => console.log(error));
  };
  // const logIn = () => {
  //   setIsLoggedIn(true);
  // };
  const handleLogout = () => {
    localStorage.removeItem("token");
    console.log(localStorage.getItem("token"));
    history.push("/");
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude);
      setGeolocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  return (
    <div className="App">
      <SideBar isOpen={isOpen} toggle={toggle} handleLogout={handleLogout} />
      <NavBar toggle={toggle} handleLogout={handleLogout} />
      <Switch>
        <Route exact path="/">
          <Login handleLogin={handleLogin} />
        </Route>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/Profile">
          <Profile />
        </Route>
        <Route exact path="/Signup">
          <Signup geolocation={geolocation} />
          {/* logIn={logIn} */}
        </Route>
      </Switch>

      <Footer />
    </div>
  );
};

export default withRouter(App);
