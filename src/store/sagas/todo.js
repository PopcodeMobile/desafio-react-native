import { put } from 'redux-saga/effects';

import { Creators as TodoActions } from 'store/ducks/todo';

/*
  its only for demonstration purposes
  maybe unnecessary for this project
*/

export function* addTodo(action) {
  try {
    const { todo } = action.payload;
    if (!todo.description) {
      throw new Error();
    }
    todo.id = Math.random();
    yield put(TodoActions.todoCreateSuccess(todo));
  } catch (error) {
    yield put(TodoActions.todoFailure('Não foi possível adicionar todo.'));
  }
}

export function* updateTodo(action) {
  try {
    const { todo } = action.payload;
    if (!todo.id || !todo.description) {
      throw new Error();
    }
    yield put(TodoActions.todoUpdateSuccess(todo));
  } catch (error) {
    yield put(TodoActions.todoFailure('Não foi possível atualizar todo.'));
  }
}
export function* removeTodo(action) {
  try {
    const { id } = action.payload;
    if (!id) {
      throw new Error();
    }
    yield put(TodoActions.todoRemoveSuccess(id));
  } catch (error) {
    yield put(TodoActions.todoFailure('Não foi possível remover todo.'));
  }
}
