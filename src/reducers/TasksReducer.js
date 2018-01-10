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
} from '../actions/types';

import type {
  task,
  destructuredTask,
  initialTaskStateType
} from '../flow/FlowTypes';

const INITIAL_STATE = {
  taskArray: [],
  taskText: '',
  taskDeadline: '',
  taskTag: '',
  visibleCreateEditTaskModal: false,
  onEditMode: false,
  editTaskKey: 0
};

const createTask = ({taskText, taskDeadline, taskTag} : destructuredTask) => {
  const defaultTag = 'LIFE';

  return {
    text: taskText.toUpperCase(),
    deadline: taskDeadline,
    tag: taskTag? taskTag.toUpperCase() : defaultTag,
    complete: false
  }
};

const loadTaskInformationsForEditing = (task : task) => {
  return {
    taskText: task.text,
    taskDeadline: task.deadline,
    taskTag: task.tag
  }
};

export default (state : initialTaskStateType = INITIAL_STATE, action : Object) => {
  switch (action.type) {
    case LOCAL_ASYNC_LOAD_TASKS:
      return {
        ...state,
        taskArray: action.taskArray
      }

    case OPEN_CLOSE_CREATE_EDIT_TASK_MODAL:
      const taskInfos = (action.onEditMode)
            ? loadTaskInformationsForEditing(state.taskArray[action.taskKey])
            : null;

      return {
        ...state,
        ...taskInfos,
        visibleCreateEditTaskModal: !state.visibleCreateEditTaskModal,
        onEditMode: action.onEditMode,
        editTaskKey: action.taskKey
      };

    case TASK_TEXT_CHANGED:
      return { ...state, taskText: action.text };

    case TASK_DEADLINE_CHANGED:
      return { ...state, taskDeadline: action.deadline };

    case TASK_TAG_CHANGED:
      return { ...state, taskTag: action.tag };

    case TASK_COMPLETED:
      const completedTask = {
        ...state.taskArray[action.taskKey],
        complete: !state.taskArray[action.taskKey].complete
      };
      return {
        ...state,
        taskArray: state.taskArray.map((task, i) => {
          return (i !== action.taskKey)? task : completedTask
        })
      };

    case ADD_NEW_TASK:
      const task = createTask(state);
      return {
        ...state,
        ...INITIAL_STATE,
        taskArray: [ ...state.taskArray, task]
      };

    case UPDATE_TASK:
      const updatedTask = createTask(state);
      return {
        ...state,
        ...INITIAL_STATE,
        taskArray: state.taskArray.map((task, i) => {
          return (i !== state.editTaskKey)? task : updatedTask;
        })
      };

    case REMOVE_TASK:
      return {
        ...state,
        taskArray: state.taskArray.filter((task, i) => i !== action.taskKey)
      };

    default:
      return state;
  }
};
