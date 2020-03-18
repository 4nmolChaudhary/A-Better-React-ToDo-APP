import React from 'react'
import avatar from '../images/avatar.png'
import ProjectContainer from './ProjectContainer'
import './Container.css'
import ListContainer from './ListContainer'

function Container() {

    return (
        <div className="MainContainer">
            <div className="LeftBar">
                <div className="Profile">
                    <img src={avatar} alt="avatar" className="Avatar" />
                    <p style={{ fontFamily: 'bisonBold', fontSize: 26, marginTop: '10px', marginBottom: '10px' }}>John Doe
                    </p>
                </div>
                <div style={{ padding: '0px 0px 10px 0px', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'sapce-around' }}>
                    <ProjectContainer />
                </div>
            </div>
            <div className="RightBar">
                <ListContainer />
            </div>
        </div>
    )
}

export default Container
