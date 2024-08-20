import React from 'react';
import { FaRegUser } from "react-icons/fa";
import { FaSuitcase } from 'react-icons/fa';
import { FaBriefcase } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import { PiBriefcaseBold } from "react-icons/pi";


function Header({ setActiveProject }) {
  return (
    <header className="header">
        <ul>
          <li className='header-button'><a className='link-header'><FaRegUser className='icon-header' />About</a></li>
          <li className='header-button'><a className='link-header'><PiBriefcaseBold className='icon-header'/>Works</a></li>
          <li className='header-button'><a className='link-header'><FaRegFileAlt className='icon-header' />Resume</a></li>
        </ul>
    </header>
  );
}

export default Header;