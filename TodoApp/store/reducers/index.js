// @Flow

import { CREATE_TODO, DELETE_TODO, Action } from "../actions";

type State = {
    +todosById: Array<{
        +id: string,
        +text: string,
        +isDone: booleam,
        +dueDate: Date
    }>,
    +todosIds: Array<string>
};
const initialState = { todosByIds: {}, todosIds: [] };

function todos(state: State = initialState, action: Action): State {
    switch (action.type) {
        case CREATE_TODO: {
            const now: Date = new Date();
            const newTodo: Object = {
                id: now,
                ...action.payload,
                isDone: false
            };
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
                ...newDeck
            } = state.decks;
            return {
                todosIds: state.todosIds.filter(
                    id => id != state[action.payload.todoId]
                ),
                todosById: newDeck
            };
        }
        default:
            (action: empty);
            return state;
    }
}

export default todos;
