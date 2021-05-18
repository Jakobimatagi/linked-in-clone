import React, { useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Login from "./components/Login"
import Widgets from './components/Widgets'

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth){
        //user logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        //user logged out
        dispatch(logout())
      }
    })
  }, [])
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {!user ? (<Login />) : (
        
      <div className="app__body">
        {/* App Body */}

        {/* Side Bar */}
        <Sidebar />

        {/* Feed */}
        <Feed />
        
        {/* Widgets */}
        <Widgets />
        
      </div>
      )}

      
       
    </div>
  );
}

export default App;
