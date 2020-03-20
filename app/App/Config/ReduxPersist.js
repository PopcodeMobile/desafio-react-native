import { AsyncStorage } from 'react-native'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { persistStore } from 'redux-persist'
import Config from './DebugConfig'

const ReduxPersist = {
  active: true,
  reducerVersion: '0.0.1',
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['entities']
  }
}

export const updateReducers = (store: Object) => {
  const reducerVersion = ReduxPersist.reducerVersion

  // Check to ensure latest reducer version
  AsyncStorage.getItem('reducerVersion')
    .then(localVersion => {
      if (localVersion !== reducerVersion) {
        if (Config.useReactotron) {
          console.tron.display({
            name: 'PURGE',
            value: {
              'Old Version:': localVersion,
              'New Version:': reducerVersion
            },
            preview: 'Reducer Version Change Detected',
            important: true
          })
        }

        // Purge store
        persistStore(store, null, null).purge()
        AsyncStorage.setItem('reducerVersion', reducerVersion)
      } else {
        persistStore(store, null, null)
      }
    })
    .catch(() => {
      persistStore(store, null, null)
      AsyncStorage.setItem('reducerVersion', reducerVersion)
    })

  return persistStore(store)
}

export default ReduxPersist
