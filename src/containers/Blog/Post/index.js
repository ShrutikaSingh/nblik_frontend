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
  return(
    <div>
        {this.state.posts.map((post,i)=>{return(
          <div key={i}>
          <div className="row">
          <div className="card-body">
              <div className="card">
                    <h4 className="card-header">
                        {this.state.posts[i].title}
                    </h4>
                    <div className=" card-body">
                    <div class="card-title" style={{color:"#374D89"}}>
                        {this.state.posts[i].category}
                    </div>

                          <div class="card-subtitle text-muted">
                              {this.state.posts[i].username}
                          </div>
                          <div class="card-text">
                              {this.state.posts[i].postbody}
                          </div>
                          <br></br>
                          <br></br>
                          <div className="row ">
                            {this.state.posts[i].likes + " likes"}
                            <BlogButton data="Like" page="blog"/>

                            {this.state.posts[i].views + " views"}
                            <BlogButton data="Share" page="blog"/>
                            {this.state.posts[i].comments + " comments"}
                          </div>
                    </div>
                </div>
                </div>
              </div>
              </div>
        )})}
    </div>

  )
}
}

export default Post;
