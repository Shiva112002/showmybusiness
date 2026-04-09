import React, { useState } from 'react';
import { Container, Typography, FormControlLabel, Switch, TextField, Button } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { format, set } from 'date-fns';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { db } from '../Firebase-config';
import { collection, getDocs,addDoc,updateDoc,doc,deleteDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { UserContext } from './Context_API';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Paper } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import {red} from '@mui/material/colors';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SvgIcon from '@mui/material/SvgIcon';
import { Navigate } from 'react-router-dom';
const BusinessHoursPage = () => {
  let navigate=useNavigate();
  const {user}=useContext(UserContext)
  const usersCollectionRef=collection(db,"Business_hours")
    const initialTime = new Date();
    initialTime.setHours(0);
    initialTime.setMinutes(0);
  
  const [isMondayChecked, setIsMondayChecked] = useState(false);
  const [mondayStartTime, setMondayStartTime] = useState(null);
  const [mondayEndTime, setMondayEndTime] = useState(null);
  const [isTuesdayChecked, setIsTuesdayChecked] = useState(false);
    const [tuesdayStartTime, setTuesdayStartTime] = useState(null);
    const [tuesdayEndTime, setTuesdayEndTime] = useState(null);
    const [isWednesdayChecked, setIsWednesdayChecked] = useState(false);
    const [wednesdayStartTime, setWednesdayStartTime] = useState(null);
    const [wednesdayEndTime, setWednesdayEndTime] = useState(null);
    const [isThursdayChecked, setIsThursdayChecked] = useState(false);
    const [thursdayStartTime, setThursdayStartTime] = useState(null);
    const [thursdayEndTime, setThursdayEndTime] = useState(null);
    const [isFridayChecked, setIsFridayChecked] = useState(false);
    const [fridayStartTime, setFridayStartTime] = useState(null);
    const [fridayEndTime, setFridayEndTime] = useState(null);
    const [isSaturdayChecked, setIsSaturdayChecked] = useState(false);
    const [saturdayStartTime, setSaturdayStartTime] = useState(null);
    const [saturdayEndTime, setSaturdayEndTime] = useState(null);
    const [isSundayChecked, setIsSundayChecked] = useState(false);
    const [sundayStartTime, setSundayStartTime] = useState(null);
    const [sundayEndTime, setSundayEndTime] = useState(null);

  // Add similar state variables and handlers for other days of the week
    
  const handleMondaySwitchChange = (event) => {
    setIsMondayChecked(event.target.checked);
    
  };
  const handleTuesdaySwitchChange = (event) => {
    setIsTuesdayChecked(event.target.checked);
    };
    const handleWednesdaySwitchChange = (event) => {
    setIsWednesdayChecked(event.target.checked);
    };
    const handleThursdaySwitchChange = (event) => {
    setIsThursdayChecked(event.target.checked);
    };
    const handleFridaySwitchChange = (event) => {
    setIsFridayChecked(event.target.checked);
    };
    const handleSaturdaySwitchChange = (event) => {
    setIsSaturdayChecked(event.target.checked);
    };
    const handleSundaySwitchChange = (event) => {
    setIsSundayChecked(event.target.checked);
    };
    const call=()=>{
        console.log(mondayStartTime)
    }
    const nextpage=async ()=>{
      
    const firebaseTime = mondayStartTime; // Assuming this is the value stored in Firebase
   const dateObject = new Date(firebaseTime);
   const timeString = dateObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
   const firebastTime1=mondayEndTime;
    const dateObject1 = new Date(firebastTime1);
    const timeString1 = dateObject1.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    console.log(timeString1);
    const firebaseTime2 = tuesdayStartTime; // Assuming this is the value stored in Firebase
    const dateObject2 = new Date(firebaseTime2);
    const timeString2 = dateObject2.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    console.log(timeString2);
    const firebaseTime3 = tuesdayEndTime; // Assuming this is the value stored in Firebase
    const dateObject3 = new Date(firebaseTime3);
    const timeString3 = dateObject3.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    console.log(timeString3);
    const firebaseTime4 = wednesdayStartTime; // Assuming this is the value stored in Firebase
    const dateObject4 = new Date(firebaseTime4);
    const timeString4 = dateObject4.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    console.log(timeString4);
    const firebaseTime5 = wednesdayEndTime; // Assuming this is the value stored in Firebase
    const dateObject5 = new Date(firebaseTime5);
    const timeString5 = dateObject5.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    console.log(timeString5);
    const firebaseTime6 = thursdayStartTime; // Assuming this is the value stored in Firebase
    const dateObject6 = new Date(firebaseTime6);
    const timeString6 = dateObject6.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    console.log(timeString6);
    const firebaseTime7 = thursdayEndTime; // Assuming this is the value stored in Firebase
    const dateObject7 = new Date(firebaseTime7);
    const timeString7 = dateObject7.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    console.log(timeString7);
    const firebaseTime8 = fridayStartTime; // Assuming this is the value stored in Firebase
    const dateObject8 = new Date(firebaseTime8);
    const timeString8 = dateObject8.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    console.log(timeString8);
    const firebaseTime9 = fridayEndTime; // Assuming this is the value stored in Firebase
    const dateObject9 = new Date(firebaseTime9);
    const timeString9 = dateObject9.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    console.log(timeString9);
    const firebaseTime10 = saturdayStartTime; // Assuming this is the value stored in Firebase
    const dateObject10 = new Date(firebaseTime10);
    const timeString10 = dateObject10.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    console.log(timeString10);
    const firebaseTime11 = saturdayEndTime; // Assuming this is the value stored in Firebase
    const dateObject11 = new Date(firebaseTime11);
    const timeString11 = dateObject11.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    console.log(timeString11);
    const firebaseTime12 = sundayStartTime; // Assuming this is the value stored in Firebase
    const dateObject12 = new Date(firebaseTime12);
    const timeString12 = dateObject12.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    console.log(timeString12);
    const firebaseTime13 = sundayEndTime; // Assuming this is the value stored in Firebase
    const dateObject13 = new Date(firebaseTime13);
    const timeString13 = dateObject13.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    console.log(timeString13);



     
         await addDoc(usersCollectionRef,{
            Monday:{
                start_time:timeString,
                end_time:timeString1 ,
                open_or_close:isMondayChecked
            },
            Tuesday:{
                start_time:timeString2,
                end_time:timeString3 ,
                open_or_close:isTuesdayChecked
            },
            Wednesday:{
                start_time:timeString4,
                end_time:timeString5 ,
                open_or_close:isWednesdayChecked
            },
            Thursday:{
                start_time:timeString6,
                end_time:timeString7 ,
                open_or_close:isThursdayChecked
            },
            Friday:{
                start_time:timeString8,
                end_time:timeString9 ,
                open_or_close:isFridayChecked
            },
            Saturday:{
                start_time:timeString10,
                end_time:timeString11 ,
                open_or_close:isSaturdayChecked
            },
            Sunday:{
                start_time:timeString12,
                end_time:timeString13 ,
                open_or_close:isSundayChecked
            },
             email:user
        })
     console.log("done")
     navigate('/photo')

    }
  // Add similar switch change handlers for other days of the week

  const handleSaveHours = () => {
    // Add logic to save the business hours
  };

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
    <Container maxWidth="md" sx={{ paddingTop: '40px' }}>

              <Box display="flex">
      {/* Left Side */}
      <Box flex="1" display="flex" flexDirection="column" alignItems="flex-start">
        {/* Business Hours */}
    
        {/* Switches */}
        <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Typography variant="h4" component="h1" gutterBottom>
         Add Business Hours
      </Typography>

      <FormControlLabel
        control={
          <Switch checked={isMondayChecked} onChange={handleMondaySwitchChange} />
        }
        label="Monday"
      />

      {isMondayChecked && (
    
        <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Grid container spacing={3}>
      <Grid item>
      <TimePicker
          label="Start Time"
      value={mondayStartTime}
      onChange={(newValue) => {setMondayStartTime(newValue)}}
      renderInput={(params) => <TextField {...params} label="Select a time" />}
      renderValue={(value) => value ? format(value, 'HH:mm') : ''}
    />
      </Grid>
      <Grid item>
      <TimePicker
        label="End Time"
        value={mondayEndTime}
        onChange={(newValue) => {setMondayEndTime(newValue);}}
        renderInput={(params) => <TextField {...params} label="Select a time" />}
        renderValue={(value) => value ? format(value, 'HH:mm') : ''}
        />
      </Grid>
    </Grid>
          


          
         
        </LocalizationProvider>
      )}
      <br />
     {/* // Add similar switch and input fields for other days of the week */}
      <FormControlLabel
        control={
          <Switch checked={isTuesdayChecked} onChange={handleTuesdaySwitchChange} />
        }
        label="Tuesday"
      />
      {isTuesdayChecked && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Grid container spacing={3}>
      <Grid item>
      <TimePicker
          label="Start Time"
      value={tuesdayStartTime}
      onChange={(newValue) => {setTuesdayStartTime(newValue);}}
      renderInput={(params) => <TextField {...params} label="Select a time" />}
      renderValue={(value) => value ? format(value, 'HH:mm') : ''}
    />  
      </Grid>
      <Grid item>
      <TimePicker
        label="End Time"
        value={tuesdayEndTime}
        onChange={(newValue) => {setTuesdayEndTime(newValue);}}
        renderInput={(params) => <TextField {...params} label="Select a time" />}
        renderValue={(value) => value ? format(value, 'HH:mm') : ''}
        />
      </Grid>
    </Grid>
    </LocalizationProvider>
      )}
     <br />

     {/* create for another days */}
      <FormControlLabel
        control={
          <Switch checked={isWednesdayChecked} onChange={handleWednesdaySwitchChange} />
        }
        label="Wednesday"
      />
      {isWednesdayChecked && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Grid container spacing={3}>
      <Grid item>
      <TimePicker
          label="Start Time"
      value={wednesdayStartTime}
      onChange={(newValue) => {setWednesdayStartTime(newValue);}}
      renderInput={(params) => <TextField {...params} label="Select a time" />}
      renderValue={(value) => value ? format(value, 'HH:mm') : ''}
    />
      </Grid>
      <Grid item>
      <TimePicker
        label="End Time"
        value={wednesdayEndTime}
        onChange={(newValue) => {setWednesdayEndTime(newValue);}}
        renderInput={(params) => <TextField {...params} label="Select a time" />}
        renderValue={(value) => value ? format(value, 'HH:mm') : ''}
        />
      </Grid>
    </Grid>
    </LocalizationProvider>
      )}
      <br />
      <FormControlLabel
        control={
          <Switch checked={isThursdayChecked} onChange={handleThursdaySwitchChange} />
        }
        label="Thursday"
      />
      {isThursdayChecked && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Grid container spacing={3}>
      <Grid item>
      <TimePicker
          label="Start Time"
      value={thursdayStartTime}
      onChange={(newValue) => {setThursdayStartTime(newValue);}}
      renderInput={(params) => <TextField {...params} label="Select a time" />}
      renderValue={(value) => value ? format(value, 'HH:mm') : ''}
    />
      </Grid>
      <Grid item>
      <TimePicker
        label="End Time"
        value={thursdayEndTime}
        onChange={(newValue) => {setThursdayEndTime(newValue);}} 
        renderInput={(params) => <TextField {...params} label="Select a time" />}
        renderValue={(value) => value ? format(value, 'HH:mm') : ''}
        />
      </Grid>
    </Grid>
    </LocalizationProvider>
      )}
      <br />
      <FormControlLabel
        control={
          <Switch checked={isFridayChecked} onChange={handleFridaySwitchChange} />
        }
        label="Friday"
      />
      {isFridayChecked && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Grid container spacing={3}>
      <Grid item>
      <TimePicker
          label="Start Time"
      value={fridayStartTime}
      onChange={(newValue) => {setFridayStartTime(newValue);}}
      renderInput={(params) => <TextField {...params} label="Select a time" />}
      renderValue={(value) => value ? format(value, 'HH:mm') : ''}
    />
      </Grid>
      <Grid item>
      <TimePicker
        label="End Time"
        value={fridayEndTime}
        onChange={(newValue) => {setFridayEndTime(newValue);}}
        renderInput={(params) => <TextField {...params} label="Select a time" />}
        renderValue={(value) => value ? format(value, 'HH:mm') : ''}
        />
      </Grid>
    </Grid>
    </LocalizationProvider>
      )}
      <br />
      <FormControlLabel
        control={
          <Switch checked={isSaturdayChecked} onChange={handleSaturdaySwitchChange} />
        }
        label="Saturday"
      />
      {isSaturdayChecked && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Grid container spacing={3}>
      <Grid item>
      <TimePicker
          label="Start Time"
      value={saturdayStartTime}
      onChange={(newValue) => {setSaturdayStartTime(newValue);}}
      renderInput={(params) => <TextField {...params} label="Select a time" />}
      renderValue={(value) => value ? format(value, 'HH:mm') : ''}
    />
      </Grid>
      <Grid item>
      <TimePicker
        label="End Time"
        value={saturdayEndTime}
        onChange={(newValue) => {setSaturdayEndTime(newValue);}}
        renderInput={(params) => <TextField {...params} label="Select a time" />}
        renderValue={(value) => value ? format(value, 'HH:mm') : ''}
        />
      </Grid>
    </Grid>
    </LocalizationProvider>
      )}
      <br />
      <FormControlLabel
        control={
          <Switch checked={isSundayChecked} onChange={handleSundaySwitchChange} />
        }
        label="Sunday"
      />
      {isSundayChecked && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Grid container spacing={3}>
      <Grid item>
      <TimePicker
          label="Start Time"
      value={sundayStartTime}
      onChange={(newValue) => {setSundayStartTime(newValue);}}
      renderInput={(params) => <TextField {...params} label="Select a time" />}
      renderValue={(value) => value ? format(value, 'HH:mm') : ''}
    />
      </Grid>
      <Grid item>
      <TimePicker
        label="End Time"
        value={sundayEndTime}
        onChange={(newValue) => {setSundayEndTime(newValue);}}
        renderInput={(params) => <TextField {...params} label="Select a time" />}
        renderValue={(value) => value ? format(value, 'HH:mm') : ''}
        />
      </Grid>
    </Grid>
    </LocalizationProvider>
      )}
      <br />



    
        






      {/* Add similar switch and input fields for other days of the week */}
     <br />
      <Button variant="contained" color="primary" onClick={nextpage} sx={{ marginTop: '20px' }}>
        Next
      </Button>
        </Box>
      </Box>

      {/* Right Side */}
      <Box flex="1" marginTop={8} marginLeft={4}>
        {/* Image */}
        <img src="https://t3.ftcdn.net/jpg/02/19/98/28/360_F_219982800_MkVwDLqaLXO2sbGCuMyLoIIRtEOzb8ro.jpg" width="500px" height="auto"/>
      </Box>
    </Box>
 
    </Container>
    </>
  );
};

export default BusinessHoursPage;
