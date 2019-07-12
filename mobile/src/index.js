import React from 'react';
import { Provider } from 'react-redux';

/* redux */
import store from "./store";

import Routes from './routes';

export default App = () => {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    )
};

