// @flow
import { all, takeLatest } from 'redux-saga/effects'

import { actions as ToDosUIActions } from '../Redux/Ui'
import { getToDos } from './ToDo'

import type { Api } from '../../../Services/Api'

export default function * root (api: Api): any {
  yield all([takeLatest(ToDosUIActions.request, getToDos, api)])
}
