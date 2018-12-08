import React, { Component } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import { AppSwitch } from '@coreui/react'
const axios = require('axios');

class PreClassReqCards extends Component {
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
      array : [],
      course_ids_names:[],
      
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }


  course_id_name = async(res) =>{
    let ids=[];
    let names=[];
    //console.log("ids&&&&&names",res.data);
    for(let i=0;i<res.data.length;i++){
      this.state.course_ids_names[res.data[i]["course_id"]] = res.data[i]["course_name"];
    }
    
    let array2 = this.state.array;
    for(let i=0;i<this.state.array.length;i++){
      array2[i]["course_name"] = this.state.course_ids_names[array2[i]["course_id"]];
    }
    this.setState({array:array2});
    console.log("final_mapped",this.state.array);
  }
  cardData = (res) =>{
    console.log(res.status,"inside PreClassReqCards");
    let self=this;
    if(res.status == 200){
      console.log(res.data);
       let final_url2 = this.props.url + "/api/course/";
         axios.get(final_url2).then(res => {
          self.course_id_name(res);
        })
      let array2=[];
      let k=0;
      
      for(let i=0;i<res.data.length;i++){
        if(res.data[i]["faculty_id"]==this.props.details[0]["slno"]){
          array2.push(res.data[i]);
          //array2[k]["course_name"] = this.state.course_ids_names[array2[k]["course_id"]];
        }
      }
      let count = Object.keys(res.data).length;
      for(let i=0;i<array2.length;i++){
        let date_time=array2[i]["post_time"];
        let list=String(date_time);
        list = list.split("T");
        let date=list[0];
        let time=String(list[1]);
        time = time.split(".")
        array2[i]["post_time"] = date + ", " + time[0];
      }
      this.setState({array:array2.reverse()})
      console.log("pre_class_req",array2);
      
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

    let final_url = this.props.url + "/api/preclassreq/";
    await axios.get(final_url).then(res => {
      self.cardData(res);
    })
  }
  componentWillMount(){
    this.handlePress();
  }

  render() {
    console.log("in pre req_____cards", this.props);
    let self = this;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
          {self.state.array.map(function(x,i){
          return (<Card key={i} className="card-accent-danger">
              <CardHeader>
                <strong style={{fontSize: 20, color:'rgba(205,98,106,1)'}}>{self.state.array[i]["course_name"]}</strong><br></br><small>{self.state.array[i]["post_time"]}</small>
              </CardHeader>
              <CardBody>
    
                {self.state.array[i]["content"]}<br></br>
                <i><b><u>Timings</u></b> : {self.state.array[i]["need_day"]}</i><br></br>
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

export default PreClassReqCards;
