import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Public() {

  const [ cat, setCat ] = useState( {} )

  useEffect( () => {
    axios
      .get( `https://api.thecatapi.com/v1/images/search` )
      .then( res => {
        setCat( res.data[0].url )
      })
  }, []) 

  return (
    <div>
     <img src = { cat } alt = 'Cat' />
    </div>
  )
}
export default Public