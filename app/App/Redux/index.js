// @flow
import { combineReducers } from 'redux'
import { updateReducers } from '../Config/ReduxPersist'
import configureStore from './SetupStore'
// import Features
import UserFeature from '../Features/User'

// import Types
import type { State as UserUIState } from '../Features/User/Redux/Ui'
import type { State as UserEntityState } from '../Features/User/Redux/Entity'

const uiReducers = combineReducers({
  user: UserFeature.reducers?.ui
})

const entityReducers = combineReducers({
  user: UserFeature.reducers?.entities
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
    user: UserUIState
  },
  entities: {
    user: UserEntityState
  }
}
