import React from 'react'
import { axiosAuth } from '../Login/axiosAuth'


function Friend( props ) {

  const unFriend = ( id ) => {
    axiosAuth()
      .delete( `http://localhost:5000/api/friends/${ id }`)
      .then( res => {
        window.location.reload()
      })
      .catch( err => console.log( 'Could not unFriend:', err ) )
  }

  return (
    <div>
      <h1>Name: { props.friend.name }</h1>
      <p>Age: { props.friend.age }</p>
      <p>Email: { props.friend.email }</p>
      <button onClick = { () => unFriend( props.friend.id ) }>Unfriend</button>
    </div>
  )
}

export default Friend