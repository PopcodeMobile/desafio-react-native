// @flow
import { all, takeLatest } from 'redux-saga/effects'

import { getToDos, addNewToDo, filterToDos, updateItemToDoIsDone, deleteItem, updateItemToDo } from './ToDo'

export default function* root() {
  yield all([
    takeLatest('@todo/GET_ALL', getToDos),
    takeLatest('@todo/FILTER_LIST', filterToDos),
    takeLatest('@todo/ADD_NEW', addNewToDo),
    takeLatest('@todo/DELETE_ITEM_TODO', deleteItem),
    takeLatest('@todo/UPDATE_ITEM_TODO', updateItemToDo),
    takeLatest('@todo/UPDATE_ITEM', updateItemToDoIsDone)
  ])
}
