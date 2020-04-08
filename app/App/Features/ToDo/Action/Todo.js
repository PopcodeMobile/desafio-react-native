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

export function setItemToDo(itemToDo) {
  return {
    type: '@todo/SET_ITEM_TODO',
    payload: { itemToDo }
  }
}

export function deleteItemToDo(itemID) {
  return {
    type: '@todo/DELETE_ITEM_TODO',
    payload: { itemID }
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

export function updateItemToDoIsDone(itemToDo) {
  return {
    type: '@todo/UPDATE_ITEM',
    payload: { itemToDo }
  }
}

export function updateItemToDo(itemToDo) {
  return {
    type: '@todo/UPDATE_ITEM_TODO',
    payload: { itemToDo }
  }
}