import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/todoList';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AsyncStorage } from 'react-native';

// change this key, change this proccess
const persistConfig = {
    key: 'root11',
    storage: AsyncStorage,
};

const middlewares = [];

if(__DEV__) {
    middlewares.push(createLogger());
}

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
    persistedReducer,
    undefined,
    compose(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
