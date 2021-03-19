import { useState } from "react";
import "../App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
// import Footer from "./Footer";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {isLoggedIn ? <Main /> :
      
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/Signup">
          <Signup />
        </Route>
      </Switch>
      }
    </div>
  );
}

export default App;
