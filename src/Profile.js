import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Profile = (props) => {
    const {user} =useAuth0();
   
  return (
   
<div style={{color: `${(props.mode === 'light' ? 'black' : 'white')}`}}>
    Welcome {user.name}
  </div>
  )
}

export default Profile