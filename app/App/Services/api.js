import apisauce from 'apisauce'

const api = apisauce.create({
  baseURL: 'http://192.168.0.104:3000/',
  timeout: 60000,
  headers: {}
})

export default api