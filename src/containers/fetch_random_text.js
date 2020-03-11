import React, {Component} from 'react';

class FetchText extends Component{
  constructor()
  {
    super();
    this.state={
      data: [],
    }
  }
  componentDidMount()
  {
    fetch('http://127.0.0.1:8000/')
    .then((response) => response.text())
    .then((findresponse)=>{
      console.log(findresponse) /* this title is a field in the json file*/
      this.setState({
        data:findresponse,
      })
    })
  }
  render()
  {
    return(
        <div>
          <p> {this.state.data} </p>
        </div>
    )
  }

}

export default FetchText;
