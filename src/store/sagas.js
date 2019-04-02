
//VERSÃO SEM O PERSIST, UTILIZANDO REDUX-SAGA
//NÃO USADO

import { takeEvery, put, call } from 'redux-saga/effects';
import { getNotDone, getAsDone,updateData } from '../controller/TasksController';

function* iniciar() {
    const tasks = yield call(getNotDone);
    const tasksAsDone = yield call(getAsDone);
    yield put({
        type: "INITIAL_STATE",
        playload: {
            page: 'all',
            itemSelected:null,
            numTaskDone: tasksAsDone.length,
            tasks,
            tasksAsDone
        }
    });
}
function* check(action) {
    let { item,tasks,tasksAsDone,page,numTaskDone} = action.playload;
    item.done = !item.done;
    if (page === 'all') {
        tasks = tasks.filter(task => task.id !== item.id);
        tasksAsDone = [ item,...tasksAsDone];
        numTaskDone+=1;
    } else {
        tasksAsDone = tasksAsDone.filter(task => task.id !== item.id);
        tasks = [item,...tasks];
        numTaskDone-=1;
    }
    const newData = {
        type: 'HANDLE_CHECK',
        playload: {
            itemSelected:null,
            numTaskDone,
            page,
            tasks,
            tasksAsDone
        }
    }
    yield updateData(tasks,tasksAsDone);
    yield put(newData)
}
export default function* root() {
    yield takeEvery("INITI_STATE", iniciar);
    yield takeEvery("TOGGLE_CHECK", check)

}