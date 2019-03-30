import { createStore } from 'redux';
import reducer from './reducers/todoList';
// import { rootReducer } from './reducers';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { AsyncStorage } from 'react-native';

// const persistConfig = {
//     key: 'root',
//     storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default () => {
//     const store = createStore(persistedReducer)
//     const persistor = persistStore(store, {storage: AsyncStorage})
//     return { store, persistor } 
// }

const store = createStore(reducer);

export default store;
