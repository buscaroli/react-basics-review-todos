import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import { BinContext } from '../contexts/BinContext'

function TodoCard({title, body, id}) {
  const { removeTodo } = useContext(TodoContext)
  const { addToBin } = useContext(BinContext)

  const handleRemoveTodo = (e) => {
    e.preventDefault()
    
    addToBin(title, body, id)
    removeTodo(id)
  } 

  return (
    <div className='ui cards'>
    <div key={ id } className="card">
      <div className="content">
        <h3 className="center aligned large sub header">
          { title }
        </h3>
        <h4 className="description">
          { body }
        </h4>
      </div>
      
        <div className="ui center aligned segment">
          <div
            onClick={handleRemoveTodo} 
            className="ui basic orange button">
            Move to Bin
          </div>
        </div>
      
    </div> 
    </div>
  )
}

export default TodoCard
