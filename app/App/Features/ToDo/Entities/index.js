// @flow

export type ToDoType = {
  id: number,
  title: string,
  description: string,
  isDone: true,
  reminder: string,
  priority: string
}

export type ToDoAdd = {
  title?: string,
  reminder?: string,
  priority?: String, 
} | null