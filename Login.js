import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {auth, provider} from '../Firebase-config'
import { signInWithPopup } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { UserContext } from './Context_API';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// TODO remove, this demo shouldn't need to reset the theme.



export default function SignIn({setIsAuth}) {
  let navigate=useNavigate();
  const {setUser,user}=useContext(UserContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async(event) => {
    event.preventDefault();
    try{
      const use=await signInWithEmailAndPassword(auth, email, password)
      const userEmail=use.user.email;
      setUser(userEmail)
      console.log(user);
      navigate('/business')
    }
    catch{

    }
  }
  
  const signInWithGoogle = () => {
      signInWithPopup(auth, provider)
      .then((result) => {
          const use = result.user;
          const userEmail=use.email;
          setUser(userEmail)
          console.log(user)
        navigate('/business')
      })
      .catch((error) => {
          console.log(error.message)
      })

  }

  const loignInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        const use = result.user;
        const userEmail=use.email;
        setUser(userEmail)
        console.log(user)
        navigate('/contactdetails')
    })
    .catch((error) => {
        console.log(error.message)
    })

}
 
  return (
   
      <Container component="main" maxWidth="xs" sx={{
          border: `2px solid '#7E57C2'`,

        }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              value={email}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <Button
             
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={signInWithGoogle}
            >
              Sign In with Google
            </Button>
                   
            <Typography>If already an user?</Typography>
            <Button
             
             fullWidth
             variant="contained"
             sx={{ mt: 3, mb: 2 }}
             onClick={loignInWithGoogle}
           >
             Login In with Google
           </Button>

          </Box>
        </Box>
       
      </Container>
   
  );
}