import React from 'react'
import TodoList from './TodoList'
import TodoContextProvider from '../contexts/TodoContext'
import BinContextProvider from '../contexts/BinContext'
import BinList from './BinList'
import NoteForm from './NoteForm'
import Titles from './Titles'
import Header from './Header'

function App() {
  return (
    <div style={{background: 'lightgrey'}}>  
      <Header text='The TODO App with Context'/>
      
      <TodoContextProvider>  
        <div
          style={{marginBottom: '30px'}} 
          className='ui container'>
          <NoteForm firstField='Title' secondField='Description' buttonText='Done!'/>
        </div>

        <Titles firstTitle='TO-DO' secondTitle='To Bin'/>

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
