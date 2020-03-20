// @flow
import { configureStore } from '@reduxjs/toolkit'
import Reactotron from '../Config/ReactotronConfig'
import createSagaMiddleware from 'redux-saga'
import { persistReducer } from 'redux-persist'
import rootSaga from '../Sagas'
import type { Reducer } from './Entities'
import Config from '../Config/DebugConfig'
import persistConfig from '../Config/ReduxPersist'

type Configuration = {
  rootReducer: Reducer<any>
}

export default ({ rootReducer }: Configuration) => {
  const sagaMonitor = Config.useReactotron ? Reactotron.createSagaMonitor() : null
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

  const store = configureStore({
    reducer: persistReducer(persistConfig.storeConfig, rootReducer),
    middleware: [sagaMiddleware],
    enhancers: Config.useReactotron ? [Reactotron.createEnhancer()] : null
  })

  sagaMiddleware.run(rootSaga)
  return store
}
