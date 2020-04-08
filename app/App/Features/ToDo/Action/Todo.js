export function addNewToDo(newToDo) {
  return {
    type: '@todo/ADD_NEW',
    payload: { newToDo }
  }
}

export function getAllToDo() {
  return {
    type: '@todo/GET_ALL',
    payload: {}
  }
}

export function setAllToDo(allToDo) {
  return {
    type: '@todo/SET_ALL',
    payload: { allToDo }
  }
}

export function filterList(filter) {
  return {
    type: '@todo/FILTER_LIST',
    payload: { filter }
  }
}