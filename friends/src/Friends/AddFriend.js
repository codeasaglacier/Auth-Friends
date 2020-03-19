import React, { useState } from 'react'
import { axiosAuth } from '../Login/axiosAuth'


function AddFriend( props ) {
  const [ newFriend, setNewFriend] = useState( {} )

  const handleChanges = ( e ) => {
    setNewFriend( {
      ...newFriend,
      [ e.target.name ]: e.target.value
    } )
  }

  const addFriend = ( e ) => { 
    e.preventDefault()
    axiosAuth()
      .post( `http://localhost:5000/api/friends`, newFriend )
      .then( ( res ) => {
        props.history.push( '/protected' )
      } )
      .catch( err => console.log( err ) )
  }

  return (
    <div>
      <form onSubmit = { addFriend }>
        <input 
          placeholder = 'name' 
          type = 'type'
          name = 'name'
          value = { newFriend.name }
          onChange = { handleChanges }
        />
        <input 
          placeholder = 'age' 
          type = 'number'
          name = 'age'
          value = { newFriend.age }
          onChange = { handleChanges }
        />
        <input 
          placeholder = 'email' 
          type = 'type'
          name = 'email'
          value = { newFriend.email }
          onChange = { handleChanges }
        />
        <button type = 'submit'>Add Friend</button>
      </form>
    </div>
  )
}

export default AddFriend