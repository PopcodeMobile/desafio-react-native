import { AsyncStorage } from 'react-native'
import Config from './DebugConfig'
import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

let reactotron

if (Config.useReactotron) {
  reactotron = Reactotron.configure({
    host: '192.168.0.104'
  })
    .setAsyncStorageHandler(AsyncStorage)
    .useReactNative()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect()

  reactotron.clear()

  console.tron = reactotron
}

export default reactotron
