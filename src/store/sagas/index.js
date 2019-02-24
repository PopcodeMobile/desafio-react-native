import { all, takeLatest } from 'redux-saga/effects';

import { Types as TodoTypes } from 'store/ducks/todo';

import { addTodo, updateTodo, removeTodo } from './todo';

export default function* rootSaga() {
  return yield all([
    takeLatest(TodoTypes.TODO_CREATE_REQUEST, addTodo),
    takeLatest(TodoTypes.TODO_UPDATE_REQUEST, updateTodo),
    takeLatest(TodoTypes.TODO_REMOVE_REQUEST, removeTodo),
  ]);
}
