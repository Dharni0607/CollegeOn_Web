import React, { Component } from 'react';
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
import moment from 'moment';
import FeeSchedulesCards from '../FeeSchedulesCards/FeeSchedulesCards.js'
const axios=require('axios');

class FeeSchedules extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }
  state = {
        title:'',
        ug:'',
        duedate:'',
        description:'',
 cards:false,
        //happeningOn: moment()
      };
   handleChange = y => event => {
      this.setState({ [y]: event.target.value });
  };
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  handleChange4 = x =>event => {
    
        var date = moment();
        var mydate = new Date(event.target.value);
        console.log("checking date");
        console.log(date);
        console.log("checking date2");
        console.log(mydate);

        if(date>mydate){
          console.log("Invalid date con");
          alert("Invalid date");
          this.setState({ [x]: '' });
        }
        else{
            console.log("Valid date con");
            this.setState({ [x]: event.target.value });
        }
    
     
   };
   handlePressSentPosts = () =>{
        
      this.setState({cards:true});
  }
  handlePress = async () => {
    console.log("clicked submit");
        
        let body={
          'title':this.state.title,
          'description':this.state.description,
          'studentdegree':this.state.ug,
          'due_date':this.state.duedate,
           }
    let self=this;
    console.log(body);

    await axios({method:'post',
    url:'http://192.168.43.137:8000/api/post_feeschedules/',
    data:[body]  }).then(res =>{
      console.log(res)}).catch(error =>{
        console.log(error)
      });
    this.setState({cards:true});
  }



  render() {
    return (
      <div className="animated fadeIn">
      {this.state.cards
        ?(<FeeSchedulesCards/>)
        :(
         <center>
            <Card>
              <CardHeader>
              <button onClick={() => this.handlePressSentPosts()}> View previous posts </button><br></br>
                <strong>Fee FeeSchedule</strong> Details
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                 
                  
                  
                   <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Title</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" value={this.state.title}
                      onChange={this.handleChange('title')} placeholder="Text" />
                    </Col>
                  </FormGroup>
                 
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="ug-helper">Student Degree</Label>
                    </Col>
                    <Col xs="12" md="9">
                        <Input type="select" name="ug" id="ug-helper" value={this.state.ug}
                        onChange={this.handleChange('ug')}>
                        <option value="0">Please select</option>
                        <option value="All">ALL</option>
                        <option value="UG-1">UG-1</option>
                        <option value="UG-2">UG-2</option>
                        <option value="UG-3">UG-3</option>
                        <option value="UG-4">UG-4</option>
                        <option value="MS">MS</option>
                        <option value="PhD">PhD</option>
                        </Input>
                    </Col>
                  </FormGroup>


                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Due Date </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="date-input" name="date-input" value={this.state.duedate}
                      onChange={this.handleChange4('duedate')} placeholder="date"  />
                    </Col>
                  </FormGroup>
                  
                   <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Description</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                             value={this.state.description}
                      onChange={this.handleChange('description')} placeholder="Content..." />
                    </Col>
                  </FormGroup>

                  </Form>
              </CardBody>
              <CardFooter>
               <Button onClick={() => this.handlePress()}>Submit</Button>
              </CardFooter>
            </Card>
        </center>)}
      </div>
    );
  }
}

export default FeeSchedules;
