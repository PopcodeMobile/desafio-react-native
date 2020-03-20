// @flow
import type { UserType } from '../Entities'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type State = {
  user: ?UserType
}

const INITIAL_STATE: State = {
  user: null
}

const userEntitySlice = createSlice({
  name: 'userEntity',
  initialState: INITIAL_STATE,
  reducers: {
    addUser: (state: State, action: PayloadAction) => {
      const user = action.payload
      return user
    }
  }
})

export const { actions } = userEntitySlice

export default userEntitySlice.reducer
