import React from 'react'
import './style.css';
import Card from '../UI/Card/index.js';

const BarSection=(props)=>{
  return(
    <div>
      <Card>
        {props.children}
      </Card>
    </div>
  )
}

export default BarSection;
