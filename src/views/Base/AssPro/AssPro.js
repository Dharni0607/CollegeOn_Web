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
import AssProCards from '../AssProCards/AssProCards.js'
const axios=require('axios');

class AssPro extends Component {
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

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  state = {
        ug:'',
        type:0,
        course:'0',
        assignmentName: '',
        description:'',
        date:'',
        cards:false,
        time:'',
        
        courses:[],
        flag: false,
        //happeningOn: moment()
      };
  handleChange = y => event => {
      this.setState({ [y]: event.target.value });
  };
  handleChange3 = z => event => {
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

        if( this.state.type ===0 || this.state.date ===undefined || this.state.time ===undefined || this.state.course ==='0'|| this.state.assignmentName === ''  || this.state.description === ''){
          alert("Please fill all the fields");
          return;
        }
        let body={
          'studentdegree':'ug',
          'course_id':this.state.course,
          'name':this.state.assignmentName,
          'type':this.state.type,
          'description':this.state.description,
          'deadline': `${this.state.date}  ${this.state.time}`,
          'post_time':moment(),
           }

          console.log("dropdown value");
          let self=this;
          console.log(body);
          let final_url = this.props.url + "/api/post_assignments/";
          await axios({method:'post', url:final_url,
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
    //this.faculty_course();
    //console.log("In assignment prop +++=======()()()()",this.props);

    let option = this.props.option;
    let details = this.props.details;
    let url = this.props.url;
    let self =this;
    console.log("All_courses", this.state.courses);
    let drop_down_options = [];
    let k=0;
    drop_down_options.push(<option key={k} value="0">Please select</option>);
    if(this.state.courses!= undefined){
      for(let i=0;i<this.state.courses.length;i++){
        if(this.state.courses[i]["faculty_id"]==details[0]["slno"])
        drop_down_options.push(<option key={i+1} value={this.state.courses[i]["course_id"]}>{this.state.courses[i]["course_name"]}</option>);
      }
    }
    return (
      <div className="animated fadeIn">
      {this.state.cards
        ?(<AssProCards details={details} option={option} url={url}/>)
        :(
         <center>
            <Card>
              <CardHeader>
              <button onClick={() => this.handlePressSentPosts()}> View previous posts </button><br></br>
                <strong>Assignment/Project</strong> Details
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  
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
                      <Label htmlFor="select">Type</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="ug" id="ug-helper" value={this.state.type}
                        onChange={this.handleChange('type')}>
                        <option value="0">Please select</option>
                        <option value="assignment">assignment</option>
                        <option value="project">Project</option>
                      </Input>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" value={this.state.assignmentName}
                      onChange={this.handleChange('assignmentName')} placeholder="Text" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Date of DeadLine</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="date-input" name="date-input" value={this.state.date}
                      onChange={this.handleChange4('date')} placeholder="date" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="time-input">Time of DeadLine</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="time" id="time-input" name="time-input" value={this.state.time}
                      onChange={this.handleChange('time')} placeholder="time" />
                    </Col>
                  </FormGroup>
                  
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Description</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                             value={this.state.description}
                      onChange={this.handleChange('description')} placeholder="Content..."/>
                    </Col>
                  </FormGroup>

                  </Form>
              </CardBody>
              <CardFooter>
               <Button onClick={() => this.handlePress()}>Submit</Button>
              </CardFooter>
            </Card>
        </center> )}
      </div>
    );
  }
}

export default AssPro;
