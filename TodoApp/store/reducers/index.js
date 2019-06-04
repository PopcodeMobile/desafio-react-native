// @Flow

import { CREATE_TODO, DELETE_TODO, TOOGLE_TODO, Action } from "../actions";
import type { TodoState } from "./../../types/todoTypes";
import showToast from "./../../utils/toastr";

function reducer(
    state: TodoState = { todos: {} },
    action: Action
): TodoState {
    switch (action.type) {
        case CREATE_TODO: {
            const now: string = new Date().getTime().toString();
            const newTodo: Object = {
                id: now,
                ...action.payload,
                isDone: false
            };
            showToast("Sweet, a new todo was created!", "success");
            return {
                ...state,
                todos: {
                    ...state.todos,
                    [newTodo.id]: newTodo
                }
            };
        }
        case DELETE_TODO: {
            const {
                // eslint-disable-next-line no-unused-vars
                [action.payload.todoId]: deletedItem,
                ...newTodos
            } = state.todos;
            return {
                ...state,
                todos: {
                    ...newTodos
                }
            };
        }
        case TOOGLE_TODO: {
            return {
                ...state,
                todos: {
                    ...state.todos,
                    [action.payload.todoId]: {
                        ...state.todos[action.payload.todoId],
                        isDone: !state.todos[action.payload.todoId].isDone
                    }
                }
            };
        }

        default:
            (action: empty);
            return state;
    }
}

export default reducer;
