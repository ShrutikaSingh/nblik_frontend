import React from 'react';
import './style.css';
import Logo from '../Logo/index';
import SearchBar from '../SearchBar/index';


const Home =(props)=>{
    return(
      <div>
      <div className="text-center">
        <h1> NbliK- Network of Knowledge </h1>
        <SearchBar/>
        <Logo/>
      </div>
      </div>
    )
}


export default Home;
