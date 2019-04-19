import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes from "./Routes";
import LoadingView from "./components/LoadingView";
import { PersistGate } from 'redux-persist/lib/integration/react';
// import the two exports from the last code snippet.
import { persistor, store } from './store';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<LoadingView />} persistor={persistor}>
          <Routes />
        </PersistGate>
        
      </Provider>
    );
  }
}
