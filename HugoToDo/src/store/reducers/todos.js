import moment from 'moment';

const INITISTATE = {
  showModalAddTask: false,
  showModalDeleteTask: false,
  showModalCompletedTask: false,
  showModalStatisticTask: false,
  filter: 'all',
  current: null,
  totalTask: 0,
  completedTask: 0,
  pendingTask: 0,
  data: [],
};

export default function todos(state = INITISTATE, action) {
  console.log(action);
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        totalTask: state.totalTask + 1,
        completedTask: action.payload.completed ? state.completedTask + 1 : state.completedTask,
        pendingTask: action.payload.completed ? state.pendingTask : state.pendingTask + 1,
        data: [
          ...state.data,
          {
            id: `${Math.random()}`,
            title: action.payload.title,
            description: action.payload.description,
            dueDate: action.payload.dueDate,
            created: moment().format('L'),
            completedDate: null,
            completed: action.payload.completed,
          },
        ],
      };
    case 'ADD_TASK_COMPLETED':
      let { pendingTask } = state;
      let { completedTask } = state;

      const newData = state.data.map((todo) => {
        if (todo.id === action.payload) {
          const value = !todo.completed;
          if (value) {
            pendingTask -= 1;
            completedTask += 1;
          } else {
            pendingTask += 1;
            completedTask -= 1;
          }
          return {
            ...todo,
            completed: value,
            completedDate: moment().format('L'),
          };
        }
        return todo;
      });
      return {
        ...state,
        pendingTask,
        completedTask,
        data: newData,
      };
    case 'DELETE_TASK':
      return {
        ...state,
        totalTask: state.totalTask - 1,
        pendingTask: state.pendingTask - 1,
        data: state.data.filter(todo => todo.id !== action.payload.id),
      };
    case 'FILTER_TASK_DONE':
      return {
        ...state,
        filter: 'done',
      };
    case 'FILTER_TASK_PENDING':
      return {
        ...state,
        filter: 'pending',
      };
    case 'FILTER_TASK_TODAY':
      return {
        ...state,
        filter: 'today',
      };
    case 'SHOW_MODAL_ADD_TASK':
      return {
        ...state,
        showModalAddTask: true,
      };

    case 'HIDE_MODAL_ADD_TASK':
      return {
        ...state,
        showModalAddTask: false,
      };
    case 'SHOW_MODAL_DELETE_TASK':
      return {
        ...state,
        current: action.payload,
        showModalDeleteTask: true,
      };

    case 'HIDE_MODAL_DELETE_TASK':
      return {
        ...state,
        showModalDeleteTask: false,
      };
    case 'SHOW_MODAL_COMPLETED_TASK':
      return {
        ...state,
        current: action.payload,
        showModalCompletedTask: true,
      };
    case 'HIDE_MODAL_COMPLETED_TASK':
      return {
        ...state,
        showModalCompletedTask: false,
      };
    case 'SHOW_MODAL_STATISTIC_TASK':
      return {
        ...state,
        current: action.payload,
        showModalStatisticTask: true,
      };
    case 'HIDE_MODAL_STATISTIC_TASK':
      return {
        ...state,
        showModalStatisticTask: false,
      };
    case 'FILTER_TASK_RESET':
      return {
        ...state,
        filter: 'all',
      };
    default:
      return state;
  }
}
