// @flow
import { call, put } from 'redux-saga/effects'

import { setAllToDo, getAllToDo } from '../Action/Todo'
import apisauce from '../../../Services/api'

export function* addNewToDo({ payload }) {
  try {
    const { newToDo } = payload

    if (!newToDo) return

    yield call(apisauce.post, '/todos', newToDo)

    return yield put(getAllToDo())
  } catch (error) {
    return
  }
}

export function* deleteItem({ payload }) {
  try {
    const { itemID } = payload

    if (!itemID) return

    yield call(apisauce.delete, `/todos/${itemID}`)

    return yield put(getAllToDo())
  } catch (error) {
    console.log(error);
    
    return
  }
}

export function* updateItemToDo({ payload }) {
  try {
    const { itemToDo } = payload

    if (!itemToDo) return

    yield call(apisauce.put, `/todos/${itemToDo.id}`, itemToDo)

    return yield put(getAllToDo())
  } catch (error) {
    return
  }
}

export function* updateItemToDoIsDone({ payload }) {
  try {
    const { itemToDo } = payload

    if (!itemToDo) return

    let item = {
      description: itemToDo.description,
      id: itemToDo.id,
      title: itemToDo.title,
      isDone: !itemToDo.isDone
    }


    yield call(apisauce.put, `/todos/${item.id}`, item)

    return yield put(getAllToDo())
  } catch (error) {
    return
  }
}

export function* getToDos() {
  try {
    const response = yield call(apisauce.get, '/todos')
    if (!response.data) return

    yield put(setAllToDo(response.data))
  } catch (error) {
    return
  }
}

export function* filterToDos({ payload }) {
  try {
    const { filter } = payload

    if (/All/.test(filter) || !filter) {
      return yield put(getAllToDo())
    }

    const response = yield call(apisauce.get, `/todos/${filter.toLowerCase()}`)

    if (!response.data || response.data.length === 0) {
      return yield put(setAllToDo(false))
    }

    return yield put(setAllToDo(response.data))
  } catch (error) {
    console.log(error)
    return
  }
}