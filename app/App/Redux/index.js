// @flow
import { combineReducers } from 'redux'
import { updateReducers } from '../Config/ReduxPersist'
import configureStore from './SetupStore'
// import Features
import ToDoFeature from '../Features/ToDo'

// import Types
import type { State as ToDoUIState } from '../Features/ToDo/Redux/Ui'
import type { State as ToDoEntityState } from '../Features/ToDo/Redux/Entity'

const uiReducers = combineReducers({
  toDos: ToDoFeature.reducers?.ui
})

const entityReducers = combineReducers({
  toDos: ToDoFeature.reducers?.entities
})

const rootReducer = combineReducers({
  ui: uiReducers,
  entities: entityReducers
})

export default () => {
  const store = configureStore({ rootReducer })
  const persistor = updateReducers(store)

  return { store, persistor }
}

export type GlobalState = {
  ui: {
    toDos: ToDoUIState
  },
  entities: {
    toDos: ToDoEntityState
  }
}
