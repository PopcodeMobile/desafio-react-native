// @flow
import * as React from "react";
import { View, StatusBar } from "react-native";
import { Icon, Font, Constants, AppLoading } from "expo";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
//$FlowFixMe
import { store, persistor } from "./store";
// @flow
import TodoList from "./screens/TodoList";
type Props = {
    /* ... */
};
type State = {
    isLoadingComplete: boolean
};

export default class App extends React.Component<Props, State> {
    state = {
        isLoadingComplete: false
    };

    loadResourcesAsync = async (): Promise<any> => {
        return Promise.all([
            Font.loadAsync({
                // This is the font and icon used by native base
                ...Icon.Ionicons.font,
                ...Icon.MaterialCommunityIcons.font,
                //$FlowFixMe
                Roboto: require("native-base/Fonts/Roboto.ttf"),
                //$FlowFixMe
                Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
            })
        ]);
    };

    handleFinishLoading = (): void => {
        this.setState({ isLoadingComplete: true });
    };

    render() {
        if (!this.state.isLoadingComplete) {
            return (
                <AppLoading
                    startAsync={this.loadResourcesAsync}
                    onFinish={this.handleFinishLoading}
                />
            );
        } else {
            return (
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <View
                            style={{
                                height: Constants.statusBarHeight
                            }}
                        >
                            <StatusBar
                                translucent
                                barStyle="dark-content"
                            />
                        </View>
                        <TodoList />
                    </PersistGate>
                </Provider>
            );
        }
    }
}
