import React, { useState } from 'react'

import './OnlineStore.css';
import {useNavigate} from 'react-router-dom';
import {collection,addDoc} from "firebase/firestore";
import {db} from "../Firebase-config"
import { useContext } from 'react';
import { UserContext } from './Context_API';
function OnlineStore() {
  const [newwebsiteURL,setNewwebsiteURL]=useState("");
  const websiteCollectionRef=collection(db,"OnlineStore");

  const {user,detail,setDetail}=useContext(UserContext);
    const navigate = useNavigate();
    const navigateToContacts = () => {
        navigate('/verify');
      };
      const createOnlineStore=async () => {
        await addDoc(websiteCollectionRef,{websiteURL:newwebsiteURL,email:user});
      }
      const merged=()=>{
        createOnlineStore();
        navigateToContacts();
      };



  return (
    <div className="OnlineStore">
    <img className='imgOnline' src="https://www.rankbyfocus.com/wp-content/uploads/2020/07/ecommerce-website.jpg" alt="OnlineStore" width="200" height="800"/>
    <div className='rht1'>
    <h1 className="head1Online">Add your online store</h1>
     <h2 className="head2Online">Enter a web address where customers can purchase products</h2>
     <div className="foot"> 
     <input className='input1'placeholder="Website" onChange={(e)=>{setNewwebsiteURL(e.target.value);}}/>
 
     <div className="button-container-online">
     <button className="skip-button-online">Skip</button>
     <button className="next-button-online" onClick={merged}>Next</button>
     </div>
     </div>
    </div>
    </div>
  );
}

export default OnlineStore;