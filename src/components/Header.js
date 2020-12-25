import React from 'react'

function Header({text}) {
  return (
    <div
      style={{marginBottom: '30px'}} 
      className='ui segment bottom purple attached inverted very padded'
    >
      <h1 className='ui centered huge header'>
        {text}
      </h1>     
    </div>
  )
}

export default Header
