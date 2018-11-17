import React, { Component } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import { AppSwitch } from '@coreui/react'
const axios = require('axios');

class EventsCards extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      dummycount:20,
      starPress:false,
      starPress1:false,
      array : []
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  cardData = (res) =>{
    console.log(res.status,"inside function");
    if(res.status == 200){
      console.log(res.data);
      
      let array2=res.data;
      let count = Object.keys(res.data).length;
      
      console.log(array2);
      this.setState({array:array2.reverse()})
      
    }
    else{
      console.log(res.status);
    }
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }
  handlePress = async () => {
    let self=this;
    console.log("entered function");

    await axios.get(`http://192.168.1.131:8000/api/events/`).then(res => {
      self.cardData(res);
    })
    //let array2 = [{'key1':'value1','key11':'value11'},{'key1':'value2','key11':'value22'}];

    //this.setState({array:array2})
    
  }

  componentWillMount(){
    this.handlePress();
  }

  render() {
    let self = this;
    return (
      <div className="animated fadeIn">
        <Row>
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
        </Row>
       
      </div>
    );
  }
}

export default EventsCards;
