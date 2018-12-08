import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

const axios = require('axios');


class Tables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      days : ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      slots :[1,2,3,4,5,6,7,8,9,10,11],
      class_types : ["","sec A","sec B","sec A - lab","sec B - lab", "sec C - lab","sec A - tut", "sec B - tut","",""],
      final_time_table : [],
      value : 'coco',
    };
      // this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
  }

  tableData = (res) =>{
    console.log(res.data,"inside function");
    let len  =  res.data.length;
    let array2 = this.state.final_time_table;
    let row_no;
    let col_no;
    let row_value;
    let col_value;
    for(let i=0;i<len;i++){
        row_no = res.data[i].slot_no - 1;
        col_value = res.data[i].day;
        for(let j=0;j<this.state.days.length;j++){
          if(this.state.days[j] == col_value){
            col_no = j;
            break;
          }
        }
        let type = this.state.class_types[res.data[i].class_type ];
        array2[row_no][col_no] = array2[row_no][col_no]  + res.data[i].c_name + "-" + type + "(" + res.data[i].rid + "),"  ;


    }
    console.log("final array::::", array2);
    this.setState({final_time_table:array2})
    
  }

  load_timetable = async () => {
    let self=this;
    //let array2 = [['gsavd','ada','sad'],['gsavd','ada','sad']];
    let array2=[];
    let temp=[];
    console.log("entered timetable function");
    for(let i=0; i<self.state.slots.length; i++){
      for(let j=0;j<self.state.days.length;j++){
       //temp.push(self.state.slots[i]+self.state.days[j]);
       temp.push("");
       if(i==2 && j==1)
        temp.push("*Short Break*");
       if(i==5 && j==1)
        temp.push("*Lunch Break*");
      }
      console.log("printing temp day wise",temp);
      array2.push(temp);
      temp=[];
    }
    self.setState({final_time_table:array2})
    console.log(array2);
    await axios.get('http://10.0.48.229:8080/timetableNew/').then(res => {
      self.tableData(res);;
    })
    // //let array2 = [{'key1':'value1','key11':'value11'},{'key1':'value2','key11':'value22'}];

    
  }

  componentWillMount(){
    this.load_timetable();
  }


  render() {

  var table_rows = [];
  var table_value = [];
  var slot_timings =["9:00AM - 10:00AM","10:00AM - 11:00AM", "11:00AM - 11:15AM", "11:15AM - 12:15PM",
   "12:15PM - 1:15PM", "1:15PM - 1:30PM","1:30PM - 2:30PM","2:30PM - 3:30PM","3:30PM - 4:30PM","4:30PM - 5:30PM","5:30PM - 6:30PM",]
  var k=0;
  let self=this;
  for(let i = 0; i < self.state.final_time_table.length; i++){
      table_rows.push(
        <tr key = {i}>
          <td><Badge color="secondary">{slot_timings[k]}</Badge></td>
          <td>{self.state.final_time_table[i][0]}</td>
          <td>{self.state.final_time_table[i][1]}</td>
          <td>{self.state.final_time_table[i][2]}</td>
          <td>{self.state.final_time_table[i][3]}</td>
          <td>{self.state.final_time_table[i][4]}</td>
          <td>{self.state.final_time_table[i][5]}</td>
        </tr>
      )
    k++;
  }
    return (
     
      <div className="animated fadeIn">
        <Row>
      
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Time-table
              </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead>
                  <tr>
                    <th>SLOTS</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                  </tr>
                  </thead>
                  <tbody>
                  {table_rows}
                  
                  </tbody>
                </Table>
               
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
      
    );
  }
}

export default Tables;
