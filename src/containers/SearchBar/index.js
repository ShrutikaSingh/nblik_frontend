import React, {Component} from 'react'
import data from './searchdata.json';


class SearchBar extends Component {
  constructor(props){
    super(props);
    this.items=data;
    console.log(this.items)
  }

  render () {
  return(
    <div>
    <h1>SearchBar</h1>
    <input type="text" placeholder="search"/>
    <ul>
    {this.items.map((item)=><li>{item}</li>)}
    </ul>
    </div>
  )
  }
}

export default SearchBar;
