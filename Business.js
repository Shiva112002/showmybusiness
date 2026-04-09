import React from 'react'
import { Paper } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import { Google } from '@mui/icons-material';
import { useState } from 'react';
import { db } from '../Firebase-config';
import { collection, getDocs,addDoc,updateDoc,doc,deleteDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { UserContext } from './Context_API';
import { useNavigate } from 'react-router-dom';
export default function Business() {
  let navigate=useNavigate();
   const {user}=useContext(UserContext)
  const usersCollectionRef=collection(db,"Business_Name")
 const [businessName, setBusinessName] = useState('');
    const handleSubmit=async()=>{
     
      console.log("hello")
        await addDoc(usersCollectionRef,{
          businessName:businessName,
          email:user
        })
        console.log("Document written with ID: ", businessName);
         navigate('/address')
        }
      

  return (

    <>
    <Paper style={{ display: 'flex', alignItems: 'center', padding: '8px' }}>
   
      <div style={{ flexGrow: 1 }}>
        {/* Content of the Paper component */}
      </div>
      <div style={{ marginRight: '16px' }} />
      <HelpOutlineIcon sx={{ color: 'gray',height: 32, width: 32 }} />
      <div style={{ marginRight: '50px' }} />
      <Avatar sx={{ 
    bgcolor: deepOrange[500] ,
    }}>{user[0]}</Avatar>
    </Paper>
       {/* <Paper sx={{
          width: '100%',
          height: 100,
       }}>

       </Paper> */}
      <br />
  
    <div style={{ display: 'flex' }}>
      <Paper style={{ width: '50vw' ,display: 'flex', justifyContent: 'center', alignItems: 'center'}} elevation={0}>
      <img src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?cs=srgb&dl=pexels-fauxels-3184287.jpg&fm=jpg" height="500px" width="auto" style={{
     
    
      }}/>
      </Paper>
      <Paper style={{ width: '50vw' }} elevation={0} >
      <Typography variant="h5" component="div"  fontWeight="bold"  sx={{
         height: 72,
         width: 448.987,
          marginTop: 15,
          marginLeft: 8,
         
        }} >
        Get your business discovered on 
        <br />
        Google Search, Maps and more
      </Typography>
      <Typography variant="h8" component="div"  sx={{
         
         
          marginTop: 1,
          marginLeft: 8,
          color: "gray"
        }} >
       Enter a few business details to get started
      </Typography>
      <TextField
        sx={{
          marginTop: 3,
          marginLeft: 8,
          
        }}
        style={{
          width: '416px',
         
        }}
        color="secondary"
        label="Business name"
        required
        value={businessName}

        onChange={(e)=>setBusinessName(e.target.value)}
      />
      <br />
      <Button variant="contained"         sx={{
          marginTop: 4,
          marginLeft: 8,
          
        }}
        type="submit"
        onClick={handleSubmit}
        >
          Continue
          </Button>
          <button onClick={()=>{console.log(user)}}>hello</button>
      </Paper>
    </div>  

    </>
  )
}
