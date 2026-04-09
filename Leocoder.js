import * as React from 'react';
import Map, { Marker } from 'react-map-gl';
import { Popup ,ScaleControl} from 'react-map-gl';
import PlaceIcon from '@mui/icons-material/Place';
import Room from '@mui/icons-material/Room';
import { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { useEffect } from 'react';
import Draggable from 'react-draggable';
import { Button } from '@mui/material';
import {Grid} from '@mui/material';
import { db } from '../Firebase-config';
import { collection, getDocs,addDoc,updateDoc,doc,deleteDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { UserContext } from './Context_API';
import { useNavigate } from 'react-router-dom';
export default function Leocoder() {
  let navigate=useNavigate();
   const {user,detail,setDetail}=useContext(UserContext);

  const usersCollectionRef=collection(db,"Maps")
  const nextpage =async()=>{  
    await addDoc(usersCollectionRef,{
      latitude:newPlace.lat,
      longitude:newPlace.long,
      email:user
    })
    console.log("Document written with ID: ", );
    navigate('/contact')
  } 
  const [newPlace, setNewPlace] = useState(null);
  const [rendered, setRendered] = useState(false);
  const [zoom, setZoom] = useState(8);
  useEffect(() => {
    const handleFormSubmit = async () => {
      
      const apiKey = '910aecb97a66409dbf526195d6332535';
      const country = detail.Country;
      const city = detail.City;
      const state = detail.State;
      const postalCode = detail.Pincode;
  
      const apiUrl = `https://api.geoapify.com/v1/geocode/search?postcode=${postalCode}&city=${city}&country=${country}&format=json&apiKey=${apiKey}
      `;
  
      try {
          
            const response = await fetch(apiUrl);
            const result = await response.json();
            console.log(result, 'result');
    
            setNewPlace({
              long: result.results[0].bbox.lon1,
              lat: result.results[0].bbox.lat1,
            });
      //   const { lat, lng } = response.data; // Assuming the API response provides latitude and longitude in this format
           setRendered(true);
      } catch (error) {
        console.error('Error while geocoding:', error);
      }
    };
    handleFormSubmit();   
  },[] )
  

  const handleAddClick = async(e) => {
    console.log(e);
    console.log("hello");
    e.preventDefault();
    console.log(e, 'e');
    // const [long, lat] = e.lngLat;
    const long= e.lngLat.lng;
    const lat= e.lngLat.lat;
    console.log(e.lngLat, 'e.lngLat')
    console.log(long, 'long')
    console.log(lat, 'lat')
    // console.log(long, lat, 'long, lat')
    setNewPlace({
      long: long,
      lat: lat
    });
    // console.log(newPlace, 'newPlace')
  };
  
  const handleMarkerDragEnd = (e) => {
    const long= e.lngLat.lng;
    const lat= e.lngLat.lat;
    setNewPlace({
      long: long,
      lat: lat,
    });
   
  };
  const zoominmap = () => {
    console.log(zoom);
    if(zoom>=20){

    }
    else{
      let x=zoom+1
      setZoom(x);
    }
    
  };
  const zoomoutmap = () => {
    if(zoom<=3){

    }
    else{
       let x=zoom-1
      setZoom(x);
    }
    
  };
  return (
    <>
      {rendered && ( <Map
        mapboxAccessToken="pk.eyJ1Ijoic2h1YmhhbTI0MCIsImEiOiJjbGpwcGpjYnowMHFnM2RuemQ1NzkxeDBjIn0.Zoba6EyLeEf56YeT52UIsw"
        initialViewState={{
          longitude: newPlace.long,
          latitude: newPlace.lat,
          zoom: 8,
        }}
        style={{ width: '100vw', height: '90vh' }}
        attributionControl={false}
        mapStyle="mapbox://styles/shubham240/cljr89qxo013a01qy183he9oz"
        onDblClick={handleAddClick}
      >

        {newPlace && (
        <Marker longitude={newPlace.long} latitude={newPlace.lat} 
        anchor="bottom"
        onDragEnd={handleMarkerDragEnd}
        style={{cursor: 'pointer'}}
        draggable
        >
        <Room style={{ color: 'slateblue', fontSize: visualViewport.zoom * 7}}  />
      </Marker>       
        )}
         <ScaleControl />
      </Map>)}
      <Grid container justifyContent="center" marginTop="10px">
      <Grid item>
        <Button variant="contained" color="primary" onClick={nextpage}>
          Next
        </Button>
      </Grid>
    </Grid>   
    </>
  )
}
