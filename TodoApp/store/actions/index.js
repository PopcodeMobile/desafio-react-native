// @flow
export const CREATE_TODO: string = "CREATE_TODO";
export const DELETE_TODO: string = "DELETE_TODO";
export const EDIT_TODO: string = "EDIT_TODO";
export const TOOGLE_TODO: string = "TOOGLE_TODO";

type todoAddType = { text: string, dueDate?: Date };
type todoDeleteType = { todoId: string };

type CreateAction = { type: typeof CREATE_TODO, payload: todoAddType };
type DeleteAction = { type: typeof DELETE_TODO, payload: todoDeleteType };

export type Action = CreateAction | DeleteAction;

export function createTodo(value: todoAddType): Action {
    return { type: CREATE_TODO, payload: value };
}

export function deleteTodo(value: string): Action {
    return { type: DELETE_TODO, payload: { todoId: value } };
}
