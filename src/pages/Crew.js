import React from 'react';
import CrewMember1 from '../images/crew/image-douglas-hurley.png';
import CrewMember2 from '../images/crew/image-mark-shuttleworth.png';
import CrewMember3 from '../images/crew/image-victor-glover.png';
import CrewMember4 from '../images/crew/image-anousheh-ansari.png';
import Person from '../components/Person';

class Crew extends React.Component {
    state={
        currentPerson: "person1"
    }
    crewMembers=[
        {id:1,name: 'crew1',name2:'Douglas Hurley',role:"Commander",bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."},
        {id:2,name: 'crew2',name2:'Mark Shuttleworth',role:"Mission Specialist",bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."},
        {id:3,name: 'crew3',name2:'Victor Glover',role:"Pilot",bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."},
        {id:4,name: 'crew4',name2:'Anousheh Ansari',role:"Flight Engineer",bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."},
    ]
    handleClick=e=>{
        if(e.target.value===1){
            this.setState({
                currentPerson: "person1"
            })
        }
        else if(e.target.value===2){
            this.setState({
                currentPerson: "person2"
            })
        }
        else if(e.target.value===3){
            this.setState({
                currentPerson: "person3"
            })
        }
        else if(e.target.value===4){
            this.setState({
                currentPerson: "person4"
            })
        }
        this.handleChange(e)
    }
    handleChange=(e)=>{
        let li = document.querySelectorAll('.Crew__li')
        li.forEach(list=>list.className="Crew__li")
        e.target.className = "Crew__li active"
    }
    render() { 
        return (
            <main className='Crew'>
                <h3 className='Crew__h3'><span>02</span>Meet your crew</h3>
                <div className={'Crew__img-wrapper '+this.state.currentPerson}>
                    <img className='Crew__img' src={CrewMember1} alt="CrewMember1"/>
                    <img className='Crew__img' src={CrewMember2} alt="CrewMember2"/>
                    <img className='Crew__img' src={CrewMember3} alt="CrewMember3"/>
                    <img className='Crew__img' src={CrewMember4} alt="CrewMember4"/>
                </div>
                <div className='Crew__about-wrapper'>
                    <ul className='Crew__ul'>
                        <li onClick={this.handleClick} value={1} className='Crew__li active'></li>
                        <li onClick={this.handleClick} value={2} className='Crew__li'></li>
                        <li onClick={this.handleClick} value={3} className='Crew__li'></li>
                        <li onClick={this.handleClick} value={4} className='Crew__li'></li>
                    </ul>
                    <div className={'Crew__about '+this.state.currentPerson}>
                        {this.crewMembers.map(member=><Person key={member.id} name={member.name} name2={member.name2} role={member.role} bio={member.bio}/>)}
                        
                    </div>
                </div>
            </main>
        );
    }
}
 
export default Crew;