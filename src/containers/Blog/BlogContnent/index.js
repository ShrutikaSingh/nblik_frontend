import React from 'react'
import './style.css';
import Post from '../Blog/Post/index.js';


const BarSection=(props)=>{
  return(
    <div>
      <Post>
        {props.children}
      </Post>
    </div>
  )
}

export default BarSection;
