import { createActions, createReducer } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */
export const { Types, Creators } = createActions({
  addTodo: ["id","text", "label", "date", "complete"],
  toggleTodo: ["id"],
  removeTodo: ["id"],
  editTodo: ["id", "text"],
});


/* ------------- Initial State ------------- */
const INITIAL_STATE = [

];


/* ------------- Handlers ------------- */
const add = (state = INITIAL_STATE, action) => [
  ...state,{
    id: action.id,
    text: action.text,
    label: action.label,
    date: action.date,
    complete: action.complete,
  }
];

const toggle = (state = INITIAL_STATE, action) =>
  state.map(
    todo =>
      todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
  );

const remove = (state = INITIAL_STATE, action) =>
  state.filter(todo => todo.id !== action.id);

const edit = (state = INITIAL_STATE, action) =>
  state.map(
    todo =>
      todo.id === action.id ? { ...todo, text: action.text } : todo
  );

/* ------------- Hookup Reducers To Types ------------- */
export default createReducer(INITIAL_STATE, {
  [Types.ADD_TODO]: add,
  [Types.TOGGLE_TODO]: toggle,
  [Types.REMOVE_TODO]: remove,
  [Types.EDIT_TODO]: edit,
});