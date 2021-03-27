const firebase = require ('firebase/app');
require ('firebase/firestore');

const firebaseConfig = {
    apiKey: 'AIzaSyCCRhi9kXg1EzRPtLjJJa0rGcwisL0sXA0',
    authDomain: 'nbrly-e50b3.firebaseapp.com',
    projectId: 'nbrly-e50b3',
    storageBucket: 'nbrly-e50b3.appspot.com',
    messagingSenderId: '282284575217',
    appId: '1:282284575217:web:8e7aa9d60bb05e5bb8dc50',
    measurementId: 'G-C313EYFCQC',
  };

  const firebaseApp = firebase.default.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore()

  module.exports = {
    firebase, firebaseApp, db
  }