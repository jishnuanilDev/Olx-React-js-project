
import React, { useContext, useState } from 'react';
import './SignUp.css'
import firebaseApp from '../../firebase/config';
import 'firebase/compat/auth';
import logo from '../../olx-logo.png'

import { firebaseContext } from '../../context';
import { useNavigate } from 'react-router-dom';

import Login from '../Login/Login';


export default function Signup() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const Navigate = useNavigate();
    const{firebaseApp} = useContext(firebaseContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .then(result => {
                result.user.updateProfile({ displayName: username });
                firebaseApp.firestore().collection('users').add({
                    id:result.user.uid,
                    name:username,
                    email:email,
                    phone:phone

                })
                console.log(result.user)
               Navigate('/login')
            })
            .catch(error => {
                // Handle error
                console.log(error);
            });
    };
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={logo} ></img>
        <form onSubmit={handleSubmit}>
          <label className='inputLabel' htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
           
          />
          <br />
          <label className='inputLabel' htmlFor="fname">Email</label>
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
          <label className='inputLabel' htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />
          <br />
          <label className='inputLabel' htmlFor="lname">Password</label>
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
          <button>Signup</button>
        </form>
        <a onClick={()=> Navigate('/login')}>Login</a>
      </div>
    </div>
  );
}