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
import ClassReSchCards from '../ClassReSchCards/ClassReSchCards.js'
const axios=require('axios');

class ClassReSchedules extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      cards:false,
      timeout: 300
    };
  }
  
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }
  state = {
        course:'',
        description:'',
        olddate:'',
        oldtime:'',
        newdate:'',
        newtime:'',
        oldroom:'',
        newroom:'',
        //happeningOn: moment()
      };
  handleChange = y => event => {
      this.setState({ [y]: event.target.value });
  };
  handleChange2 = z => event => {
      this.setState({ [z]: Number(event.target.value) });
  };

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

        if( this.state.course ==='0' || this.state.olddate ===undefined || this.state.oldtime ===undefined || this.state.newdate ===undefined || 
          this.state.newtime ===undefined || this.state.oldroom ==='0' || this.state.newroom==='0' || this.state.description === ''){
          alert("Please fill all the fields");
          return;
        }
        let body={
          'course_id':this.state.course,
          'description':this.state.description,
          'olddate':this.state.olddate,
          'newdate':this.state.newdate,
          'oldtime':this.state.oldtime,
          'newtime':this.state.newtime,
          'oldroom':this.state.oldroom,
          'newroom':this.state.newroom,
           }

           let body2={
            'fac_id':2,
           }
          console.log("dropdown value");
          let self=this;
          console.log(body);

          await axios({method:'post',
          url:'http://192.168.1.131:8000/api/post_classreschedules/',
          //url:'http://192.168.43.137:8000/api/post_course_assign_mix/',
          data:[body]  }).then(res =>{
            console.log("responese........",res.data)}).catch(error =>{
              console.log(error)
      });
    this.setState({cards:true});
  }



  render() {
    return (
      <div className="animated fadeIn">
      {this.state.cards
        ?(<ClassReSchCards/>)
        :(
         <center>
            <Card>
              <CardHeader>
              <button onClick={() => this.handlePressSentPosts()}> View previous posts </button><br></br>
                <strong>Class Reschedules</strong> Details
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Course</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select" value={this.state.course}
                        onChange={this.handleChange2('course')}>
                        <option value="0">Please select</option>
                        <option value="2">ASE2</option>
                        <option value="4">YOU AND THE WORLD</option>
                      </Input>
                    </Col>
                  </FormGroup>
                   <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">old room</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select" value={this.state.oldroom}
                        onChange={this.handleChange2('oldroom')}>
                        <option value="0">Please select</option>
                        <option value="101">101</option>
                        <option value="103">103</option>
                        <option value="105">105</option>
                        <option value="107">107</option>
                        <option value="113">113</option>
                        <option value="115">115</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Old date </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="date-input" name="date-input" value={this.state.olddate}
                      onChange={this.handleChange4('olddate')} placeholder="date"  />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="time-input">Old Time</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="time" id="time-input" name="time-input" value={this.state.oldtime}
                      onChange={this.handleChange('oldtime')} placeholder="time" />
                    </Col>
                  </FormGroup>

                   <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">newroom</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select" value={this.state.newroom}
                        onChange={this.handleChange('newroom')}>
                        <option value="0">Please select</option>
                        <option value="101">101</option>
                        <option value="103">103</option>
                        <option value="105">105</option>
                        <option value="107">107</option>
                        <option value="113">113</option>
                        <option value="115">115</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">New date </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="date-input" name="date-input" value={this.state.newdate}
                      onChange={this.handleChange4('newdate')} placeholder="date"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="time-input">New Time</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="time" id="time-input" name="time-input" value={this.state.newtime}
                      onChange={this.handleChange('newtime')} placeholder="time" />
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

export default ClassReSchedules;
