import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7-TTepIf1iiRCOM10DG2OiPCRHEJX5PM",
  authDomain: "plantlife-project.firebaseapp.com",
  projectId: "plantlife-project",
  storageBucket: "plantlife-project.appspot.com",
  messagingSenderId: "317625183252",
  appId: "1:317625183252:web:58cc288ad234c646db8b01",
  measurementId: "G-8NWN2E2GLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
