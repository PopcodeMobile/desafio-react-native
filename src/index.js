/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import './config/ReactotronConfig';

import { store, persistor } from './store';

import TodoList from './pages/todoList';
import InitialLoading from './pages/initialLoading';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<InitialLoading />} persistor={persistor}>
      <TodoList />
    </PersistGate>
  </Provider>
);

export default App;
