import React, {Component} from 'react'
import './style.css';
import BlogButton from '../../UI/Buttons/BlogButton';
import postData from '../../../api/posts.json';

class Post extends Component{
  constructor(props){
    super(props);
    this.state={
      posts:postData
    }
  }
render () {
  console.log(this.state.posts[0])
  return(
    <div className="card">
    {this.state.posts.map((post,i)=>{return(
      <div key={i}>
      <div className="card-header">
        {this.state.posts[i].category}
      </div>
      <div >
          {this.state.posts[i].title}
      </div>
      <div>
          {this.state.posts[i].username}
      </div>
      <div>
          {this.state.posts[i].postbody}
      </div>
      <div>
          {this.state.posts[i].likes}
          <BlogButton data="Like" page="blog"/>
          <BlogButton data="Share" page="blog"/>
      </div>
      <div>
          {this.state.posts[i].postbody}
      </div>
      </div>
    )})}
    </div>
  )
}
}

export default Post;
