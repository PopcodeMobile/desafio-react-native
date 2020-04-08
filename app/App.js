import React from 'react'
import { ActivityIndicator, StyleSheet, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import RootContainer from './App/Containers/RootContainer'
import { persistor, store } from './App/Redux/SetupStore'

import StorybookUI from './storybook'
import Config from './App/Config/DebugConfig'



const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#000"/>
        <RootContainer />
      </PersistGate>
    </Provider>
  )
}


if (__DEV__) {
  import('./App/Config/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

export default Config.useStorybook ? StorybookUI : App

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
