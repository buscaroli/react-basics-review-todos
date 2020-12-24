import React from 'react'
import TodoList from './TodoList'
import TodoContextProvider from '../contexts/TodoContext'
import BinContextProvider from '../contexts/BinContext'
import BinList from './BinList'
import NoteForm from './NoteForm'

function App() {
  return (
    <div>  
      <div
        style={{marginBottom: '30px'}} 
        className='ui segment bottom purple attached inverted very padded'>
        <h1 className='ui centered huge header'
      >
          The TO-DO App with Context
        </h1>     
      </div >
      <TodoContextProvider>
        
        <div
          style={{marginBottom: '30px'}} 
          className='ui container'>
          <NoteForm />
        </div>

        <div className='ui grid container'>
          <div className='ten wide column'>
            <div className='ui inverted segment purple'>
              <h2 className='ui inverted header centered'>
                TODOs
              </h2>
            </div>
          </div>

          <div className='six wide column'>
            <div className='ui inverted segment purple'>
              <h2 className='ui inverted header centered'>
                BIN
              </h2>
            </div>
          </div>
        </div>

        <div className='ui container'>
          <div className='ui grid container'>
            <BinContextProvider>  
              
              <div className='ten wide column'>        
                <TodoList />
              </div>
             
              <div className='six wide column'>
                <BinList />
              </div>
  
            </BinContextProvider>     
          </div>
        </div>
      </TodoContextProvider>
    </div>
  )
}

export default App
