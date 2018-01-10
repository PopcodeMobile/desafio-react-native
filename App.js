/* @flow */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, StatusBar } from 'react-native';
import { createStore } from 'redux';
import reducers from './src/reducers';
import Todo from './src/components/Todo';
import { MenuProvider } from 'react-native-popup-menu';

export default class App extends Component<{}> {
  render() {
    const store = createStore(reducers, {});
    return (
      <View style={{ flex: 1, flexDirection: 'row'}}>
        <StatusBar
          backgroundColor='#121212'
          barStyle="light-content"
        />
        <Provider store={store}>
          <MenuProvider>
              <Todo />
          </MenuProvider>
        </Provider>
    </View>
    );
  }
}
