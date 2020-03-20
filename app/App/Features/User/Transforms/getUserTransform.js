// @flow
import * as yup from 'yup'
import type { UserType as UserResponseTransformed } from '../Entities'

const UserResponse = yup.object().shape({
  login: yup.string().required(),
  avatar_url: yup.string(),
  html_url: yup.string(),
  name: yup.string().nullable(),
  company: yup.string().nullable(),
  public_repos: yup.number().nullable(),
  public_gists: yup.number().nullable()
})

export default function transform (response: *): UserResponseTransformed {
  if (!UserResponse.isValidSync(response)) {
    throw new Error('Responsta inválida: O endpoint de realizar login retornou uma resposta inválida')
  }

  return {
    user: response.login,
    urlAvatar: response.avatar_url,
    urlPerfil: response.html_url,
    name: response.name,
    company: response.company,
    numPublicRepos: response.public_repos,
    numPublicGists: response.public_gists
  }
}
