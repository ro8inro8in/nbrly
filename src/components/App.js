import { useState, useEffect } from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './pages/Main';
// import Footer from "./Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('Latitude is :', position.coords.latitude);
      console.log('Longitude is :', position.coords.longitude);
    });
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? (
        <Main handleLogout={handleLogout} />
      ) : (
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/Signup">
            <Signup />
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
