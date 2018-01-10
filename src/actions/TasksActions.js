/* @flow */

import {
  LOCAL_ASYNC_LOAD_TASKS,
  OPEN_CLOSE_CREATE_EDIT_TASK_MODAL,
  TASK_TEXT_CHANGED,
  TASK_DEADLINE_CHANGED,
  TASK_TAG_CHANGED,
  TASK_COMPLETED,
  ADD_NEW_TASK,
  UPDATE_TASK,
  REMOVE_TASK
} from './types';

import type {task} from '../flow/FlowTypes';

export const localAsyncLoadTasks = (taskArray: Array<task>) => {
  return {
    type: LOCAL_ASYNC_LOAD_TASKS,
    taskArray
  }
}

export const openCloseCreateEditTaskModal = (onEditMode? : boolean, taskKey? : number) => {
  return {
    type: OPEN_CLOSE_CREATE_EDIT_TASK_MODAL,
    onEditMode,
    taskKey
  }
}

export const taskTextChanged = (text: string) => {
  return {
    type: TASK_TEXT_CHANGED,
    text
  }
}

export const taskDeadlineChanged = (deadline: string) => {
  return {
    type: TASK_DEADLINE_CHANGED,
    deadline
  }
}

export const taskTagChanged = (tag: string) => {
  return {
    type: TASK_TAG_CHANGED,
    tag
  }
}

export const taskCompleted = (taskKey: number) => {
  return {
    type: TASK_COMPLETED,
    taskKey
  }
}

export const updateTask = (task: task, taskKey: number) => {
  return {
    type: UPDATE_TASK
  }
}

export const addNewTask = () => {
  return {
    type: ADD_NEW_TASK
  };
};

export const removeTask = (taskKey: number) => {
  return {
    type: REMOVE_TASK,
    taskKey
  };
};
