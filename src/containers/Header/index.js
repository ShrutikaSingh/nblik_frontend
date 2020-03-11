import React from 'react';
import './style.css';

const Header = props =>{
    return(
    <div className="header">
      <h1>Header</h1>
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
