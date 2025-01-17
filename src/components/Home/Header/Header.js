import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../../assets/OlxLogo';
import Search from '../../../assets/Search';
import Arrow from '../../../assets/Arrow';
import SellButton from '../../../assets/SellButton';
import SellButtonPlus from '../../../assets/SellButtonPlus';
import { useNavigate } from 'react-router-dom';
import { AuthContext, firebaseContext } from '../../../context';


function Header() {
    const {user} = useContext(AuthContext);
    const Navigate = useNavigate();
    const {firebaseApp} = useContext(firebaseContext);
  return (
    <div className="headerParentDiv"> 
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span onClick={()=>{
         if(!user){
            Navigate('/login')
         }
           
          }}>{ user? `${user.displayName}` : 'Login'}</span>
          <hr />
        </div>
        <span className='Logout' onClick={()=>{
            firebaseApp.auth().signOut();
            Navigate('/login')
        }}>{user? 'Logout':''}</span>
        <div className="sellMenu">
           
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={()=>Navigate('/create')}>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;