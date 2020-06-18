import exemple from './exemple'

describe('testExemple', () => {
  test('should return 1 if the input was 1', () => {
    const input = 1
    const result = exemple({ value: input })
    const output = 1
    expect(result).toEqual(output)
  })
})
