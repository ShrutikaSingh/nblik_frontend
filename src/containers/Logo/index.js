import React from 'react'
import './style.css';
import mainImg from '../../images/nblik.jpg';

const Logo=(props)=>{
  return(
    <div className="card">
     <a href="http://localhost:3000/blog">
     <img src={mainImg} alt="" style={{height:0}}/>
     </a>
    </div>
  )
}

export default Logo;
