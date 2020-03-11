import React, { Fragment} from 'react';
import './style.css';
import Header from '../Header/index';
import BarSection from '../BarSection/index';
import NavBar from '../NavBar/index';

const Blog=props=> {
    return(
      <Fragment>
        <Header/>
        <BarSection/>
        <NavBar/>
      </Fragment>
  )
  }


export default Blog;
