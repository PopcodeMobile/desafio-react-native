import { AppRegistry } from 'react-native'
import { getStorybookUI, configure } from '@storybook/react-native'
import { name as appName } from '../app.json'

// import stories
configure(() => {
  require('../App/Stories')
}, module)

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({})

// If you are using React Native vanilla write your app name here.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent(appName, () => StorybookUIRoot)

export default StorybookUIRoot
