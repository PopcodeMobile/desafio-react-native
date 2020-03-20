import { AsyncStorage } from 'react-native'
import Config from './DebugConfig'
import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

let reactotron

if (Config.useReactotron) {
  reactotron = Reactotron.configure()
    .setAsyncStorageHandler(AsyncStorage)
    .useReactNative()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect()

  Reactotron.clear()

  console.tron = Reactotron
}

export default reactotron
