// @flow
import type { GlobalState } from '../../../Redux'

export const fetching = (state: GlobalState): boolean => state.ui.toDos.fetching
export const error = (state: GlobalState): ?string => state.ui.toDos.error
export const selectedFilterIndex = (state: GlobalState): number => state.ui.toDos.selectedFilterIndex

type ToDoUISelectors = {
  fetching: (state: GlobalState) => boolean,
  error: (state: GlobalState) => ?string,
  selectedFilterIndex: (state: GlobalState) => number
}

export default ({
  fetching,
  error, 
  selectedFilterIndex
}: ToDoUISelectors)
