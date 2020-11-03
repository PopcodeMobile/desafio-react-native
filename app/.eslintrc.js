module.exports = {
  root: true,
  extends: '@react-native-community',
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: {
    '@react-native-comunity',
    "plugin:prettier/recommended"
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier":"error"
  }
}
