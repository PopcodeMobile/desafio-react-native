// @flow
import type { ToDoType } from '../Entities'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type State = {
  toDos: ?(ToDoType[])
}

const INITIAL_STATE: State = {
  toDos: []
}

const toDoEntitySlice = createSlice({
  name: 'toDoEntity',
  initialState: INITIAL_STATE,
  reducers: {
    addToDos: (state: State, action: PayloadAction) => {
      const toDoList = action.payload
      return toDoList
    }
  }
})

export const { actions } = toDoEntitySlice

export default toDoEntitySlice.reducer
