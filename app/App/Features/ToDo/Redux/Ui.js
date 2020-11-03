// @flow
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Error } from '../../../Entities/Error'

export type State = {
  fetching: boolean,
  error: ?string,
  selectedFilterIndex: number
}

const INITIAL_STATE: State = {
  fetching: false,
  error: null,
  selectedFilterIndex: 0
}

type setSelectedFilterIndexAction = {
  type: string,
  payload: {
    index: number
  }
}

const toDoUiSlice = createSlice({
  name: 'ui',
  initialState: INITIAL_STATE,
  reducers: {
    request: (state: State) => ({
      ...state,
      fetching: true,
      error: null
    }),
    error: (state: State, action: PayloadAction<Error>) => ({
      ...state,
      fetching: false,
      error: action.payload
    }),
    success: (state: State) => ({
      ...state,
      fetching: false,
      error: null
    }),
    setSelectedFilterIndex: (state: State, action: setSelectedFilterIndexAction) => {
      state.selectedFilterIndex = action.payload.index
    }
  }
})

export const { actions } = toDoUiSlice

export default toDoUiSlice.reducer
