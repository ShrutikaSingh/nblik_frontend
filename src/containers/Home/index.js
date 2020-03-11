import React, {Component} from 'react';
import './style.css';
import mainImg from '../../images/1.jpg';
import Header from '../Header/index';

class Home extends Component{
  render(){
    return(
      <div>
      <Header/>
      <h1>Home</h1>
      <div className="text-center">
       // <img src={mainImg} alt="" height="100px"/>
        <h1> NbliK- Network of Knowledge </h1>
      </div>
      </div>
    )
}
}

export default Home;
