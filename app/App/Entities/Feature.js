// @flow
import type { Reducer } from '@reduxjs/toolkit'
import type { Api } from '../Services/Api'

type Actions = {
  [actions: string]: Function
}

type Sagas = (api: Api) => *

type Selectors = {
  [selector: string]: Function
}

type Stories = {}

type Screens = {
  [screen: string]: Function
}

type Reducers = {
  ui?: Reducer<*>,
  entities?: Reducer<*>
}

type Fixtures = {
  success?: Object,
  failure: Object
}

export type Feature = {
  screens: Screens,
  reducers?: Reducers,
  sagas?: Sagas,
  actions?: Actions,
  selectors?: Selectors,
  stories?: Stories,
  fixtures?: Fixtures
}
