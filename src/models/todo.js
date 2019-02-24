export type todo = {
  id: number,
  description: string,
  done: boolean,
  dueDate?: Date,
};

export type todoList = {
  todos: todo[],
};
