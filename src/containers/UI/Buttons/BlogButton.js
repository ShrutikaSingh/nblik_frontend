import React from 'react';
import './style.css';
import styled from 'styled-components';

const Button= styled.button`
  background:#374D89;
  color: white;
  font-size: 2em;
  margin: 1em;
  padding: 0.2em 2em;
  border: 2px solid #374D89;
  border-radius: 3px;
`;

const BlogButton =(props)=>{
    return(
      <div>
      <Button>NBLIK</Button>
      </div>
    )
}


export default BlogButton;
