import React, {Component} from 'react';
import categoriesData from '../../api/category.json';

class Category extends Component {
  constructor(props){
    super(props);
    this.items=categoriesData;
  }
  render () {
    return(
      <div>
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
