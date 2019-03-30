import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import './config/StatusBarConfig';

const App = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>    
            <Routes />
        </PersistGate>
    </Provider>
);

export default App;