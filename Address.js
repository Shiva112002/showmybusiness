import React, { useState } from 'react'
import './Address.css'
import {useNavigate} from 'react-router-dom';
import {collection,addDoc} from "firebase/firestore";
import {db} from "../Firebase-config"
import { useContext } from 'react';
import { UserContext } from './Context_API';
export default function Address() {
    const {user,detail,setDetail}=useContext(UserContext);
    const [newStreet,setNewStreet]=useState("");
    const [newCountry,setNewCountry]=useState("");
    const [newState,setNewState]=useState("");
    const [newPincode,setNewPincode]=useState("");
    const [newCity,setNewCity]=useState("");
    const addressCollectionRef=collection(db,"Address");
    const navigate = useNavigate();

      const navigateToOnlineStore = () => {
        navigate('/maps');
      };
      const createAddress=async () => {
           await addDoc(addressCollectionRef,{Street:newStreet,Country:newCountry,State:newState,Pincode:newPincode,City:newCity,email:user});
      }
      const merged=()=>{
        setDetail({Street:newStreet,Country:newCountry,State:newState,Pincode:newPincode,City:newCity});
        createAddress();
        navigateToOnlineStore();
      };
  return (
    <div className='Address'>
       <img className='imgAddress' src="https://images.pexels.com/photos/4542998/pexels-photo-4542998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='address'/>
       <div className='rit'>
             <h1 className="head1Add">Enter your business address</h1>
             <h2 className="head2Add">Add a location where customers can visit your business in person</h2>
         <div className="footAdd">
             <input className='inputAddress' placeholder="Contry/Region" onChange={(e)=>{setNewCountry(e.target.value);}}/>
              <input className='inputAddress' placeholder="Street address" onChange={(e)=>{setNewStreet(e.target.value);}}/>
               <input className='inputAddress' placeholder="City" onChange={(e)=>{setNewCity(e.target.value);}}/>  
              <input className='inputAddress' placeholder="Pincode" onChange={(e)=>{setNewPincode(e.target.value);}}/>
              <input className='inputAddress' placeholder="State" onChange={(e)=>{setNewState(e.target.value);}}/>    
              <button className='btonAdd' onClick={merged}>Next</button>
         </div> 
        </div>
    </div>
  )
}