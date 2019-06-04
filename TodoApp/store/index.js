// https://www.youtube.com/watch?v=LGkNjt7k4UQ
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "./reducers";
const persistConfig = {
    key: "HugoTodo",
    storage
};

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);
export { store, persistor };
