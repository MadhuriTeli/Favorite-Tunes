import React from 'react';
import { links } from './Assets/sidebarData';
import { FaUserCircle } from 'react-icons/fa';

function Sidebar()  {

  return (
    <div className='sidebar'>
      <div className="user">          
       <FaUserCircle className="user-icon" />
        <p>Bob Smith</p>
      </div>
      <div className='links'>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <div className="sidebar-item" key={id}>
              <a className="sidebar-link sidebar-item-icon" href={url}>
                {icon}        
              </a>
              <a className="sidebar-link sidebar-item-text" href={url}>              
                {text}
              </a>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default Sidebar;