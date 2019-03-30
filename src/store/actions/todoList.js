export const newTodo = (title, description) => ({
    type: "NEW_TODO",
    payload: { title, description },
});

export const editTodo = (_id, title, description) => ({
    type: 'EDIT_TODO',
    payload: { _id, title, description},
});

export const deleteTodo = (_id) => ({
    type: 'DELETE_TODO',
    payload: { _id },
});

export const markTodo = (_id) => ({
    type: 'MARK_TODO',
    payload: { _id },
});