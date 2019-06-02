// @Flow

import { CREATE_TODO, DELETE_TODO, Action } from "../actions";
import type { TodoState } from "./../../types/todoTypes";
import showToast from "./../../utils/toastr";

const initialState = { todosByIds: {}, todosIds: [] };

function todos(
    state: TodoState = initialState,
    action: Action
): TodoState {
    switch (action.type) {
        case CREATE_TODO: {
            const now: Date = new Date();
            const newTodo: Object = {
                id: now,
                ...action.payload,
                isDone: false
            };
            showToast("Sweet, a new todo was created!", "success");
            return {
                todosIds: state.todosIds.concat(newTodo.id),
                todosById: {
                    ...state.todosById,
                    [newTodo.id]: newTodo
                }
            };
        }
        case DELETE_TODO: {
            const {
                [action.payload.todoId]: deletedItem,
                ...newTodo
            } = state.todos;
            return {
                todosIds: state.todosIds.filter(
                    id => id != state[action.payload.todoId]
                ),
                todosById: newTodo
            };
        }
        default:
            (action: empty);
            return state;
    }
}

export default todos;
