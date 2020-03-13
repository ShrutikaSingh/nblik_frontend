import React from 'react'
import './style.css';

const NavBar=(props)=>{
  return(
    <div className="navbar">
       <nav className="headerMenu">
         <a href="http://localhost:3000/blog">About</a>
         <a href="http://localhost:3000/discussion">Contact Us</a>
         <a href="http://localhost:3000/write">Privacy Policy</a>
         <a href="http://localhost:3000/register/">Terms & Services</a>
       </nav>
     </div>

  )
}

export default NavBar;
