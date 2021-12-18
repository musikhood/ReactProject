import React, { Component } from 'react';
class Planet extends Component {
    render() { 
        return (
            <div className={this.props.name}>
                <h1 className="Destination__h1">{this.props.name2}</h1>
                <p className='Destination__p'>{this.props.about}</p>
                <hr></hr>
                <article className='Destination__parameters'>
                    <article className='Destination__distance'>
                        <h4>AVG. DISTANCE</h4>
                        <h1>{this.props.distance}</h1>
                    </article>
                    <article className='Destination__travel-time'>
                        <h4>EST. TRAVEL TIME</h4>
                        <h1>{this.props.time}</h1>
                    </article>
                </article>
            </div>
        );
    }
}
 
export default Planet;