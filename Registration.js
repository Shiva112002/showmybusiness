import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { create } from '@mui/material/styles/createTransitions';
import { auth } from '../Firebase-config';
import { Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
const Registration = () => {

    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    try{
        const user=await createUserWithEmailAndPassword(auth, email, password)
        console.log(user);
    }
    catch{

    }
     
  };
  const register=async()=>{


  }
  return (

    <Container maxWidth="sm" >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main',top: 110, left:240 }}  
        marginTop={15}
        
        >
            <LockOutlinedIcon />
          </Avatar>
      <Typography variant="h5" component="h2" gutterBottom 
      align="center"
      marginTop={15}
      >
        Registration
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          required
         
          value={email}
          onChange={handleEmailChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" 
                      fullWidth
                      
        >
          Register
        </Button>
      </form>
    </Container>
  );
};

export default Registration;
