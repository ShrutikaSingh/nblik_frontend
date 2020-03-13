import React, {Component} from 'react';
import categoriesData from '../../api/category.json';
import SearchImg from '../../images/icons/search.png';
import './style.css';
class Category extends Component {
  constructor(props){
    super(props);
    this.items=categoriesData;
  }
  render () {
    return(
      <div>
        <div className="categorySearch">
        <form>
          <input type="text" className="input" placeholder="Category"/>&nbsp;&nbsp;
          <img src={SearchImg} className="searchIcon" alt="Search" style={{height:25}}/>
        </form>
        </div>
      <h1>Categories</h1>
      <ul>
      {
        this.items.map((item,id) => {return(
        <li key={id}>{item}</li>)
        })
      }
      </ul>
      </div>
    )
  }
}

export default Category ;
