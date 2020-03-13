import React from 'react'
import './style.css';
import BlogButton from '../Buttons/BlogButton';
import postData from '../../../api/category.json';


const Post=(props)=>{




  return(
    <div className="card">
    <h1>dbshds</h1>

    <BlogButton data="Like" page="blog"/>
    <BlogButton data="Share" page="blog"/>
    </div>
  )
}

export default Post;
