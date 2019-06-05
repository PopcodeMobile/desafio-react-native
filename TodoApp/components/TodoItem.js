// @flow
import * as React from "react";
import {
    Platform,
    StyleSheet,
    TouchableOpacity,
    Animated,
    Easing
} from "react-native";
import { Content, Icon, Text, View, Button } from "native-base";
import DueDateIndicator from "./../components/DueDateIndicator";
import type { Todo } from "./../types/todoTypes";

type Props = {
    todo: Todo,
    toogleTodo: (todoId: string) => void,
    deleteTodo: (todoId: string) => void,
    showEditModal: (todoId: string) => void
};

type State = {
    showTodoOptions: boolean,
    animations: Object
};

class TodoItem extends React.Component<Props, State> {
    state = {
        showTodoOptions: false,
        animations: {
            height: new Animated.Value(0),
            fade: new Animated.Value(0)
        }
    };

    toogleOptions(): void {
        this.setState(prevState => ({
            showTodoOptions: !prevState.showTodoOptions,
            animations: {
                height: new Animated.Value(0),
                fade: new Animated.Value(0)
            }
        }));
        // https://stackoverflow.com/questions/50602876/react-native-state-change-transitions
        const { height, fade } = this.state.animations;
        Animated.parallel([
            Animated.timing(height, {
                toValue: 15,
                easing: Easing.elastic(),
                duration: 500,
                delay: 1500
            }),
            Animated.timing(fade, {
                toValue: 1,
                easing: Easing.ease,
                duration: 1000,
                delay: 1500
            })
        ]).start();
    }

    render(): React.Node {
        const { todo, toogleTodo, deleteTodo, showEditModal } = this.props;
        const { showTodoOptions, animations } = this.state;

        if (todo === undefined) return <></>;

        return (
            <TouchableOpacity
                onPress={() => toogleTodo(todo.id)}
                onLongPress={() => this.toogleOptions()}
            >
                <View style={styles.view}>
                    <Icon
                        style={[
                            styles.checkIcon,
                            todo.isDone ? styles.itemDoneColor : ""
                        ]}
                        name={
                            todo.isDone
                                ? Platform.OS === "ios"
                                    ? "ios-checkbox-outline"
                                    : "md-checkbox-outline"
                                : Platform.OS === "ios"
                                ? "ios-square-outline"
                                : "md-square-outline"
                        }
                    />
                    <Content style={styles.contentText}>
                        <Text
                            style={[
                                todo.text.length < 80
                                    ? styles.shortText
                                    : styles.longText,
                                todo.isDone ? styles.itemDoneColor : ""
                            ]}
                        >
                            {todo.text}
                        </Text>
                    </Content>
                    {todo.dueDate !== 0 &&
                        !todo.isDone &&
                        !showTodoOptions && (
                            <DueDateIndicator dueDate={todo.dueDate} />
                        )}
                    {showTodoOptions && (
                        <Animated.View
                            style={[
                                styles.buttonsView,
                                { height: animations.height },
                                { opacity: animations.fade }
                            ]}
                        >
                            <Button
                                style={styles.optionsButton}
                                transparent
                                onPress={() => {
                                    deleteTodo(todo.id);
                                    this.toogleOptions();
                                }}
                            >
                                <Icon
                                    style={styles.redText}
                                    name={
                                        Platform.OS === "ios"
                                            ? "ios-trash"
                                            : "md-trash"
                                    }
                                />
                            </Button>

                            <Button
                                transparent
                                style={styles.optionsButton}
                                onPress={() => {
                                    showEditModal(todo.id);
                                    this.toogleOptions();
                                }}
                            >
                                <Icon type="FontAwesome" name="pencil" />
                            </Button>
                        </Animated.View>
                    )}
                </View>
            </TouchableOpacity>
        );
    }
}
const gray = "gray";
const red = "#e5001e";
const styles = StyleSheet.create({
    buttonsView: {
        flexDirection: "row",
        marginBottom: 0,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 0
    },
    checkIcon: { fontSize: 30 },
    contentText: {
        alignSelf: "flex-start",
        marginLeft: 10,
        marginRight: 10
    },
    itemDoneColor: {
        color: gray,
        textDecorationLine: "line-through"
    },
    longText: {
        fontSize: 10,
        letterSpacing: 0
    },
    optionsButton: {
        marginBottom: 0,
        marginLeft: 5,
        marginTop: -10
    },
    redText: { color: red },
    shortText: {
        paddingTop: 3
    },
    view: {
        borderBottomWidth: 0.3,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
        marginTop: 5
    }
});

export default TodoItem;
