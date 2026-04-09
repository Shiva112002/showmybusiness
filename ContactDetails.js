import { getFirestore, collection, onSnapshot, addDoc, getDocs, deleteDoc, doc, query, where } from 'firebase/firestore';
import { db, storage } from '../Firebase-config';
import { useContext } from 'react';
import { UserContext } from './Context_API';
import { BookSharp, Contacts } from '@mui/icons-material';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Paper, MenuItem, Select, FormControl, InputLabel, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import Maps from './Maps'

import Carousel from 'react-material-ui-carousel'

export default function ContactDetails() {
  const { user } = useContext(UserContext);
  const colRef1 = collection(db, 'Contacts');
  const colRef2 = collection(db, 'Business_Name');
  const colRef3 = collection(db, 'Address');
  const colRef4 = collection(db, 'Maps'); // Assuming the collection name is 'Maps'
  const colRef5 = collection(db, 'Business_hours');
  const colRef6 = ref(storage, 'images/');

  const q1 = query(colRef1, where('email', '==', user));
  const q2 = query(colRef2, where('email', '==', user));
  const q3 = query(colRef3, where('email', '==', user));
  const q4 = query(colRef4, where('email', '==', user));
  const q5 = query(colRef5, where('email', '==', user));
  const q6 = query(colRef6);

  const [contacts, setContacts] = useState([]);
  const [business, setBusiness] = useState([]);
  const [address, setAddress] = useState([]);
  const [maps, setMaps] = useState([]);
  const [businessHours, setBusinessHours] = useState([]);
  const [imageList, setImageList] = useState([]);
  const [selectedDay, setSelectedDay] = useState('');
  const [showAllDays, setShowAllDays] = useState(false);

  // const handleDayChange = (event) => {
  //   setSelectedDay(event.target.value);
  //   setShowAllDays(false); // Close the dropdown list when a specific day is selected
  // };
  const toggleAllDays = () => {
    setShowAllDays((prevState) => !prevState); // Use functional update to access the previous state
    setSelectedDay(''); // Clear the selected day when the dropdown list is displayed
  };
  const handleToggleAllDays = () => {
    setShowAllDays((prevShowAllDays) => !prevShowAllDays);
    // setSelectedDay(''); // Clear the selected day when the dropdown is toggled
  };

  let backgroundImage="https://images.unsplash.com/photo-1512386233331-f023884a92e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1195&q=80";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const contactsSnapshot = await getDocs(q1);
        const newContacts = contactsSnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setContacts(newContacts);

        const businessSnapshot = await getDocs(q2);
        const newBusiness = businessSnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setBusiness(newBusiness);

        const addressSnapshot = await getDocs(q3);
        const newaddress = addressSnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setAddress(newaddress);

        const mapsSnapshot = await getDocs(q4);
        const newMaps = mapsSnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMaps(newMaps);

        const businessHoursSnapshot = await getDocs(q5);
        const newBusinessHours = businessHoursSnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setBusinessHours(newBusinessHours);

        const imageRefs = await listAll(colRef6);
        const filteredImages = imageRefs.items.filter((imageRef) => imageRef.name === user);
        const imageURLs = await Promise.all(filteredImages.map((imageRef) => getDownloadURL(imageRef)));
        setImageList(imageURLs);

        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDayOfWeek = daysOfWeek[new Date().getDay()];
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  const aspectRatio = 16 / 9; 

  return (
    <Box p={3} style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '90vh' }}>
    <Grid container spacing={3}>
      {/* Left column for the carousel */}
      <Grid item xs={8} sm={3} style={{marginRight:'8%'}}>
        <Typography variant="h4" gutterBottom>Images:</Typography>
        <Carousel style={{ width:'100%',maxWidth: '100%', margin: '0 auto' }}>
            {imageList.map((imageURL, index) => (
              <Paper key={index}>
                <img src={imageURL} alt={`Image ${index}`} style={{ width: '100%', height: '100%' }} />
              </Paper>
            ))}
          </Carousel>
      </Grid>

      {/* Right column for contact information */}
      <Grid item xs={10} sm={5}>
      <Typography variant="h4" gutterBottom>Contact Hours:</Typography>

          {(
            <>
              {businessHours.map((doc) => {
          const hours = doc; // Each doc contains the day-wise business hours
          return (
            <div key={doc.id}>
              {Object.entries(hours).map(([day, details]) => {
                // Check if the day is open based on open_or_close value
                if (details.open_or_close) {
                  return (
                    <div key={day}>
              <div key={day} style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h6" gutterBottom style={{ marginRight: '8px' }}>
              {day}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {details.start_time}-{details.end_time}
        </Typography>
      </div>

                    </div>
                  );
                } else {
                  return null; // If day is closed, don't display it
                }
              })}
            </div>
          );
        })}

            </>
          )}



        <Typography variant="h4" gutterBottom>Phone Number:</Typography>
        {contacts.map((contact) => (
          <div key={contact.id}>
            <Typography variant="h6" gutterBottom>
              Number: {contact.Number}
            </Typography>
          </div>
        ))}

        <Typography variant="h4" gutterBottom>Website URL:</Typography>
        {contacts.map((contact) => (
          <div key={contact.id}>
            <Typography variant="h6" gutterBottom>
              Website: {contact.Website}
            </Typography>
          </div>
        ))}

        <Typography variant="h4" gutterBottom>Address:</Typography>
        {address.map((addr) => (
          <div key={addr.id}>
            <Typography variant="h6" gutterBottom>
              {`${addr.Street}, ${addr.City}, ${addr.State}, ${addr.Country} ${addr.Pincode}`}
            </Typography>
          </div>
        ))}

        <Typography variant="h4" gutterBottom>Latitude and Longitude:</Typography>
        {maps.map((map) => (
          <div key={map.id}>
            <Maps longitude={map.longitude} latitude={map.latitude}/>
            <Typography variant="h6" gutterBottom>
              Latitude: {map.latitude}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Longitude: {map.longitude}
            </Typography>
          </div>
        ))}
      </Grid>
    </Grid>
  </Box>
  );
}
