import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext, firebaseContext } from '../../../context';
import 'firebase/storage'
import { useNavigate } from 'react-router-dom';

const Create = () => {
const{user} = useContext(AuthContext);
const {firebaseApp} = useContext(firebaseContext)

    const [name,setName] = useState('');
    const [category,setCategory] = useState('');
    const [price,setPrice] = useState('');
    const [image,setImage] = useState(null)
const date = new Date();
const Navigate=useNavigate()

    const handleSubmit = (e)=>{
      
        e.preventDefault()
       
        console.log('useryyyy:',user)
        firebaseApp.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
            ref.getDownloadURL().then((url)=>{
           console.log('url');
           firebaseApp.firestore().collection('sellProducts').add({
            name,
            category,
            price,
            url,
            user:user.uid,
         
           
            createdAt:date.toDateString()
           })
           Navigate('/')
            })
        })
    }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input value={price} onChange={(e)=>setPrice(e.target.value)} className="input" type="number" id="fname" name="Price" />
            <br />
          </form>
          <br />
          <img alt='img' width="200px" height="200px" src={image? URL.createObjectURL(image):''}></img>
          <form>
            <br />
            <input type="file"  onChange={(e)=>setImage(e.target.files[0])}/>
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;