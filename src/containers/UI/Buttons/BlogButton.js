import React, {Component} from 'react';
import './style.css';
import styled, {css} from 'styled-components';
import colors from '../../../styles/global';
const Button= styled.button`
  background: ${colors.main};
  font-size: 2em;
  margin: 1em;
  padding: 0.2em 2em;
  border: 2px solid #374D89;
  border-radius: 45px;
  color:${props => props.page=="blog" ? "white" : "palevioletred"};
  
  ${props => props.page=="blog" && css `
      font-size:12px;
      background: #237eed;
      border-radius: 1px;
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
