import React, { createContext, useState, useEffect } from 'react'
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

  useEffect(() => {
    const localData = localStorage.getItem('todo_list')
    localData ? setTodos(JSON.parse(localData)) : setTodos([])
  }, [])

  useEffect(() => { 
    localStorage.setItem('todo_list', JSON.stringify(todos))
    
  }, [todos])

  return(
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      { props.children }
    </TodoContext.Provider>
  )
}

export default TodoContextProvider