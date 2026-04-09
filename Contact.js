import React,{useState} from 'react';
import './Contact.css';
import {useNavigate} from 'react-router-dom';
import {collection,addDoc} from "firebase/firestore";
import {db} from "../Firebase-config";
import { useContext } from 'react';
import { UserContext } from './Context_API';


export default function Contact() {
  
  const {user,detail,setDetail}=useContext(UserContext);
  const [newNumber,setNewNumber]=useState("");
  const [newWebsite,setNewWebsite]=useState("");
  const contactCollectionRef=collection(db,"Contacts");
    const navigate = useNavigate();
    const navigateToCustomDomain= () => {
        navigate('/hours');
      };
      const createContact=async () => {
        await addDoc(contactCollectionRef,{Number:newNumber,Website:newWebsite,email:user});
   }
   const mergedConatct=()=>{
    createContact();
    navigateToCustomDomain();
  };
  return (
    <div className="Contact">
     <img class='imgContact' src="https://images.pexels.com/photos/6802044/pexels-photo-6802044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="contact" width="400" height="300"/>
     <div className='rht'>
      <h1 className="head1Contact">What contact details do you want to show to customers?</h1>
      <h2 className="head2Contact">Help customers get in touch by including this info on your listing</h2>
      <div className="foot">
      <input className='inputConatct'placeholder="Phone Number" onChange={(e)=>{setNewNumber(e.target.value);}}/>  
      <input className='inputConatct' placeholder="Website" onChange={(e)=>{setNewWebsite(e.target.value);}}/>  
      <button className='btnContact' onClick={mergedConatct}>Next</button>
      </div>
     </div>
    </div>
  )
}