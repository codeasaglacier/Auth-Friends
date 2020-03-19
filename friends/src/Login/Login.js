import React, { useState } from 'react'
import { axiosAuth } from './axiosAuth'



const Login = ( props ) => {
  const [ streetCred, setStreetCred ] = useState( {} )

  const login = e => {
    e.preventDefault()
      axiosAuth().post( `http://localhost:5000/api/login`, streetCred )
      .then( res => {
        localStorage.setItem( 'token', res.data.payload )
      } )
      .catch( err => console.log( 'Error:', err ))
  }

  const handleBusiness = e => {
    setStreetCred( {
      ...streetCred,
      [ e.target.name ]: e.target.value,
    } )
  }

  return (
    <div>
      <form onSubmit = { login }>
        <input
          type = 'text'
          name = 'username'
          value = { streetCred.username }
          onChange = { handleBusiness }
        />
        <input
          type = 'password'
          name = 'password'
          value = { streetCred.password }
          onChange = { handleBusiness }
        />
        <button>Log In</button>
      </form>
    </div>
  )
}



export default Login