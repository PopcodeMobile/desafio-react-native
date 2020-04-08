// @flow
import { all, takeLatest } from 'redux-saga/effects'

import { getToDos, addNewToDo, filterToDos } from './ToDo'

export default function* root() {
  yield all([
    takeLatest('@todo/GET_ALL', getToDos),
    takeLatest('@todo/FILTER_LIST', filterToDos),
    takeLatest('@todo/ADD_NEW', addNewToDo)
  ])
}
