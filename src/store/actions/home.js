
export function handlePage (page){
    return {
        type:'TOGGLE_PAGE',
        page
    }
}
export function loadData(){
    return {
        type:'INITI_STATE',
    }
}
export function handleCheck(playload) {
    playload.item.done = !playload.item.done;
    return {
        type: 'HANDLE_CHECK',
        playload
    }
}
export function selectedItem(item){
    return {
        type:'HANDLE_SELECTED',
        item

    }
}
export function createTask(item){
    return {
        type:'CREATE_TASK',
        item
    }
}
export function editTask(item){
    return {
        type:'EDIT_TASK',
        item
    }
}
export function deleteTask(item){
    return {
        type:'DELETE_TASK',
        item
    }
}