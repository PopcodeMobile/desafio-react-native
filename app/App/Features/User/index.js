// @flow
import UserScreen from './Containers/UserScreen'
import type { Feature } from '../../Entities/Feature'

import userEntityReducer from './Redux/Entity'
import userUiReducer from './Redux/Ui'

import userSagas from './Sagas'

import successFixture from './Fixtures/getUserSuccess'
import failureFixture from './Fixtures/getUserFailure'

const feature: Feature = {
  screens: {
    UserScreen
  },
  sagas: userSagas,
  reducers: {
    ui: userUiReducer,
    entities: userEntityReducer
  },
  fixtures: {
    success: successFixture,
    failure: failureFixture
  }
}

export default feature
