import React from 'react';
import './style.css';
import Logo from '../Logo/index'

const Home =(props)=>{
    return(
      <div>
      <h1>Home</h1>
      <div className="text-center">
        <h1> NbliK- Network of Knowledge </h1>
        <Logo/>
      </div>
      </div>
    )
}


export default Home;
