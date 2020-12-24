import React, { createContext, useState } from 'react'

export const BinContext = createContext()

const BinContextProvider = (props) => {
  const [discarded, setDiscarded] = useState([])

  const addToBin = (title, body, id) => {
    setDiscarded([...discarded, {title, body, id}])
  }
  
  const deleteNote = id => {
    setDiscarded(discarded.filter(card => id !== card.id))
  }

  return(
    <BinContext.Provider value={{ discarded, addToBin, deleteNote }}>
      { props.children }
    </BinContext.Provider>
  )
}

export default BinContextProvider