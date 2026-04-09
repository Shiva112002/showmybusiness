import React from 'react';
import { useState, useEffect } from 'react';
import { db,storage } from '../Firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { ref ,listAll,getDownloadURL} from "firebase/storage";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Display.css'
import { useContext } from 'react';
import { UserContext } from './Context_API';
export default function Display() {
  const {user,detail,setDetail}=useContext(UserContext);
  const [addresses, setAddresses] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [websites,setwebsites]=useState([]);
  const [imageList,setImageList] = useState([]);

  const addressCollectionRef = collection(db, 'Address');
  const contactCollectionRef = collection(db, 'Contacts');
  const websiteCollectionRef=collection(db,"OnlineStore");
  const imageListRef=ref(storage,"images/");

  useEffect(() => {
    const getAddresses = async () => {
      const data = await getDocs(addressCollectionRef);
      setAddresses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const getContacts = async () => {
      const data = await getDocs(contactCollectionRef);
      setContacts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const getWebsites=async () =>{
      const data=await getDocs( websiteCollectionRef);
      setwebsites(data.docs.map((doc) =>({...doc.data(),id: doc.id})));
    };
    
    const getPhotos=async ()=>{
      listAll(imageListRef).then((response)=>{
        response.items.forEach((item)=>{
          getDownloadURL(item).then((url)=>{
            setImageList((prev)=>[...prev,url]);
          });
        });
      });
    }


    getAddresses();
    getContacts();
    getWebsites();
    getPhotos();
  }, []);

  return (
    <div className="Display">
  <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      marginTop={4}
    >
      {addresses.map((address) => (
        <Box
          key={address.id}
          bgcolor="#f2f2f2"
          padding={2}
          marginBottom={2}
          borderRadius={1}
        >
          <Typography variant="h6" fontWeight="bold" marginBottom={1}>
            Street: {address.Street}
          </Typography>
          <Typography variant="h6" fontWeight="bold" marginBottom={1}>
            City: {address.City}
          </Typography>
          <Typography variant="h6" fontWeight="bold" marginBottom={1}>
            State: {address.State}
          </Typography>
          <Typography variant="h6" fontWeight="bold" marginBottom={1}>
            Pincode: {address.Pincode}
          </Typography>
          <Typography variant="h6" fontWeight="bold" marginBottom={1}>
            Country: {address.Country}
          </Typography>
        </Box>
      ))}
      {
      contacts.map((contact) => (
        <Box
          key={contact.id}
          bgcolor="#f2f2f2"
          padding={2}
          marginBottom={2}
          borderRadius={1}
        >
          <Typography variant="h6" fontWeight="bold" marginBottom={1}>
            Phone Number: {contact.Number}
          </Typography>
          <Typography variant="h6" fontWeight="bold" marginBottom={1}>
            Website: {contact.Website}
          </Typography>
        </Box>
      ))}
      {
        websites.map((OnlineStore)=>(
          <Box
          key={OnlineStore.id}
          bgcolor="#f2f2f2"
          padding={2}
          marginBottom={2}
          borderRadius={1}
        >
          <Typography variant="h6" fontWeight="bold" marginBottom={1}>
          websiteURL: {OnlineStore.websiteURL}
          </Typography>
          </Box>
         ))
      }
      {
      imageList.map((url)=>
      {
        return <img src={url} style={{width:'20%'}}/>
      })
      }
    </Box>
    </div>
  
  );
}
