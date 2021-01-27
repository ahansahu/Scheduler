import firebase from 'firebase/app';

import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAK15H_sgiw4CaKkkHtuIoWHN9b7kkwJMU",
    authDomain: "scheduler-f4105.firebaseapp.com",
    databaseURL: "https://scheduler-f4105-default-rtdb.firebaseio.com",
    projectId: "scheduler-f4105",
    storageBucket: "scheduler-f4105.appspot.com",
    messagingSenderId: "636713938071",
    appId: "1:636713938071:web:bc5e0f1a580bb97e690dd2",
    measurementId: "G-K7XY643D5K"
  };
  

firebase.initializeApp(firebaseConfig);

export { firebase };