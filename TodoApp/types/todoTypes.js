// @flow

export type TodoInputValue = {
    text: string,
    dueDate?: Date
};

export type TodoState = {
    +todosById: Array<{
        +id: string,
        +text: string,
        +isDone: boolean,
        +dueDate: Date
    }>,
    +todosIds: Array<string>
};
