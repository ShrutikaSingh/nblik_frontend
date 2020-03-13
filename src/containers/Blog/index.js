import React, { Fragment} from 'react';
import './style.css';
import Header from '../Header/index';
import NavBar from '../NavBar/index';
import Category from '../Category/index';
import Post from "../Blog/Post/index";

const Blog=props=> {
    return(
      <Fragment>
        <Header/>
        <Post/>
        <NavBar/>
        <Category/>
      </Fragment>
  )
  }


export default Blog;
