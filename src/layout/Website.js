import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Nav from '../components/Nav';
import Home from '../pages/Home';
import Crew from '../pages/Crew';
import Technology from '../pages/Technology';
import Destination from '../pages/Destination';

export default class Website extends Component {
  render(){
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="Website">
          <Nav/>
          <main className='Website__main'>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/destination" exact component={Destination}/>
              <Route path="/crew" exact component={Crew}/>
              <Route path="/technology" exact component={Technology}/>
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}
