import { create } from 'apisauce';

const api = create({
    baseURL: 'http://192.168.0.103:3333',
})

export default api
/*const getTodos = async () => await api.get('/todo');
const postTodos = async (body) => await api.post('/todo', body);
const putTodos = async (id) => await api.put(`/todo/${id}`, body);
const delTodos = async (id) => await api.delete(`/todo/${id}`);

export default {
    getTodos,
    postTodos,
    putTodos,
    delTodos
};*/