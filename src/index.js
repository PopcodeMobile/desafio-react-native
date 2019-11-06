import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import { StatusBar } from 'react-native';

/** Cor da barra de status no Android **/
StatusBar.setBackgroundColor('#1E90FF');
/** Cor da barra de status no IOS **/
StatusBar.setBarStyle('light-content');

const App = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>    
            <Routes />
        </PersistGate>
    </Provider>
);

export default App;