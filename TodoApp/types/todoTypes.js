// @flow

export type TodoInputValue = {
    text: string,
    dueDate: number
};

export type TodoState = {
    todos: {
        +id: string,
        +text: string,
        +isDone: boolean,
        +dueDate: number
    }
};

export type Todo = {
    id: string,
    text: string,
    isDone: boolean,
    dueDate: number
};

export type todoIdType = { todoId: string };

export type todoEditType = {
    todoId: string,
    values: TodoInputValue
};
