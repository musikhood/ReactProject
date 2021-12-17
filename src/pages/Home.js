import React from 'react';
import {NavLink} from 'react-router-dom'
class Home extends React.Component {
    render() { 
        return (
            <main className='Home'>
                <div className='Home__about'>
                    <h3 className='Home__h3'>So, you want to travel to</h3>
                    <h1 className='Home__h1'>Space</h1>
                    <p className='Home__p'>
                        Let's face it; if you want to go to space,
                        you might as well genuinely go to outer space
                        and not hover kind of on the edge of it. Well
                        sit back, and relax because we'll give you a
                        truly out of this world experience!
                    </p>
                </div>
                <div className='Home__button'>
                    <NavLink to="/destination" exact>EXPLORE</NavLink>
                </div>
            </main>
        )
    }
}
 
export default Home;