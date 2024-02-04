import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faMoon }from '@fortawesome/free-solid-svg-icons'
const Icon = (props) => {
    const mode=props.mode;
  return (
    <div>{(mode!=='light'?<FontAwesomeIcon class="my-2" icon={faMoon} style={{height:"30px",color:"white",paddingLeft:"10px",cursor:"pointer",paddingTop:"2px"}} onClick={props.toggleMode} />:<FontAwesomeIcon icon={faMoon} class="my-2" style={{height:"30px",cursor:"pointer",paddingLeft:"15px"}} onClick={props.toggleMode} />)}
    </div>
  )
}

export default Icon