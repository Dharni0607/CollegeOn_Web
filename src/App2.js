import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import EventsCards from './views/Base/EventsCards/EventsCards';
//C:\DHARANI\sem-5\ITS\Website\CollegeOnWeb\src\views\Base\EventsCards
// Containers
import { DefaultLayout } from './containers';


// Pages
import { Login, Page404, Page500, Register } from './views/Pages';

// import { renderRoutes } from 'react-router-config';

class App2 extends Component {
constructor(props){
  super(props);
  this.state={
    isLogged:false
  }
}

  render() {
    let option = this.props.option;
    let details = this.props.details;
    let url = this.props.url;
    console.log("In app2 after login", option);
    return (
      <HashRouter>
        <Switch>
          
          <Route path="/" name="Home" render={(props) => <DefaultLayout member={option} details={details} url={url} />} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App2;
