import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col, Card, CardBody, CardText } from 'reactstrap';
import FetchText from './fetch_text';
import login_img from '../images/langselect.jpg';
import axios from 'axios';
class Login extends Component{
  constructor(){
    super()
    this.state={
      name:'',
      password:'',
      isChecked:false,
       data: [],
    }
    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.toggleCheckbox=this.toggleCheckbox.bind(this);
  }

  handleChange= e => {
    this.setState({[e.target.name]:e.target.value}) /* targeting all names that is email, passord etc */

  }

toggleCheckbox =()=>{
  this.setState({isChecked:!this.state.isChecked})
  }

async handleSubmit(e){
    e.preventDefault();
    console.log(this.state);
    const { email, password }= this.state
    const form =await axios.post('/api/form', {
      email:email,
      password:password
    })
    .then(res=>{
    console.log(res)
  })
    .catch(err=>{
    console.log(err)
    }
  )
}
/*
            {{ <form action="http://localhost:3001/admin/posts/create" method="post">
             <input type="file" className="form-control" id="file" name="uploadedFile"  accept="image/jpeg, image/jpg, image/png, image/bmp"/>
             <button type='submit'>Submit</button>
              </form>
        }}
*/



  render(){
  return (
    <div>
    <Container style={{paddingTop:'50px'}} >
    <Row>
      <Col md={2}>

      </Col>
      <Col md={6}>
        <div className="text-center">
          <img src={login_img} alt="" height="200px"/>
        </div>

        <Form onSubmit={this.handleSubmit} >

            <FormGroup>
              <div>
                 <Card>
                   <CardBody>
                   <Label>
                        <CardText>
                            <FetchText/>
                        </CardText>
                   </Label>

                   </CardBody>
                 </Card>
               </div>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Select Language You Want To Write In</Label>
              <Input type="lang" name="text"placeholder="Select Language" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
            <Label for="examplePassword">Type in your own language</Label>
              <Input type="textarea" style={{height:"200px"}} name="text"placeholder="Your Language" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type='checkbox' checked={this.state.isChecked} onChange={this.toggleCheckbox} />{' '}
                All data is filled.
              </Label>
            </FormGroup>
            <Button type="submit" color="primary" >Submit</Button>
        </Form>
        </Col>
        <Col md={2}></Col>
    </Row>
</Container>
</div>
);
  }
}

export default Login;
