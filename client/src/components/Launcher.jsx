import React from 'react'

function Launcher({launcher}) {
  return (
        <tr>
            <td>{launcher.name}</td>
            <td>{launcher.city}</td>
            <td>{launcher.rocketType}</td>
        </tr>
    
  )
}

export default Launcher
