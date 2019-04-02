import React, { Component } from 'react';
import HomePage from '../components/Home';
import {store,persistor} from '../store';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
class Home extends Component {
    render() {
        return (
            <Provider store={store} >
                <PersistGate loading={null} persistor={persistor}>
                    <HomePage {...this.props} />
                </PersistGate>
            </Provider>
        )
    }
}
export default Home;


