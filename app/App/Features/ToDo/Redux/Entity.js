// @flow
import type { ToDo } from '../Entities'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type State = {
  toDos: ?(ToDo[])
}

const INITIAL_STATE: State = {
  toDos: []
}
type ToggleToDoAction = {
  type: string,
  payload: {
    id: number
  }
}

type AddToDoAction = {
  type: string,
  payload: {
    item: ToDo
  }
}

const toDoEntitySlice = createSlice({
  name: 'entity',
  initialState: INITIAL_STATE,
  reducers: {
    addToDos: (state: State, action) => {
      const toDoList = action.payload
      return toDoList
    }, 
    toggleToDo: (state: State, action: ToggleToDoAction) => {
      const index = action.payload.id - 1
      state[index].isDone = !state[index].isDone
    },
    addToDo: (state : State, action: AddToDoAction) => {
      const item = action.payload.item
      return [...state, item]
    }
  }
})

export const { actions } = toDoEntitySlice

export default toDoEntitySlice.reducer

/* Reducers 
reducer : function(estadoAnterior, ação){
  return proximoEstado
}
*/