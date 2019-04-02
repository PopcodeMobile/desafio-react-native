
const INITIAL_STATE = {
    getKey:0,
    page: 'all',
    itemSelected:null,
    numTaskDone: 0,
    tasks: [],
    tasksAsDone: []
}
function checar({tasks, tasksAsDone,numTaskDone},playload){
    const {item,page} = playload;
    if(page ==='all'){
        tasks = tasks.filter(task=> task.id!==item.id);
        tasksAsDone.push(item);
        numTaskDone ++;
    }else{
        tasksAsDone = tasksAsDone.filter(task=> task.id!==item.id);
        tasks.push(item);
        numTaskDone --;
    }
    return {numTaskDone,tasks,tasksAsDone};
}
function editado({tasks, tasksAsDone,page},item){
    if(page ==='all'){
        tasks = tasks.filter(task=>task.id !== item.id);
        tasks.push(item);
    }else{
        tasksAsDone = tasksAsDone.filter(task=>task.id !== item.id);
        tasksAsDone.push(item);
    }
    
    return {tasks,tasksAsDone};
}
function deleteTask({tasks, tasksAsDone,page,numTaskDone},item){
    if(page ==='all'){
        tasks = tasks.filter(task=>task.id !== item.id);
    }else{
        tasksAsDone = tasksAsDone.filter(task=>task.id !== item.id);
        numTaskDone--;
    }
    
    return {tasks,tasksAsDone,numTaskDone};
}
export default function tasks(state= INITIAL_STATE, action) {
    switch (action.type) {
        case 'HANDLE_CHECK':
            return {
                ...state,
                ...checar(state,action.playload)
            }
        case 'CREATE_TASK':
            state.getKey = action.item.id;
            state.tasks.push(action.item)
            return state ;
        case 'EDIT_TASK':
            return{
                ...state,
                ...editado(state,action.item)
            }
        case 'DELETE_TASK':
            return{
                ...state,
                ...deleteTask(state,action.item)
            }
        case 'TOGGLE_PAGE':
            return{
                ...state,
                page:action.page
            }
        case 'HANDLE_SELECTED':
            return{
                ...state,
                itemSelected:action.item
            }

    }
    return INITIAL_STATE;
    return state;
}