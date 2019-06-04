// @flow

export type TodoInputValue = {
    text: string,
    dueDate: number
};

export type TodoState = {
    +id: string,
    +text: string,
    +isDone: boolean,
    +dueDate: number
};

export type Todo = {
    id: string,
    text: string,
    isDone: boolean,
    dueDate: number
};
