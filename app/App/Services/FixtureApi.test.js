import API from './Api'
import FixtureAPI from './FixtureApi'
import R from 'ramda'

test('All fixtures map to actual API', () => {
  const fixtureKeys = R.keys(FixtureAPI).sort()
  const apiKeys = R.keys(API.create())

  const intersection = R.intersection(fixtureKeys, apiKeys).sort()

  expect(R.equals(fixtureKeys, intersection)).toBe(true)
})
