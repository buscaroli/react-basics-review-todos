import React, { useContext, useState } from 'react'
import { TodoContext } from '../contexts/TodoContext'

function NoteForm() {
  const [text, setText] = useState('')
  const [textarea, setTextarea] = useState('')
  const { addTodo } = useContext(TodoContext)
  
  const onSubmitHandle = e => {
    e.preventDefault()

    addTodo(text, textarea)
    setText('')
    setTextarea('')
  }

  return (
      <form
        onSubmit={onSubmitHandle} 
        className="ui large purple inverted form segment">
        <div className="field">
          <input
            onChange={e => setText(e.target.value)} 
            value={text} 
            type="text" 
            name="title" 
            placeholder="Title"/>
        </div>
        <div className="field">
          <textarea 
            onChange={e => setTextarea(e.target.value)}
            value={textarea} 
            name="description"
            rows='3' 
            placeholder="Description"/>
        </div>
        <button 
          className="ui inverted large button" 
          type="submit">Done!</button>
      </form>
  )
}

export default NoteForm
