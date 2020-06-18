// @flow
import { call, put } from 'redux-saga/effects'
import { actions as ToDosUIActions } from '../Redux/Ui'
import { actions as ToDosEntityActions } from '../Redux/Entity'

import type { Api } from '../../../Services/Api'
import { PayloadAction } from '@reduxjs/toolkit'

export function * getToDos (api: Api, action: PayloadAction): * {
  const response = yield call(api.getToDos, action.payload)
  if (!response.ok) {
    yield put(ToDosUIActions.error('Erro'))
    return
  }

  try {
    yield put(ToDosUIActions.success())
    yield put(ToDosEntityActions.addToDos(response.data))
  } catch (e) {
    yield put(ToDosUIActions.error('Erro'))
  }
}
