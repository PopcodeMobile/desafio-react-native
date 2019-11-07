import React from 'react';
import Routes from './routes';
import SplashScreen from 'react-native-splash-screen'
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

class App extends React.Component { 

    componentDidMount() {
        /** Cor da barra de status no Android **/
        StatusBar.setBackgroundColor('#1E90FF');
        /** Cor da barra de status no IOS **/
        StatusBar.setBarStyle('light-content');
        /** Splash Screen **/
        setTimeout(function(){SplashScreen.hide()}, 3000);
    }

    render() {
        return(
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>    
                    <Routes />
                </PersistGate>
            </Provider>
        )
    }
}

export default App;