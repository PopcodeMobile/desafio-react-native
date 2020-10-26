// @flow
import apisauce from 'apisauce'

const create = (baseURL: string = 'http://localhost:3000/') => {
  const api = apisauce.create({
    baseURL,
    timeout: 60000,
    headers: {}
  })

  const getToDos = () => api.get('/todos')

  return {
    getToDos
  }
}

export type Api = {
  getToDos: () => Promise<*>
}

export default {
  create
}
