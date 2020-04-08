
import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist'
import rootSaga from '../Features/ToDo/Sagas'
import Reactotron from '../Config/ReactotronConfig'
import DebugConfig from '../Config/DebugConfig'
import persistReducer from './persistReducer'
import createStore from './createStore'
import rootReducer from './index'


const sagaMonitor = DebugConfig.useReactotron ? Reactotron.createSagaMonitor() : null
const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
const middleware = [sagaMiddleware]

const store = createStore(persistReducer(rootReducer), middleware)
const persistor = persistStore(store)
sagaMiddleware.run(rootSaga)

export { store, persistor }