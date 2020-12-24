import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import TodoCard from './TodoCard'

function TodoList() {
  const { todos } = useContext(TodoContext)

  const renderList = todos.map( todo =>
    <TodoCard title={todo.title} body={todo.body} id={todo.id} key={todo.id}/>
  ) 

  return (
    <div>
      { renderList }
    </div>
  )
}

export default TodoList
