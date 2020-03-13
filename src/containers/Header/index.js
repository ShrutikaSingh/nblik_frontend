import React, {useState} from 'react';
import './style.css';
import SearchImg from '../../images/icons/search.png';
import mainImg from '../../images/nblik.jpg';

const Header = props =>{

const [search, setSearch]= useState(false);

const searchSubmit = (e) => {
  e.preventDefault();
  alert("submitted");
}

const openSearch = () =>{
  setSearch(true);
}
    return(
      <div class="row">
        <div class="col-sm-2">
          <a href="http://localhost:3000/blog">
            <img src={mainImg} style={{height:50}} alt=""></img>
          </a>
        </div>
          <div class="col-sm-6">
            <div className="header">
              <div className="headerSearch">
                <form onSubmit={searchSubmit}>
                  <input type="text" className="input" placeholder="Search anything here!!"/>&nbsp;&nbsp;
                  <img onClick={openSearch} src={SearchImg} className="searchIcon" alt="Search" style={{height:35}}/>
                </form>
              </div>
            </div>
        </div>
        <div class="col-sm-4">
          <nav className="headerMenu">
            <a href="http://localhost:3000/blog">Blog</a>
            <a href="http://localhost:3000/discussion">Discussions</a>
            <a href="http://localhost:3000/write">Write</a>
            <a href="http://localhost:3000/register/">Signup</a>
            <a href="http://localhost:3000/login/">Signin</a>
          </nav>
      </div>
    </div>
  )
}

export default Header;
