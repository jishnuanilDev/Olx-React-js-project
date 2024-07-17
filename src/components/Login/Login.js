import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Login.css';
import { firebaseContext } from '../../context';
import firebaseApps from '../../firebase/config';
import Swal from 'sweetalert2'
function Login() {
  console.log('innu naaadakum:',firebaseContext);
const Navigate = useNavigate()
    const [email,setEmail] = useState('');
const [password,setPassword] = useState('');

const {firebaseApp} = useContext(firebaseContext)

const loginHandleSubmit = (e)=>{
    e.preventDefault();
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .then(result => {
 
        console.log('logged in')
Navigate('/')
    })
    .catch(err => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Incorrect Credentials",
            footer: ''
          });
   
        console.log('logged error')
    });
}
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={loginHandleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
    
        <a onClick={()=>Navigate('/signup')}>SignUp</a>
      </div>
    </div>
  );
}

export default Login;