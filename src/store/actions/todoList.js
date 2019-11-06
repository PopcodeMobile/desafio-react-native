export const newTodo = (title, description, date_due) => ({
    type: "NEW_TODO",
    payload: { title, description, date_due },
});

export const editTodo = (_id, title, description, date_due) => ({
    type: 'EDIT_TODO',
    payload: { _id, title, description, date_due},
});

export const deleteTodo = (_id) => ({
    type: 'DELETE_TODO',
    payload: { _id },
});

export const markTodo = (_id) => ({
    type: 'MARK_TODO',
    payload: { _id },
});