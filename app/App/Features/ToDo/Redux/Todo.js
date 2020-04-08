import produce from 'immer'

const INITIAL_STATE = {
  todo: false,
  itemToDo: false
};

export default function todo(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@todo/SET_ALL': {
        draft.todo = action.payload.allToDo
        break
      }
      case '@todo/SET_ITEM_TODO': {
        draft.itemToDo = action.payload.itemToDo
        break
      }
      default:
        // return state
    }
  })
  
}