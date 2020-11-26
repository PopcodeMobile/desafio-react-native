import React from 'react'
import { ToDoProvider } from './Context/TodoContext'
import ToDoScreen from './Containers/ToDoScreen'

const ContextProvider = ({ children }) => {
  return (
    <ToDoProvider>
      <ToDoScreen />
    </ToDoProvider>
  )
}

export default ContextProvider
