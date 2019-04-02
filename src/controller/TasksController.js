import {Data} from '../model';
import {AsyncStorage} from 'react-native';

const key = 'persist:@Tasks';
//AsyncStorage.setItem(key,JSON.stringify(Data));
//AsyncStorage.setItem('@Tasks:id','0')
export const getKey = async  () =>{
    let id = await AsyncStorage.getItem(key+':id') || 0 ;
    const newId = (parseInt(id) + 1).toString();
    return newId;
}
export const pegarData = async ()=>{
   let data; 
   await AsyncStorage.getItem(key).then(
    (dados) => {
        data = JSON.parse(dados);
    }
   );
   return data;
}
//Falta tratar com redux.
export const getAll =  async ()=> await pegarData();
export const getAsDone = async()=>{
    const tasks = await getAll();
    const tasksDone = tasks.filter(task => task.done);
    return tasksDone;
}
export const getNotDone = async()=>{
    const tasks = await getAll();
    const tasksDone = tasks.filter(task => !task.done);
    return tasksDone;
}
export const getItemForId = id =>(
    getAll().filter(item=>item.id===id)
);
export const getItemForName = async text =>{
   let data = await getAll().filter(item=>item.name.toLowerCase().includes(text.toLowerCase()))
    return data;
};
export const createNewTask = async newTask =>{
    const data = await getAll();
    const newData = [newTask,...data];
    await AsyncStorage.setItem(key,JSON.stringify(newData));
    await AsyncStorage.setItem(key+':id', newTask.id)
    return await getNotDone();
}
export const updateData =async (data,dataAsDone) =>{
    await AsyncStorage.setItem(key,JSON.stringify([...data,...dataAsDone]));
}
export const updateTask =async (task) =>{
    let data = await getAll();
    data = data.filter(item=>item.id!==task.id);
    data = [...data,task];
    AsyncStorage.setItem(key,JSON.stringify(data));
}
export const deleteTask =async (id) =>{
    let data = await getAll();
    data = data.filter(item=>item.id!==id);
    AsyncStorage.setItem(key,JSON.stringify(data));
}
export const numTaskDone = async ()=> {
   let num = await getAsDone();
    num = num.length;
   return num;
};