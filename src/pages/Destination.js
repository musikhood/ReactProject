import React from 'react';
import Planet1 from '../images/destination/image-moon.png';
import Planet2 from '../images/destination/image-mars.png';
import Planet3 from '../images/destination/image-europa.png';
import Planet4 from '../images/destination/image-titan.png';
import Planet from '../components/Planet';
class Destination extends React.Component {
    state={
        currentPlanet: "moon"
    }
    planets=[
        {
            id: 1,
            name: "PlanetMoon",
            planet: "MOON",
            about: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            distance: "384,400 KM",
            time: "3 DAYS",
        },
        {
            id: 2,
            name: "PlanetMars",
            planet: "MARS",
            about: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            distance: "225 MIL. KM",
            time: "9 MONTHS",
        },
        {
            id: 3,
            name: "PlanetEuropa",
            planet: "EUROPA",
            about: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            distance: "628 MIL. KM",
            time: "3 YEARS",
        },
        {
            id: 4,
            name: "PlanetTitan",
            planet: "TITAN",
            about: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            distance: "1.6 BIL. KM",
            time: "7 YEARS",
        },
    ]
    handleClick=e=>{
        if(e.target.value===1){
            this.setState({
                currentPlanet: "moon"
            })
        }
        else if(e.target.value===2){
            this.setState({
                currentPlanet: "mars"
            })
        }
        else if(e.target.value===3){
            this.setState({
                currentPlanet: "europa"
            })
        }
        else if(e.target.value===4){
            this.setState({
                currentPlanet: "titan"
            })
        }
        this.handleChange(e)
    }
    handleChange=(e)=>{
        let li = document.querySelectorAll('.Destination__li')
        li.forEach(list=>list.className="Destination__li")
        e.target.className = "Destination__li active"
    }
    render() { 
        return (
            <main className='Destination'>
                <h3 className='Destination__h3'><span>01</span>Pick your destination</h3>
                <article className='Destination__article'>
                    <div className={'Destination__img-wrapper '+this.state.currentPlanet}>
                        <img src={Planet1} alt="Planet1"/>
                        <img src={Planet2} alt="Planet2"/>
                        <img src={Planet3} alt="Planet3"/>
                        <img src={Planet4} alt="Planet4"/>
                    </div>
                    <div className='Destination__about-wrapper'>
                        <ul className='Destination__ul'>
                            <li onClick={this.handleClick} value={1} className='Destination__li active'>MOON</li>
                            <li onClick={this.handleClick} value={2} className='Destination__li'>MARS</li>
                            <li onClick={this.handleClick} value={3} className='Destination__li'>EUROPA</li>
                            <li onClick={this.handleClick} value={4} className='Destination__li'>TITAN</li>
                        </ul>
                        <div className={'Destination__about '+this.state.currentPlanet}>
                            {this.planets.map(planet=><Planet key={planet.id} name={planet.name} name2={planet.planet} about={planet.about} distance={planet.distance} time={planet.time}/>)}
                        </div>
                    </div>
                </article>
            </main>
        );
    }
}
 
export default Destination;