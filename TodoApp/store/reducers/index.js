// @Flow

import {
    CREATE_TODO,
    DELETE_TODO,
    TOOGLE_TODO,
    EDIT_TODO,
    Action
} from "../actions";
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
            showToast("A new to do was created!", "success");
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
            showToast("The to do item was removed!", "success");
            return {
                ...state,
                todos: {
                    ...newTodos
                }
            };
        }
        case EDIT_TODO: {
            showToast("The to do item was edited!", "success");
            return {
                ...state,
                todos: {
                    ...state.todos,
                    [action.payload.todoId]: {
                        ...state.todos[action.payload.todoId],
                        ...action.payload.values
                    }
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
