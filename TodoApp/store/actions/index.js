// @flow
import type {
    TodoInputValue,
    todoIdType,
    todoEditType,
    filterType
} from "./../../types/todoTypes";
export const CREATE_TODO: string = "CREATE_TODO";
export const DELETE_TODO: string = "DELETE_TODO";
export const EDIT_TODO: string = "EDIT_TODO";
export const TOOGLE_TODO: string = "TOOGLE_TODO";
export const SET_FILTER: string = "SET_FILTER";

type CreateAction = { type: typeof CREATE_TODO, payload: TodoInputValue };
type DeleteAction = { type: typeof DELETE_TODO, payload: todoIdType };
type ToogleAction = { type: typeof TOOGLE_TODO, payload: todoIdType };
type EditAction = { type: typeof EDIT_TODO, payload: todoEditType };
type FilterAction = { type: typeof SET_FILTER, payload: filterType };

export type Action =
    | CreateAction
    | DeleteAction
    | ToogleAction
    | EditAction
    | FilterAction;

export function createTodo(value: TodoInputValue): Action {
    return { type: CREATE_TODO, payload: value };
}

export function deleteTodo(value: string): Action {
    return { type: DELETE_TODO, payload: { todoId: value } };
}

export function toogleTodo(value: string): Action {
    return { type: TOOGLE_TODO, payload: { todoId: value } };
}

export function editTodo(todoId: string, values: TodoInputValue): Action {
    return { type: EDIT_TODO, payload: { todoId, values } };
}

export function setFilter(filter: string): Action {
    return { type: SET_FILTER, payload: { filter } };
}
