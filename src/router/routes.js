import React,{Component} from 'react';
import {BrowserRouter as Router,Route}from 'react-router-dom';
import Register from '../containers/registrationForm';
import LoginPage from '../containers/login';
import FileUpload from '../containers/fileupload';
import LangSelect from '../containers/langSelect';
import LangDropDown from '../containers/dropdown_lang';
import Home from '../containers/Home/index';

class Routes extends Component{
render(){
  return(
    <div>
    <Router>
      <Route exact path="/" component = {Home}/>
      <Route exact path="/login" component = {LoginPage}/>
      <Route exact path="/lang" component = {LangDropDown}/>
      <Route exact path="/upload" component = {FileUpload}/>
      <Route exact path="/select" component = {LangSelect}/>
      <Route exact path="/register" component ={Register}/>
    </Router>
    </div>
  )
}
}
export default Routes;
