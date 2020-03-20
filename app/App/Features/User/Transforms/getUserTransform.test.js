import { transformedResponse } from '../Fixtures/transformedSuccessResponse'
import transform from './getUserTransform'

const response = {
  login: 'gabrielkabral',
  id: 33816395,
  node_id: 'MDQ6VXNlcjMzODE2Mzk1',
  avatar_url: 'https://avatars0.githubusercontent.com/u/33816395?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/gabrielkabral',
  html_url: 'https://github.com/gabrielkabral',
  followers_url: 'https://api.github.com/users/gabrielkabral/followers',
  following_url: 'https://api.github.com/users/gabrielkabral/following{/other_user}',
  gists_url: 'https://api.github.com/users/gabrielkabral/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/gabrielkabral/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/gabrielkabral/subscriptions',
  organizations_url: 'https://api.github.com/users/gabrielkabral/orgs',
  repos_url: 'https://api.github.com/users/gabrielkabral/repos',
  events_url: 'https://api.github.com/users/gabrielkabral/events{/privacy}',
  received_events_url: 'https://api.github.com/users/gabrielkabral/received_events',
  type: 'User',
  site_admin: false,
  name: 'Gabriel Menezes',
  company: '@PopcodeMobile',
  blog: '',
  location: null,
  email: null,
  hireable: null,
  bio: null,
  public_repos: 5,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: '2017-11-20T00:02:20Z',
  updated_at: '2020-03-02T16:43:47Z'
}

describe('Transform user request', () => {
  test('Should return a formatted object if the request finishes successfully', () => {
    const before = response
    const after = transformedResponse
    expect(transform(before)).toEqual(after)
  })
})
