import './Header.css'
import{CgProfile} from 'react-icons/cg'
import {BsFillBellFill} from 'react-icons/bs'


const Header = () => {
  return <div className="head">
    <div>logo</div>
    <div><input type="search" /></div>
    <div className='rightheader'>
      <div className='notification'>
        <div><BsFillBellFill/></div>
        <div>Notification</div>
      </div>
      <div className='user'>
      <div ><CgProfile/></div>
        <div>username</div>
      </div>
    </div>
  </div>;
};

export default Header;
//left

// 1. Logo.




// middle

// 1. Search Bar.





// right

// 1. Notification.

// 2. Profile Photo.

// 2. User Name.