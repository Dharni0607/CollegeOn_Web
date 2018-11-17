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

class Forms extends Component {
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
        date1: '',
        date2: '',
        array : []
        //happeningOn: moment()
      };


  handleChange4 = x =>event => {
        this.setState({ [x]: event.target.value })
   };
cardData = (res) =>{
    console.log(res.status,"inside function");
    if(res.status == 200){
      console.log(res.data);
      
      let array2=res.data;
      let count = Object.keys(res.data).length;
      
      console.log(array2);
      this.setState({array:array2.reverse()});
      this.setState({cards:true})
    }
    else{
      console.log(res.status);
    }
    }
   handlePress = () =>{
        let self=this;
      console.log("date1", Date(this.state.date1));
      
      axios.get("http://192.168.43.137:8000/api/events/").then(res => {
      self.cardData(res);
    })
      console.log("date2", Date(this.state.date2));
  }

  render() {
    let self=this;
    return (
      <div className="animated fadeIn">
      {this.state.cards
        ?(<div><Row>
          <Col>
          {self.state.array.map(function(x,i){
          return (<Card key={i} className="card-accent-danger">
              <CardHeader>
                <strong style={{fontSize: 20, color:'rgba(205,98,106,1)'}}>{self.state.array[i]["event_type"]}</strong><br></br><small>{self.state.array[i]["post_time"]}</small>
              </CardHeader>
              <CardBody>
                <strong style={{fontSize: 16, color:'rgba(86,57,71,1)'}}>{self.state.array[i]["event_name"]}</strong><br></br>
                {self.state.array[i]["description"]}<br></br>
                <i><b><u>Timings</u></b> : {self.state.array[i]["event_datetime"]}</i><br></br>
              </CardBody>
            </Card>)
         })
       }
          </Col>
        </Row></div>)
        :(
         <center>
            <Card>
              <CardHeader>
              
                <strong>ATesting/Project</strong> 
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  
                 

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Date1</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="date-input" name="date-input" value={this.state.date}
                      onChange={this.handleChange4('date1')} placeholder="date" />
                    </Col>
                  </FormGroup>

                 <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Date2</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="date-input" name="date-input" value={this.state.date}
                      onChange={this.handleChange4('date2')} placeholder="date" />
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

export default Forms;
