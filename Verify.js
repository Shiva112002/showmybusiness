import './Verify.css';
import {useNavigate} from 'react-router-dom';
function Verify() {
    const navigate = useNavigate();
    const navigateToPhoto = () => {
        navigate('/customdomain');
      };
  return (
    <div className="Verify">
    <img className='imgVerify'src="https://seniorlivingsmart.com/wp-content/uploads/2020/05/Managing-the-Reputation-of-Your-Senior-Living-Community-Just-Got-a-Whole-Lot-Easier.png" alt="Description of the image" width="500" height="600"/>
    <div className='rhtVerify'>
    <h2 className="head1Verify">Customize Profile</h2>
    <h1 className="head2Verify">Your edits will be visible once you're verified</h1>
     <h2 className="head3">You can continue to make updates to your profilr at any time. All your 
     edits will be visible to customers on Google once you've been verfied</h2>
     <div className="foot">
     <button className='buttonVerify' onClick={navigateToPhoto}>Continue</button>
     </div>
    </div>
    </div>
  );
}

export default Verify;
