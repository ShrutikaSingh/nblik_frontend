import React from 'react';
import './style.css';
import Logo from '../Logo/index';
import SearchImg from '../../images/icons/search.png';


const Header = props =>{
    return(
    <div className="header">
      <div className="headerSearch">
        <form>
          <img src={SearchImg} alt="Search" style={{height:45}}/>&nbsp;&nbsp;
          <input type="text" className="input" placeholder="Search anything here!!"/>
        </form>
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
