import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app';

firebase.initializeApp({
  apiKey: 'AIzaSyCCRhi9kXg1EzRPtLjJJa0rGcwisL0sXA0',
  authDomain: 'nbrly-e50b3.firebaseapp.com',
  projectId: 'nbrly-e50b3',
  storageBucket: 'nbrly-e50b3.appspot.com',
  messagingSenderId: '282284575217',
  appId: '1:282284575217:web:8e7aa9d60bb05e5bb8dc50',
  measurementId: 'G-C313EYFCQC',
});

console.log(firebase.apps[0].options);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
