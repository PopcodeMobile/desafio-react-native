// @flow
import type { GlobalState } from '../../../Redux'

export const fetching = (state: GlobalState): boolean => state.ui.user.fetching
export const error = (state: GlobalState): ?string => state.ui.user.error

type UserUISelectors = {
  fetching: (state: GlobalState) => boolean,
  error: (state: GlobalState) => ?string
}

export default ({
  fetching,
  error
}: UserUISelectors)
