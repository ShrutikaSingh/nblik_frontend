import React, { Fragment} from 'react';
import Header from '../Header/index';
import NavBar from '../NavBar/index';
import Category from '../Category/index';
import Post from "../Blog/Post/index";
import Pagination from "../UI/Pagination";
const Blog=props=> {
    return(
      <Fragment>
          <Header/>
            <div class="row">
                <div class="col-sm-2">
                  <Category/>
                </div>
                <div class="col-sm-8">

                  <Post/>

                </div>
                <div class="col-sm-2">
                  <h3>Column 3</h3>
                  <p>Lorem ipsum dolor..</p>
                </div>
                <NavBar/>
                <Pagination/>
          </div>
      </Fragment>
  )
  }


export default Blog;
