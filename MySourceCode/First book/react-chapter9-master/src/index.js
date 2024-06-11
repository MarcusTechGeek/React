import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtTdM1z66niA-v3ci7XyOUXPgJXyvtCKA",
  authDomain: "reactdbmarcus-gouws.firebaseapp.com",
  databaseURL: "https://reactdbmarcus-gouws-default-rtdb.firebaseio.com/",
  projectId: "reactdbmarcus-gouws",
  storageBucket: "reactdbmarcus-gouws.appspot.com",
  messagingSenderId: "425087212859",
  appId: "1:425087212859:web:122ca112031337888feb1e",
  measurementId: "G-CXRLRWD6XV"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
