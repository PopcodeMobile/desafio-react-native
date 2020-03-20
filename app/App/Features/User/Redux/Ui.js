// @flow
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Error } from '../../../Entities/Error'

export type State = {
  fetching: boolean,
  error: ?string
}

const INITIAL_STATE: State = {
  fetching: false,
  error: null
}

const userUiSlice = createSlice({
  name: 'userUI',
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
    })
  }
})

export const { actions } = userUiSlice

export default userUiSlice.reducer
