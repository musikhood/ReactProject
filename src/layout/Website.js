import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Nav from '../components/Nav'

export default class Website extends Component {
  render(){
    return (
      <Router>
        <div className="Website">
          <Nav/>
          <main className='Website__main'>
            main
          </main>
        </div>
      </Router>
    )
  }
}
