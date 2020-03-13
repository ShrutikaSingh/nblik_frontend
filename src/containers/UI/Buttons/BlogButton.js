import React, {Component} from 'react';
import './style.css';
import styled, {css} from 'styled-components';
import colors from '../../../styles/global';
const Button= styled.button`
  background: ${colors.main};
  font-size: 2em;
  margin: 0 30px 0 5px;
  padding: 0.2em 2em;
  border: 2px solid #374D89;
  border-radius: 45px;
  color:${props => props.page==="blog" ? "white" : "palevioletred"};

  ${props => props.page==="blog" && css `
      font-size:15px;
      background: #237eed;
      border-radius: 4px;
      border:0px;
  ` }
`;

class BlogButton extends Component{
  render(){
    return(
      <div>
        <Button page={this.props.page}>{this.props.data}</Button>
      </div>
    )
}
}



export default BlogButton;
