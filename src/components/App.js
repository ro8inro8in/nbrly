import { useState, useEffect } from 'react';
import '../App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import { withRouter } from 'react-router';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NavBar from './NavBar';
import SideBar from './SideBar';
import 'firebase/auth';
// import { LocalConvenienceStoreOutlined } from "@material-ui/icons";
// import { app, db } from "../configFirebase.js";
import { AuthProvider } from '../contexts/AuthContext';
import { useAuth } from '../contexts/AuthContext';
import {
  getMatchedUsers,
  calculateDistance,
  sortByDistance,
} from '../helpers/getSearchResults';
import useLocalStorage from '../customHooks/useLocalStorage';

const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState();
  const [geolocation, setGeolocation] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState();
  const [orderedMatches, setOrderedMatches] = useLocalStorage(
    'orderedMatches',
    []
  );
  const history = useHistory();
  const { currentUser, logout } = useAuth();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const getSearchResults = async (activity) => {
    if (!geolocation) {
      alert('Sorry, something went wrong. Please refresh your browser.');
      return;
    }
    const userList = await getMatchedUsers(activity);
    const listWithoutCurrentUser = userList.filter((user) => user.uid !== currentUser.uid)
    const userDistance = calculateDistance(geolocation, listWithoutCurrentUser);
    const sortedMatches = sortByDistance(userDistance);
    setOrderedMatches(sortedMatches);
  };



  const handleLogout = async () => {
    setError('');
    window.localStorage.clear();
    setOrderedMatches([])
    try {
      await logout();

      history.push('/');
    } catch {
      setError('Failed to log out');
    }
  };

  const updateLocation = () => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then(function (result) {
          if (result.state === 'granted') {
            // console.log(result.state);//
            navigator.geolocation.getCurrentPosition((position) => {
              setGeolocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
            });
          } else if (result.state === 'prompt') {
            //console.log(result.state);
            alert(
              'NBRLY needs your location to work. Please update your browser preferences.'
            );
          } else if (result.state === 'denied') {
            //console.log(result.state);
            alert(
              'NBRLY needs your location to work. Please update your browser preferences.'
            );
          }
        });
    } else {
      alert('Sorry, your browser is not compatible with NBRLY.');
    }
  };

  useEffect(() => {
    updateLocation();
  }, []);

  return (
    <div className="App">
      <AuthProvider>
        {currentUser && (
          <SideBar
            isOpen={isOpen}
            toggle={toggle}
            handleLogout={handleLogout}
            currentUserUid={currentUser.uid}
          />
        )}
        {currentUser && (
          <NavBar
            toggle={toggle}
            handleLogout={handleLogout}
            currentUserUid={currentUser.uid}
          />
        )}
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/Home">
            <Home
              geolocation={geolocation}
              updateLocation={updateLocation}
              getSearchResults={getSearchResults}
              orderedMatches={orderedMatches}
            />
          </Route>
          <Route exact path="/Profile/:userID">
            <Profile
              geolocation={geolocation}
              updateLocation={updateLocation}
              orderedMatches={orderedMatches}
            />
          </Route>
          <Route exact path="/Signup">
            <Signup geolocation={geolocation} updateLocation={updateLocation} />
            {/* logIn={logIn} */}
          </Route>
        </Switch>

        <Footer />
      </AuthProvider>
    </div>
  );
};

export default withRouter(App);
