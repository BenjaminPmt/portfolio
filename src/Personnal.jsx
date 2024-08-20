import React from 'react'
import ProfilPicture from './assets/img/profilPicture.jpg'
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5"
import { IoCalendarOutline } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";

export default function Personnal() {
  return (
    <div className='personal-info-container'>
        <div className='personal-info-picture' >
          <img src={ProfilPicture} alt='profil picture' className='picture' />
        </div>
        <h4 className='name'>Banjaye Coding</h4>
        <div className='work-name-container'>
          <span className='work-name'>Mobile Developer</span>
        </div>
        <ul className='social-media-container'>
          <li className='personal-media youtube'><a><IoLogoYoutube/></a></li>
          <li className='personal-media twitter'><a><IoLogoTwitter/></a></li>
          <li className='personal-media instagram'><a><IoLogoInstagram/></a></li>
        </ul>
        <div className='personal-info-contact'>
          <div className='personal-info-item'>
            <div className='info-icon phone'><IoCallOutline/></div>
            <div className='info-text'>
              <span>Phone</span>
              <p>+33 6 01 01 01 01</p></div>
          </div>
          <div className='personal-info-item'>
            <div className='info-icon mail'><IoMailOpenOutline/></div>
            <div className='info-text'>
              <span>Mail</span>
              <p>needtoputmymail@gmail.com</p>
            </div>
          </div>
          <div className='personal-info-item'>
            <div className='info-icon location'><IoLocationOutline/></div>
            <div className='info-text'>
              <span>Location</span>
              <p>Undefined</p>
            </div>
          </div>
          
          <div className='personal-info-item'>
            <div className='info-icon birthday'><IoCalendarOutline/></div>
            <div className='info-text'>
              <span>Birthday</span>
              <p>29 juin 1996</p>
            </div>
          </div>
        </div>
        
    </div>
  )
}
