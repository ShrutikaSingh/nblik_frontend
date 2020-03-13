import React from 'react';
import './style.css';
import Logo from '../Logo/index';
import SearchBar from '../SearchBar/index';
import BlogButton from '../UI/Buttons/BlogButton';

const Home =(props)=>{
    return(
      <div>
      <div className="text-center">
        <Logo/>
        <h1> NbliK- Network of Knowledge </h1>

        <BlogButton data="NBLIK" page="home"/>

      </div>
      </div>
    )
}


export default Home;
