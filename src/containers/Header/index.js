import React, {useState} from 'react';
import './style.css';
import Logo from '../Logo/index';
import SearchImg from '../../images/icons/search.png';


const Header = props =>{

const [search, setSerach]= useState(false);

const searchSubmit = (e) => {
  e.preventDefault();
  alert("submitted");
}

    return(
    <div className="header">
      <div className="headerSearch">
        <form onSubmit={searchSubmit}>
          <input type="text" className="input" placeholder="Search anything here!!"/>&nbsp;&nbsp;
          <img src={SearchImg} className="searchIcon" alt="Search" style={{height:45}}/>
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
