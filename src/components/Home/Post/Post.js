import React, { useContext, useEffect, useState } from 'react';

import Heart from '../../../assets/Heart';
import './Post.css';
import { firebaseContext } from '../../../context';
import { Navigate, useNavigate } from 'react-router-dom';
import { postContext } from '../../../postContext';


function Posts() {
  const{setPostDetails} = useContext(postContext)
const {firebaseApp} = useContext(firebaseContext);
const [products,setProducts] = useState([]);
const Navigate = useNavigate()
useEffect(()=>{

  firebaseApp.firestore().collection('sellProducts').get().then((snapshot)=>{
    const allPost = snapshot.docs.map((product)=>{
      return{
        ...product.data(),
        id:product.id
      }
    })
    console.log('allpostt:',allPost)
    setProducts(allPost);
  })
},[])

function handleClick(product){
  setPostDetails(product);
  Navigate('/view');
}


  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">

          {
        products.map((product)=>{
             return <div
              className="card"
            onClick={()=>handleClick(product)} >
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={product.url} alt="img" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9;{product.category}</p>
                <span className="kilometer">{product.price}</span>
                <p className="name">{product.name}</p>
              </div>
              <div className="date">
                <span>{product.createdAt}</span>
              </div>
            </div>
            })
          }
    
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="https://i.gadgets360cdn.com/large/Google_Pixel8_Pixel8Pro_main_big_ndtv_1697030076487.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 42999</p>
              <span className="kilometer">Flagship Model</span>
              <p className="name"> Google Pixel 8</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;