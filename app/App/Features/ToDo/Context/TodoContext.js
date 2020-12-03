import React, { createContext, useState } from 'react'

export const ToDoContext = createContext(true)

export const ToDoProvider = ({ children }) => {
  const [selectedFilterIndex, setFilterIndex] = useState(0)

  const filterList = ['Todos', 'Hoje', 'Esta semana', 'Este mês']

  return (
    <ToDoContext.Provider value={{ filterList, selectedFilterIndex, setFilterIndex }}>{children}</ToDoContext.Provider>
  )
}
