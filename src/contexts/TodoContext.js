import React, { createContext, useState } from 'react'
import { v1 as uuid } from 'uuid'

export const TodoContext = createContext()

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([])

  const addTodo = (title, body, id=uuid()) => {
    setTodos([...todos, {title, body, id }])
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => id !== todo.id))
  }

  return(
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      { props.children }
    </TodoContext.Provider>
  )
}

export default TodoContextProvider