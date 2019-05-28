export const addTask = data => ({ type: 'ADD_TASK', payload: data });
export const addTaskCompleted = id => ({ type: 'ADD_TASK_COMPLETED', payload: id });
export const deleteTask = todo => ({ type: 'DELETE_TASK', payload: todo });

export const filterReset = () => ({ type: 'FILTER_TASK_RESET' });
export const filterTaskDone = () => ({ type: 'FILTER_TASK_DONE' });
export const filterTaskPending = () => ({ type: 'FILTER_TASK_PENDING' });
export const filterTaskToday = () => ({ type: 'FILTER_TASK_TODAY' });

export const showModalAddTask = () => ({ type: 'SHOW_MODAL_ADD_TASK' });
export const hideModalAddTask = () => ({ type: 'HIDE_MODAL_ADD_TASK' });
export const showModalDeleteTask = task => ({ type: 'SHOW_MODAL_DELETE_TASK', payload: task });
export const hideModalDeleteTask = () => ({ type: 'HIDE_MODAL_DELETE_TASK' });
export const showModalCompletedTask = task => ({
  type: 'SHOW_MODAL_COMPLETED_TASK',
  payload: task,
});
export const hideModalCompletedTask = () => ({ type: 'HIDE_MODAL_COMPLETED_TASK' });

export const showModalStatisticTask = () => ({
  type: 'SHOW_MODAL_STATISTIC_TASK',
});
export const hideModalStatisticTask = () => ({ type: 'HIDE_MODAL_STATISTIC_TASK' });
