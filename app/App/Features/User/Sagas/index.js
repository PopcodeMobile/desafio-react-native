// @flow
import { all, takeLatest } from 'redux-saga/effects'

import { actions as uiActions } from '../Redux/Ui'
import { getUser } from './User'

import type { Api } from '../../../Services/Api'

export default function * root (api: Api): any {
  yield all([takeLatest(uiActions.request, getUser, api)])
}
