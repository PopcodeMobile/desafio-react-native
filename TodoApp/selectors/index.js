import { createSelector } from "reselect";

const getVisibilityFilter = state => state.visibilityFilter;
const getTodos = state => Object.values(state.todos);

export const getVisibleTodos = createSelector(
    [getVisibilityFilter, getTodos],
    (visibilityFilter, todos) => {
        switch (visibilityFilter) {
            case "SHOW_ALL":
                return todos;
            case "SHOW_COMPLETED":
                return todos.filter(t => t.isDone);
            case "SHOW_ACTIVE":
                return todos.filter(t => !t.isDone);
        }
    }
);

export const getActiveItensTotal = createSelector(
    getTodos,
    todos => todos.filter(t => !t.isDone).length
);
