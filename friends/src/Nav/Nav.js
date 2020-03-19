import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {

  const Logout= () => {
    localStorage.removeItem( 'token' )
    window.location.reload()
  }

  return (
    <div>
      <nav>
        <Link to = '/public'>Public Page</Link>
        <Link to = '/login'>Login</Link>
        <Link to = '/friends'>Friends</Link>
        <Link to = '/addFriends'>Add Friends</Link>
        <button onClick = { Logout }>Logout</button>
      </nav>
    </div>
  )
}

export default Nav