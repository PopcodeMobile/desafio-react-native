/* @flow */

export type task = {
  text: string,
  deadline: string,
  tag: string,
  complete: boolean
};

export type destructuredTask = {
  taskText: string,
  taskDeadline: string,
  taskTag: string
};

export type initialTaskStateType = {
  taskArray: Array<task>,
  taskText: string,
  taskDeadline: string,
  taskTag: string,
  visibleCreateEditTaskModal: boolean,
  onEditMode: boolean,
  editTaskKey: number
};
