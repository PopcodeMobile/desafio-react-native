module.exports = {
  testMatch: ['<rootDir>/Tests/**/*.js', '**/?(*.)(spec|test).js?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/App/Geral/Themes/'
  },
  preset: 'react-native'
}
