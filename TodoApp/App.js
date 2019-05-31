// @flow
import React from "react";
import { StatusBar, View } from "react-native";
import { Font, AppLoading, Icon, Constants } from "expo";
import TodoList from "./screens/TodoList";

export default class App extends React.Component {
    state = {
        isLoadingComplete: false
    };

    loadResourcesAsync = async () => {
        return Promise.all([
            Font.loadAsync({
                // This is the font and icon used by native base
                ...Icon.Ionicons.font,
                ...Icon.MaterialCommunityIcons.font,
                Roboto: require("native-base/Fonts/Roboto.ttf"),
                Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
            })
        ]);
    };

    handleFinishLoading = () => {
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
                <>
                    <View style={{ height: Constants.statusBarHeight }}>
                        <StatusBar translucent barStyle="dark-content" />
                    </View>
                    <TodoList />
                </>
            );
        }
    }
}
