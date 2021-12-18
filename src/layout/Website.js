import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Nav from '../components/Nav';
import Home from '../pages/Home';
import Crew from '../pages/Crew';
import Technology from '../pages/Technology';
import Destination from '../pages/Destination';

export default class Website extends Component {
  state={
    bgname: "home"
  }
  componentDidMount(){
    this.changebg()
  }
  
  changebg=()=>{
    if(window.location.pathname === "/ReactProject/"){
      this.setState({
        bgname: "home"
      })
    }
    else if(window.location.pathname === "/ReactProject/destination"){
      this.setState({
        bgname: "destination"
      })
    }
    else if(window.location.pathname === "/ReactProject/crew"){
      this.setState({
        bgname: "crew"
      })
    }
    else if(window.location.pathname === "/ReactProject/technology"){
      this.setState({
        bgname: "technology"
      })
    }

  }
  render(){
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className={"Website "+this.state.bgname} >
          <Nav func={this.changebg}/>
          <main className='Website__main'>
            <Switch>
              <Route path="/" exact render={()=><Home func={this.changebg}/>}/>
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
