import './Photo.css';
import { useState} from 'react';
import { storage } from '../Firebase-config';
import { ref ,uploadBytes,listAll} from "firebase/storage";
import { v4 } from "uuid";
import { Button } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './Context_API';
function Photo() {
  const {user,detail,setDetail}=useContext(UserContext);
   const navigate=useNavigate();
  const [imageUpload,setImageUpload] = useState(null);
  const uploadimage = () =>{
    if(imageUpload==null) return;
    const imageRef = ref(storage, `images/${user}`)
    uploadBytes(imageRef,imageUpload).then(() => {
      alert("Image Uploaded");
    })
  }
  const handleClick=()=>{
    navigate('/onlineStore')
  }
  return (
    <div className="Photo">
      <img
      className='imgPhoto'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdoVi34X3TRM7jhPTBjv1-0ol4W1lNTgPoQ&usqp=CAU"
        alt="Description of the image"
        width="500"
        height="500"
      />
      <div className="rht2">
        <h2 className="head1Photo">Customize Profile</h2>
        <h1 className="head2Photo">Add photos of your business</h1>
        <h2 className="head3">
          Show off your products or services and let customers peek into your business
        </h2>
        <a href="https://support.google.com/business/answer/6103862?hl=en&_gl=1*1s7y4kh*_ga*MTg1ODk0MTA2OC4xNjg2MDYyOTE0*_ga_VM5ES1YN10*MTY4NzI0ODExNy40LjEuMTY4NzI0ODI2OC4wLjAuMA..">
          Learn more
        </a>
          <label htmlFor="photo">Select a photo:</label>
          <input type="file"  onChange={(event) => {setImageUpload(event.target.files[0]);}}/>
          <button onClick={uploadimage}>Upload</button>
          <br />
          <Button variant="contained" onClick={handleClick} style={{
            margin:"10px"
          }}>Next</Button>
      </div>

      <div className="foot"></div>
      
    </div>
  );
}

export default Photo;