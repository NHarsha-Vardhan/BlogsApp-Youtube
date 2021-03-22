import './App.css';
import firebase from "firebase";
import React from 'react';
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import Blogs from './Components/Blogs';
import { useSelector } from "react-redux";
import { selectSignedIn } from "./features/userSclice";
function App() {
 const isSignedIn = useSelector(selectSignedIn);
  return (
   <div className="app">
    <Navbar/>
     <Homepage />
     {isSignedIn && <Blogs/>}
    </div>
  );
}

export default App;
