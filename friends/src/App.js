import React from 'react'
import { Route } from 'react-router-dom'
import Login from './Login/Login'
import Public from './Public/Public'
import FriendsList from './Friends/FriendList'
import PrivateRoute from './Protected/PrivateRoute'
import AddFriend from './Friends/AddFriend'
import Nav from './Nav/Nav'


function App () {

  return(
    <div>
      <h1>FrienderKeeper</h1>
      <Nav />
      <Route
        path = '/public'
        component = { Public }
      />
      <Route
        path = '/login'
        component = { Login }
      />
      <PrivateRoute
        path = '/friends'
        component = { FriendsList }
      />
      <PrivateRoute
        path = '/addFriends'
        component = { AddFriend }
      />
    </div>
  )
}

export default App