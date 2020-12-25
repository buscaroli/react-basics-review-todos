import React, { createContext, useState, useEffect } from 'react'

export const BinContext = createContext()

const BinContextProvider = (props) => {
  const [discarded, setDiscarded] = useState([])

  const addToBin = (title, body, id) => {
    setDiscarded([{title, body, id}, ...discarded])
  }
  
  const deleteNote = id => {
    setDiscarded(discarded.filter(card => id !== card.id))
  }

  useEffect(() => {
    const localData = localStorage.getItem('discarded_list')
    localData ? setDiscarded(JSON.parse(localData)) : setDiscarded([])
  }, [])

  useEffect(() => {
    localStorage.setItem('discarded_list', JSON.stringify(discarded))
    
  }, [discarded])

  return(
    <BinContext.Provider value={{ discarded, addToBin, deleteNote }}>
      { props.children }
    </BinContext.Provider>
  )
}

export default BinContextProvider