import { useState, useEffect } from "react";
import "../App.css";
import { Route, Switch,Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import Footer from "./Footer";
import "firebase/auth";
import { firebase, db } from "../index";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [geolocation, setGeolocation] = useState();

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // does this belong here?
  const handleLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setIsLoggedIn(true);
        return <Redirect to="/home" />;
      })
      .catch((error) => console.log(error));
  };
  const logIn = () => {
    setIsLoggedIn(true);
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
      <Switch>
        <Route exact path="/">
          <Login handleLogin={handleLogin} />
        </Route>
        <Route exact path="/Signup">
          <Signup geolocation={geolocation} logIn={logIn} />
        </Route>
        <Route exact path="/Main">
          <Main />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
