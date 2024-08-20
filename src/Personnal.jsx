import React from 'react'
import ProfilPicture from './assets/img/profilPicture.jpg'
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5"
import { IoCalendarOutline } from "react-icons/io5";



export default function Personnal() {
  return (
    <div className='personal-info-container'>
        <div className='personal-info-picture' >
          <img src={ProfilPicture} alt='profil picture' className='picture' />
        </div>
        <h4 className='name'>Benjamin Pmt</h4>
        <div className='work-name-container'>
          <span className='work-name'>Mobile Developer</span>
        </div>
        <ul className='social-media-container'>
          <li className='personal-media'><a href=""><FaYoutube style={{color : 'red', fontSize:25}} /></a></li>
          <li className='personal-media'><a href="" ><BsTwitterX style={{color:'black',fontSize:25}} /></a></li>
          <li className='personal-media'><a href="" ><FaInstagram style={{color: 'rgb(225, 42, 114)', fontSize:25}} /></a></li>
        </ul>
        <div className='personal-info-contact'>
          <div className='personal-info-item'>
            <div className='info-icon'><IoCallOutline style={{color: 'rgb(225, 42, 114)', fontSize:25}} /></div>
            <div className='info-text'>
              <span>Phone</span>
              <p>+33 6 01 01 01 01</p></div>
          </div>
          <div className='personal-info-item'>
            <div className='info-icon'><IoMailOpenOutline style={{color: 'rgb(106, 181, 185)', fontSize:25}}/></div>
            <div className='info-text'>
              <span>Mail</span>
              <p>banjayecoding@gmail.com</p>
            </div>
          </div>
          <div className='personal-info-item'>
            <div className='info-icon'><IoLocationOutline style={{color: 'rgb(253, 117, 144)', fontSize:25}} /></div>
            <div className='info-text'>
              <span>Location</span>
              <p>Undefined</p>
            </div>
          </div>
          
          <div className='personal-info-item'>
            <div className='info-icon'><IoCalendarOutline style={{color: 'rgb(193, 124, 235)', fontSize:25}} /></div>
            <div className='info-text'>
              <span>Birthday</span>
              <p>29 juin 1996</p>
            </div>
          </div>
        </div>
        
    </div>
  )
}
