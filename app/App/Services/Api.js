// @flow
import apisauce from 'apisauce'

const create = (baseURL: string = 'https://api.github.com') => {
  const api = apisauce.create({
    baseURL,
    timeout: 60000,
    headers: {}
  })

  const getUser = (user: string) => api.get(`/users/${user}`)

  return {
    getUser
  }
}

export type Api = {
  getUser: (user: string) => Promise<*>
}

export default {
  create
}
