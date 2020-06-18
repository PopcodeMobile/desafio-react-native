import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import RootContainer from './App/Containers/RootContainer'
import configureStore from './App/Redux'

import StorybookUI from './storybook'
import Config from './App/Config/DebugConfig'

const { store, persistor } = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<ActivityIndicator size='large' style={styles.loading} />}>
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
