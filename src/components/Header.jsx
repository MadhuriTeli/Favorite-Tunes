import React from 'react';
import { FaMoon , FaSun } from 'react-icons/fa';
import headerImage from './Assets/undraw_Music_re_a2jk.svg'
function Header()  { 
  return (
    <div className="header">
     <img src={headerImage} alt="header img"></img>
      <div className="header-info">
        <h1>Your Favorite Tunes</h1>
        <h2>All  <FaSun className="sun"/>  and  all  <FaMoon className="moon"/></h2>
      </div>
    </div>
    );
  }

 
export default Header;