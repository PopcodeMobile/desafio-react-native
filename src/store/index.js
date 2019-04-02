import { createStore } from 'redux';
import rootReducer from './reducers';
import {persistStore,persistReducer} from 'redux-persist';
import { AsyncStorage } from 'react-native';

const persistConfigs = {
    key:'@Tasks',
    storage:AsyncStorage
}
const persistedReducer = persistReducer(persistConfigs,rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);


export {store,persistor};