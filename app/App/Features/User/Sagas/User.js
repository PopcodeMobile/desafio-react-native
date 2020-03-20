// @flow
import { call, put } from 'redux-saga/effects'
import { actions as UserUIActions } from '../Redux/Ui'
import { actions as UserEntityActions } from '../Redux/Entity'
import { StackActions } from '@react-navigation/native'

import transform from '../Transforms/getUserTransform'

import type { Api } from '../../../Services/Api'
import { PayloadAction } from '@reduxjs/toolkit'

export function * getUser (api: Api, action: PayloadAction): * {
  const response = yield call(api.getUser, action.payload)
  if (!response.ok) {
    yield put(UserUIActions.error('Erro'))
    return
  }

  try {
    const transformedResponse = transform(response.data)
    yield put(UserUIActions.success())
    yield put(UserEntityActions.addUser(transformedResponse))
    yield put(StackActions.push('Profile'))
  } catch (e) {
    yield put(UserUIActions.error('Erro'))
  }
}
