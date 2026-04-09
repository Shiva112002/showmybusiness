import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Business from './Compoenets/Business';
import Login from './Compoenets/Login';
import Add_business_hours from './Compoenets/Add_business_hours';
import { useState } from 'react';
import Registation_and_login from './Compoenets/Registration_and_Login';
import { UserProvider } from './Compoenets/Context_API';
import Leocoder from './Compoenets/Leocoder';
import OnlineStore from './Compoenets/OnlineStore';
import Address from './Compoenets/Address';
import Contact from './Compoenets/Contact';
import Photo from './Compoenets/Photo';
import Verify from './Compoenets/Verify'
import CustomDomain from './Compoenets/CustomDomain';
import Desktop1 from './Compoenets/Desktop1';
import ContactDetails from './Compoenets/ContactDetails';
import App1 from './Compoenets/App1';
function App() {
 const [isAuth, setIsAuth] = useState(false);
  return (
    <UserProvider>
      <BrowserRouter>
       
        
        <br />
       
        {/* <span>&nbsp; </span> */}
        <div className="container">
          <Routes>
            
     
            <Route path="/business" element={<><Business /></>}></Route>
            <Route path="/" element={<>
            <Registation_and_login setIsAuth={setIsAuth}/>
            </>}></Route>
            <Route path="/onlineStore" element={<><OnlineStore /></>}></Route>
            <Route path="/photo" element={<><Photo/></>}></Route>
            <Route path="/address" element={<><Address /></>}></Route>
            <Route path="/contact" element={<><Contact /></>}></Route>
            <Route path="/verify" element={<><Verify/></>}></Route>
            <Route path="/contactdetails" element={<><ContactDetails/></>}></Route>
            <Route path="customdomain" element={<><CustomDomain/></>}></Route>
           <Route path="/hours" element={<><Add_business_hours /></>}></Route>
           <Route path="/maps" element={<><Leocoder /></>}></Route>
          </Routes>
        </div>
      </BrowserRouter>          
    </UserProvider>
  );
}

export default App;
