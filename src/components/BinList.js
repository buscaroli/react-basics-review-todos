import React, { useContext } from 'react'
import { BinContext } from '../contexts/BinContext'
import BinCard from './BinCard'

function BinList() {
  const { discarded } = useContext(BinContext)

  const renderList = discarded.map( note =>
    <BinCard title={note.title} body={note.body} id={note.id} key={note.id}/>
  ) 

  return (
    <div>
      { renderList }
    </div>
  )
}

export default BinList
