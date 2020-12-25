import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import { BinContext } from '../contexts/BinContext'

function BinCard({ title, body, id }) {
  const { addTodo } = useContext(TodoContext)
  const { deleteNote } = useContext(BinContext)

  const handleRecover = (e) => {
    e.preventDefault()

    addTodo(title, body, id)
    deleteNote(id)
  }

  const handleDelete = (e) => {
    e.preventDefault()

    deleteNote(id)
  }

  return (
    <div>
      <div className='ui cards'>
        <div key={ id } className="ui fluid card">
          <div className="content">
            <h3 className="ui inverted red segment center aligned large sub header">
              { title }
            </h3>
            <h4 className="description">
              { body }
            </h4>
          </div>
      
          <div className="ui two buttons">
            <div
              onClick={handleRecover} 
              className="ui inverted green button">
              Recover
            </div>
            <div
              onClick={handleDelete} 
              className="ui inverted red button">
              Delete
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default BinCard
