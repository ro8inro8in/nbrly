import { useState, useEffect } from 'react';
import '../App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NavBar from './NavBar';
import SideBar from './SideBar';
import 'firebase/auth';
import { LocalConvenienceStoreOutlined } from '@material-ui/icons';
import { firebaseApp, db } from '../firebase.js';


const App = ({ history }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState();
  const [geolocation, setGeolocation] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("")

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = (email, password) => {
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCred) => {
        localStorage.setItem('token', userCred.user.refreshToken);
        history.push('/Home');
      })
      .catch((error) => console.log(error));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/');
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(error)
      console.log(position.coords.latitude);
      setError("No Location please check browser location settings");
      setGeolocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, [error]);

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
