import { all } from 'redux-saga/effects'

import Api from '../Services/Api'
import UserFeature from '../Features/User'

import Config from '../Config/DebugConfig'
import FixtureAPI from '../Services/FixtureAPI'

const api = Config.useFixtures ? FixtureAPI : Api.create()

export default function * root (): any {
  yield all([UserFeature.sagas(api)])
}
