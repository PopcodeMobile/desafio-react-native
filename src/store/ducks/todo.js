// @flow

import { TodoModel } from 'models';

export const Types = {
  TODO_CREATE_REQUEST: 'todo/TODO_CREATE_REQUEST',
  TODO_UPDATE_REQUEST: 'todo/TODO_UPDATE_REQUEST',
  // TODO_GET_REQUEST: 'todo/TODO_GET_REQUEST',
  TODO_REMOVE_REQUEST: 'todo/TODO_REMOVE_REQUEST',
  TODO_CREATE_SUCCESS: 'todo/TODO_CREATE_SUCCESS',
  TODO_REMOVE_SUCCESS: 'todo/TODO_REMOVE_SUCCESS',
  TODO_UPDATE_SUCCESS: 'todo/TODO_UPDATE_SUCCESS',
  TODO_FAILURE: 'todo/TODO_FAILURE',
};

type stateType = {
  todos: TodoModel[],
  loading: boolean,
  error?: any,
};

const initialState = {
  todos: [
    {
      id: Math.random(),
      description: 'Fazer desafio',
      done: false,
    },
    {
      id: Math.random(),
      description: 'Ir para reunião',
      done: true,
      dueDate: '23/02/2018',
    },
  ],
  loading: false,
  error: null,
};

export default function auth(state: stateType = initialState, action: any): stateType {
  switch (action.type) {
    case Types.TODO_CREATE_REQUEST || Types.TODO_UPDATE_REQUEST || Types.TODO_REMOVE_REQUEST:
      return { ...state, loading: true };
    case Types.TODO_CREATE_SUCCESS:
      const withNewTodo = [...state.todos, action.payload.todo];
      return { todos: withNewTodo, loading: false, error: null };
    case Types.TODO_UPDATE_SUCCESS:
      const toUpdateIndex = state.todos.findIndex(value => value.id === action.payload.todo.id);

      if (toUpdateIndex !== -1) {
        const newTodos = [...state.todos];
        newTodos[toUpdateIndex] = action.payload.todo;
        return { todos: newTodos, loading: false, error: null };
      }
      return { todos: state.todos, loading: false, error: 'Não foi possível atualizar todo.' };
    case Types.TODO_REMOVE_SUCCESS:
      const toDeleteIndex = state.todos.findIndex(value => value.id === action.payload.id);

      if (toDeleteIndex !== -1) {
        const newTodos = [...state.todos];
        newTodos.splice(toDeleteIndex, 1);
        return { todos: newTodos, loading: false, error: null };
      }
      return { todos: state.todos, loading: false, error: 'Não foi possíbel remover todo.' };
    case Types.TODO_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

export const Creators = {
  todoCreateRequest: (todo: TodoModel) => ({
    type: Types.TODO_CREATE_REQUEST,
    payload: {
      todo,
    },
  }),
  todoUpdateRequest: (todo: TodoModel) => ({
    type: Types.TODO_UPDATE_REQUEST,
    payload: {
      todo,
    },
  }),
  todoRemoveRequest: (id: number) => ({
    type: Types.TODO_REMOVE_REQUEST,
    payload: {
      id,
    },
  }),
  todoCreateSuccess: (todo: TodoModel) => ({
    type: Types.TODO_CREATE_SUCCESS,
    payload: {
      todo,
    },
  }),
  todoUpdateSuccess: (todo: TodoModel) => ({
    type: Types.TODO_UPDATE_SUCCESS,
    payload: {
      todo,
    },
  }),
  todoRemoveSuccess: (id: number) => ({
    type: Types.TODO_REMOVE_SUCCESS,
    payload: {
      id,
    },
  }),
  todoFailure: (error: string) => ({
    type: Types.TODO_FAILURE,
    payload: { error },
  }),
};
