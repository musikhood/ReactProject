import React from 'react';
import {NavLink} from 'react-router-dom';
import '../css/style.css';
import Logo from '../images/shared/logo.svg';
import Hamburger from '../images/shared/icon-hamburger.svg';
import Close from '../images/shared/icon-close.svg';


export default class Nav extends React.Component{
    state={
        menuActive: false,
    }
    
    handleMenuClick=()=>{
        this.setState({
            menuActive: !this.state.menuActive
        })
    }
    
    render(){
        return(
            <nav className='Nav'>
                <img className='Nav__logo' src={Logo} alt="logo"/>
                <img 
                 onClick={this.handleMenuClick}
                 className='Nav__hamburger'
                 src={this.state.menuActive ? Close : Hamburger} 
                 alt="hamburger"/>
                <div className='Nav__line'></div>
                <ul className={this.state.menuActive ? 'Nav__ul NavActive' : 'Nav__ul' }>
                    <li className='Nav__li'><NavLink to="/" exact><span>00</span> Home</NavLink></li>
                    <li className='Nav__li'><NavLink to="/destination" ><span>01</span> Destination</NavLink></li>
                    <li className='Nav__li'><NavLink to="/crew" ><span>02</span> Crew</NavLink></li>
                    <li className='Nav__li'><NavLink to="/technology" ><span>03</span> Technology</NavLink></li>
                </ul>
            </nav>
        )
    }
}