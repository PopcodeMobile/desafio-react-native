// @flow
import { createSelector } from '@reduxjs/toolkit'

import type { GlobalState } from '../../../Redux'
import type { State as UserEntityState } from '../Redux/Entity'
import type { UserType } from '../Entities'

export const userData = (state: GlobalState): UserEntityState => state.entities.user

export const getUserName = createSelector(userData, (userData: UserType) => userData.name)

type UserEntitySelectors = {
  userData: (state: GlobalState) => UserEntityState,
  getUserName: () => boolean
}

export default ({
  userData,
  getUserName
}: UserEntitySelectors)
