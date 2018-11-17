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

class App extends Component {
constructor(props){
  super(props);
  this.state={
    isLogged:false
  }
}

  render() {
    let option = this.props.option;
    console.log("In app2 after login", option);
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/register" name="Register Page" component={Register} />
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          <Route path="/" name="Home" render={(props) => <DefaultLayout member={option}/>} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
