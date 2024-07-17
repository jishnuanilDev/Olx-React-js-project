import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import './View.css';
import { postContext } from '../../../postContext';
import { firebaseContext } from '../../../context';
function View() {
    const [userDetails,setUserDetails] = useState();
    const {postDetails} = useContext(postContext);

const {firebaseApp} = useContext(firebaseContext)
useEffect(() => {
  console.log('postKitttii:',postDetails);
  console.log('postIdKitti:',postDetails.id);
    if (postDetails && postDetails.userId) {
        const  userId  = postDetails.id;
        firebaseApp.firestore()
            .collection('users')
            .where('id', '==', userId)
            .get()
            .then((querySnapshot) => {
                console.log('resultLog:', querySnapshot);
                querySnapshot.forEach((doc) => {
                    setUserDetails(doc.data());
                });
            })
            .catch((error) => {
                console.error('Error getting user details:', error);
            });
    }
}, [])
  return (

<div>
    <Header/>
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{postDetails.price}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller Details</p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
    </div>
  );
}
export default View;