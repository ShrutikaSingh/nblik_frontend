import React, {Component} from 'react';
import {Container, Row, Col, Jumbotron } from 'react-bootstrap';
import Checkbox from './checkbox';
import checkboxes from './checkboxes';

class RegisterForm extends Component {
    constructor(props) {
      super(props);
      this.state=this.initialState();
    };

initialState=()=>{
  return(
    {
      username:"",
      emailid:"",
      mobileno:"",
      password:"",
      repassword:"",
      errors: {},
      selectgender:"Prefer Not to Say",
      checkedItems: new Map(),
    }
  )
}
    handleChange = (e) => {
      const name=e.target.name;
      const value=e.target.value;

      this.setState({
        [name]:value
      });
    }

  handleCheckbox=(e)=> {
   const item = e.target.name;
   const isChecked = e.target.checked;
   this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
 }

  selectHandler=(e)=>{
    const value=e.target.value
    this.setState({
      selectgender: value,
    })
  }

    validateForm=() =>
    {
      const {username, emailid, mobileno, password, repassword}= this.state;

      const errors = {};
      let formIsValid = true;

      if (!username) {
        formIsValid = false;
        errors["username"] = "*Please enter your username.";
      }

      if (typeof username !== "undefined") {
        if (!username.match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "*Please enter alphabet characters only.";
        }
      }

      if (!emailid) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

      if (typeof emailid !== "undefined") {
        //regular expression for email validation
        if (!emailid.match(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }

      if (!mobileno) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter your mobile no.";
      }

      if (typeof mobileno !== "undefined") {
        if (!mobileno.match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter valid mobile no.";
        }
      }

      if (!password) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (typeof password !== "undefined") {
        if (!password.match(/^.*(?=.{7,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter secure and strong password.";
        }
      }

      if(!repassword){
        formIsValid=false;
        errors["repassword"] = "*Please enter the password again";
      }

      if(typeof repassword!== "undefined"){
        if(repassword!== password){
          formIsValid=false;
          errors["repassword"]="*Both passwords are not same";
        }
      }
      this.setState({
        errors: errors
      });
      return formIsValid;
  }


  submituserRegistrationForm = (e) => {
    e.preventDefault();
      console.log("i am at initialState" + JSON.stringify(this.state));
        this.setState(this.initialState())
        alert("Form submitted" );
        console.log(JSON.stringify(this.state));
    }


  render() {
    const {username,emailid,mobileno,password,repassword}=this.state.errors;

    return (
      <Container>
        <Row>
          <Col lg="4"></Col>
          <Col>
          <Jumbotron>
            <div id="main-registration-container">
             <div id="register">
                <h3>Registration page</h3>

                <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm.bind(this)} >

                  <label>Name</label>
                  <input type="text" name="username" value={this.state.username} onChange={this.handleChange} className="form-control"/>
                  <div className="errorMsg">{username}</div>

                  <label>Email ID:</label>
                  <input type="text" name="emailid" value={this.state.emailid} onChange={this.handleChange}  className="form-control" />
                  <div className="errorMsg">{emailid}</div>

                  <label>Mobile No:</label>
                  <input type="text" name="mobileno" value={this.state.mobileno} onChange={this.handleChange}  className="form-control" />
                  <div className="errorMsg">{mobileno}</div>

                  <label>Password</label>
                  <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" />
                  <div className="errorMsg">{password}</div>

                  <label> Retype Password </label>
                  <input type="password" name="repassword" value={this.state.repassword} onChange={this.handleChange} className="form-control" />
                  <div>{repassword}</div>

                  <label style={{paddingTop:"20px", paddingBottom:"10px" }}> Select Gender:
                  <select value={this.state.selectgender} onChange={this.selectHandler}>
                    <option> Prefer Not To Say</option>
                    <option> Female</option>
                    <option> Male</option>
                  </select>
                 </label>
                    {
                      checkboxes.map(item =>(
                        <label key={item.key}>
                          {item.name}
                          <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleCheckbox} />
                        </label>
                      ))
                    }
                  <input type="submit" className="button"  value="Submit"/>
                </form>
            </div>
            </div>
        </Jumbotron>
        </Col>
        <Col>
        </Col>
      </Row>
    </Container>
      );
  }
}


export default RegisterForm;
