import React from 'react';
import './style.css';
import Logo from '../Logo/index';

const Header = props =>{
    return(
    <div className="header">
    <div className="headerSearch">
      <img src={require('../../images/icons/search.png')} alt="Search"/>
      <input type="text" placeholder="search"/>
    </div>
      <nav className="headerMenu">
        <a href="http://localhost:3000/blog">Blog</a>
        <a href="http://localhost:3000/discussion">Discussions</a>
        <a href="http://localhost:3000/write">Write</a>
        <a href="http://localhost:3000/register/">Signup</a>
        <a href="http://localhost:3000/login/">Signin</a>
      </nav>
    </div>
  )
}

export default Header;
