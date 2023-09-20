import React from 'react'
import "./Player.css"
import Sidebar from './Sidebar'
import Body from './Body'

function Player({ spotify }) {
  return (
    <div className='player'>
        <div className='player_body'>
            <Sidebar />
            <Body />
        </div>
    </div>
  )
}

export default Player
