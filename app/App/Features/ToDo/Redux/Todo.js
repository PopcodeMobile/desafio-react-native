import produce from 'immer'

const INITIAL_STATE = {
  todo: false
};

export default function todo(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@todo/SET_ALL': {
        draft.todo = action.payload.allToDo
        break
      }
      default:
        // return state
    }
  })
  
}