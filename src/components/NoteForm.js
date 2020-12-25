import React, { useContext, useState } from 'react'
import { TodoContext } from '../contexts/TodoContext'

function NoteForm({firstField, secondField, buttonText}) {
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
        className="ui large inverted form segment">
        <div className="field">
          <input
            onChange={e => setText(e.target.value)} 
            value={text} 
            placeholder={firstField}
            type="text" 
            name="title" 
            required
          />
        </div>
        <div className="field">
          <textarea 
            onChange={e => setTextarea(e.target.value)}
            value={textarea} 
            placeholder={secondField}
            name="description"
            rows='3' 
          />
        </div>
        <button 
          className="ui inverted large button" 
          type="submit">{buttonText}</button>
      </form>
  )
}

export default NoteForm
