import './CustomDomain.css';
import {useNavigate} from 'react-router-dom';

function CustomDomain() {
  
    const navigate = useNavigate();
    const navigateToVerify= () => {
        navigate('/contactdetails')
      };
  return (
    <div className="CustomDomain">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3Lax3KsrQBb9pFhXF9Os-1IL7LI_B_IYtA&usqp=CAU" alt="Description of the image" width="500" height="500"/>
    <div className='rht2'>
    <h2 className="head1Domain">Customize Profile</h2>
    <h1 className="head2Domain">Get a custom domain for your website</h1>
     <h2 className="head3">Help your business stand out online</h2>
     <ul>
  <li>helloworldishere.com     $300/year <a href = "www.google "> buy </a></li>
  <li> helloworldhere.com     $360/year <a href = "www.google "> buy </a></li>
  <li>helloworldishere.in     $360/year <a href = "www.google "> buy </a></li>
</ul>
     <div className="foot">
     <div className="button-container-domain">
     <button className="skip-button-domain">Skip</button>
     <button className="explore-button-domain" onClick={ navigateToVerify}>Explore </button>
     </div>

     </div>
    </div>
    </div>
  );
}

export default CustomDomain;