import React, { useContext, useEffect } from 'react'

import Signup from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import './App.css'
import 'firebase/compat/auth';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'
import { AuthContext,firebaseContext } from './context'
import Create from './components/Home/Create/Create';
import View from './components/Home/Viewpost/View';
import Post from './postContext';
function App () {
  console.log('innu naaadakum:',firebaseContext);
const {user,setUser} = useContext(AuthContext);
const {firebaseApp} = useContext(firebaseContext);

useEffect(()=>{
firebaseApp.auth().onAuthStateChanged((user)=>{
  setUser(user);
  console.log(user);
})
},[]);
  
  return (
  <Post>
    <Router>
      <Routes>
        <Route element={<Signup/>}  path='/signUp' />
        <Route element={<Login/>}  path='/login' />
        <Route element={<HomePage/>}  path='/' />
        <Route element={<Create/>}  path='/create' />
        <Route element={<View/>}  path='/view' />
      </Routes>
    </Router>
  </Post>
  )
}

export default App
