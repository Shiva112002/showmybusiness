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
export default function Leocoder(props) {
  let navigate=useNavigate();
   const {user,detail,setDetail}=useContext(UserContext);



  

 
  
 

  return (
    <>
      {( <Map
        mapboxAccessToken="pk.eyJ1Ijoic2h1YmhhbTI0MCIsImEiOiJjbGpwcGpjYnowMHFnM2RuemQ1NzkxeDBjIn0.Zoba6EyLeEf56YeT52UIsw"
        initialViewState={{
          longitude: props.longitude,
          latitude: props.latitude,
          zoom: 8,
        }}
        style={{ width: '50vw', height: '50vh' }}
        attributionControl={false}
        mapStyle="mapbox://styles/shubham240/cljr89qxo013a01qy183he9oz"
     
      >

        {(
        <Marker longitude={props.longitude} latitude={props.latitude} 
        anchor="bottom"
      
        style={{cursor: 'pointer'}}
        
        >
            {console.log("hello")}
        <Room style={{ color: 'slateblue', fontSize: visualViewport.zoom * 8}}  />
      </Marker>       
        )}
         <ScaleControl />
      </Map>)}
      <Grid container justifyContent="center" marginTop="10px">
      <Grid item>
        
      </Grid>
    </Grid>   
    </>
  )
}
