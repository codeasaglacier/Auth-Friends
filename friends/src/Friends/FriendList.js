import React, { useState, useEffect } from 'react'
import { axiosAuth } from '../Login/axiosAuth'
import Friend from './Friend'


function FriendsList() {

  const [ friends, setFriends ] = useState( [] )

  useEffect( () => {
    axiosAuth()
    .get( 'http://localhost:5000/api/friends' )
    .then( ( res ) => {
      setFriends( res.data )
    })
    .catch( ( err ) => console.log( err ) )
  })

  return (
    <div>
      { friends.map( ( friend ) => {
        return <Friend key = { friend.id } friend = { friend } />
      })}
    </div>
  )
}

export default FriendsList