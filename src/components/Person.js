import React, { Component } from 'react';
class Person extends Component {
    render() { 
        return (
                <div className={this.props.name}>
                    <h3>{this.props.role}</h3>
                    <h1>{this.props.name2}</h1>
                    <p>{this.props.bio}</p>
                </div>
            );
    }
}
 
export default Person;