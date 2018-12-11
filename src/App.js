

import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import App2 from './App2.js';
import DefaultLayout from './containers/DefaultLayout/DefaultLayout';
import AssProCards from './views/Base/AssProCards/AssProCards.js';
import background from './assets/IIIT-Sri-City.jpg'
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';
// Containers

//10.0.52.19:8000

// Pages
import { Login, Page404, Page500, Register } from './views/Pages';

// import { renderRoutes } from 'react-router-config';
const axios=require('axios');
class App extends Component {
constructor(props){
  super(props);
  this.state={
        
        isLogged:false
  }
}
state = {
          member:"1",
        email_id:'',
        password:'',
        profile:[],
        
      };
handleChange2 = z => event => {
      this.setState({ [z]: event.target.value });
      console.log("Member---",this.state.member);
  };
cardData = (res) =>{
    console.log(res.data,"____inside *** function_____");
    this.setState({profile:res.data});
    if(res.data["ans"] === "no"){
      alert("Invalid credentials");
    }
    else{
        this.setState({isLogged:true});
    }
}
handlePress = () => {
        console.log("clicked submit mail", this.state.email_id);
        console.log("clicked submit pass", this.state.member);
        if( this.state.email_id ===undefined || this.state.password ===undefined || this.state.member===undefined){
          alert("Please fill all the fields");
          return;
        }
        let self=this;
        let body={
          
          'email_id':this.state.email_id,
          'password':this.state.password,
          'member':Number(this.state.member),
          
           }

      //     console.log("dropdown value");
      //     let self=this;
         console.log(body);

          axios({method:'post',
          //url:'http://192.168.43.137:8000/api/post_admin_faculty_login/',
          url:'http://10.0.48.229:8000/api/post_admin_faculty_login/',
          data:[body]  }).then(res =>{ self.cardData(res);
            });
    console.log("_____________________*******_____________response________");
    
    //this.setState({isLogged:true});
  }
  render() {
    var url = "http://10.0.49.5:8000";
    return (
     
     <div style={{backgroundImage: `url(${background})`, backgroundSize:'cover' ,height:"800px"}}>
     {this.state.isLogged
       ?(<App2 option={this.state.member} details = {this.state.profile} url={url}/>)
                     :(<center>
     <Row><Col></Col>
     <Col> <br></br><br></br><FormGroup row>
                    <Col md="3">
                      <FormGroup check inline>
                        <Input className="form-check-input" onClick={this.handleChange2('member')} type="radio" id="inline-radio2" name="inline-radios" value="1" />
                        <Label className="form-check-label" check htmlFor="inline-radio2">Admin</Label>
                      </FormGroup>
                    </Col>
                    <Col md="9">
                      
                      
                      <FormGroup check inline>
                        <Input className="form-check-input" onClick={this.handleChange2('member')} type="radio" id="inline-radio3" name="inline-radios" value="2" />
                        <Label className="form-check-label" check htmlFor="inline-radio3">Faculty</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup><br></br><br></br><Card>
              <CardHeader>
                <strong>CollegeOnWeb Login </strong>
              </CardHeader>
              <CardBody>
                <Form action="" method="post">
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Username</InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Enter email-id" onChange={this.handleChange2('email_id')} value={this.state.email_id}  type="email" id="email3" name="email3" autoComplete="username"/>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-envelope"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Password</InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Enter password" onChange={this.handleChange2('password')} value={this.state.password} type="password" id="password3" name="password3" autoComplete="current-password"/>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className="form-actions">
                  <Button onClick={() => this.handlePress()}>Submit</Button>
                  
                  </FormGroup>
                </Form>
              </CardBody>
            </Card></Col><Col></Col></Row>
      </center>)}
     </div>
     
    );
  }
}

export default App;