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
import EventsCards from '../EventsCards/EventsCards.js'
import Cards from '../Cards/Cards.js'
//import App from '.../App2.js'
import DefaultLayout from '../../../containers/DefaultLayout/DefaultLayout.js'
//import DateTimePickerInput from 'coreui/lib/components/DateTimePickerInput';

//import TimePicker from 'react-time-picker';
//import moment from 'moment';
const axios=require('axios');

class Events extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      cards:false,
    };
  }
  
  state = {
        ug:"0",
        dept:0,
        course:0,
        labelWidth: 0,
        eventName: '',
        eventType:'',
        description:'',
        time: '',
        date: '',
        courses:[],
        //happeningOn: moment()
      };

  onChangetime = time => this.setState({ time })
  handleChange = y => event => {
      this.setState({ [y]: event.target.value });
  };

  handleChange3 = z => event => {
      this.setState({ [z]: Number(event.target.value) });
  };

   handleChange2 = x =>event => {
    this.setState({ [x]: event.target.value });     
   };


  handleChange4 = x =>event => {
    
        var q = new Date();
        var m = q.getMonth()+1;
        var d = q.getDay();
        var y = q.getFullYear();
        var date = moment();
        //this.setState({ [x]: event.target.value });
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
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }
  handlePressSentPosts = () =>{
      this.setState({cards:true});
  }
  handlePress = async () => {
        console.log("clicked submit");
        
       if(this.state.ug ==="0" || this.state.dept ===0 || this.state.date ===undefined || this.state.time ===undefined || this.state.course ===0 || this.state.eventName === '' || this.state.eventType === '' || this.state.description === ''){
          alert("Please fill all the fields");
          return;
        }
        let body={
          'studentdegree':this.state.ug,
          'department_id':this.state.dept,
          'course_id':this.state.course,
          'event_name':this.state.eventName,
          'event_type':this.state.eventType,
          'description':this.state.description,
          'event_datetime': `${this.state.date} , ${this.state.time}`,
          'post_time':moment()
           }

          console.log("dropdown value");
          let self=this;
          console.log(body);
          let final_url = this.props.url + "/api/post_events/";
          await axios({method:'post',
          url:final_url,
          data:[body]  }).then(res =>{
            console.log(res)}).catch(error =>{
              console.log(error)
      });
      this.setState({cards:true});
  }

  get_courses = async () => {
    let self=this;
    console.log("entered function ClassReSchedules");
    let final_url = this.props.url + "/api/course/";
    await axios.get(final_url).then(res => {
      this.setState({courses:res.data});
    })
    
    //let array2 = [{'key1':'value1','key11':'value11'},{'key1':'value2','key11':'value22'}];

    //this.setState({array:array2})
    
  }
  componentWillMount(){
    this.get_courses();
  }

  render() {
    let option = this.props.option;
    let details = this.props.details;
    let url = this.props.url;
    console.log("All_courses", this.state.courses);
    let drop_down_options = [];
    let k=0;
    drop_down_options.push(<option key={k} value="0">Please select</option>);
    if(this.state.courses!= undefined){
      for(let i=0;i<this.state.courses.length;i++){
        drop_down_options.push(<option key={i+1} value={this.state.courses[i]["course_id"]}>{this.state.courses[i]["course_name"]}</option>);
      }
    }
    return (
      <div className="animated fadeIn">
      {this.state.cards
        ?(<EventsCards details={details} option={option} url={url}/>)
        :(<center>

            <Card>
              <CardHeader>
              <button onClick={() => this.handlePressSentPosts()}> View previous posts </button><br></br>
                <strong>Upcoming Event</strong> Details
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  
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
                      <Label htmlFor="select">Department</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select" value={this.state.dept}
                        onChange={this.handleChange3('dept')}>
                        <option value="0">Please select</option>
                        <option value="1">ALL</option>
                        <option value="2">CSE</option>
                        <option value="3">ECE</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Course</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select" value={this.state.course}
                        onChange={this.handleChange3('course')}>
                        {drop_down_options}
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Event Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" value={this.state.eventName}
                      onChange={this.handleChange2('eventName')} placeholder="Text" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Event type</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" value={this.state.eventType}
                      onChange={this.handleChange2('eventType')} placeholder="Text" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Date</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="date-input" name="date-input" value={this.state.date}
                      onChange={this.handleChange4('date')} placeholder="date" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="time-input">Time</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="time" id="time-input" name="time-input" value={this.state.time}
                      onChange={this.handleChange2('time')} placeholder="time" />
                    </Col>
                  </FormGroup>
                  
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Description</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                             value={this.state.description}
                      onChange={this.handleChange2('description')} placeholder="Content..." />
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

export default Events;
