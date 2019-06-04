// @flow
import * as React from "react";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
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
    showTodoOptions: boolean
};

class TodoItem extends React.Component<Props, State> {
    state = {
        showTodoOptions: false
    };

    toogleOptions() {
        this.setState(prevState => ({
            showTodoOptions: !prevState.showTodoOptions
        }));
    }

    render(): React.Node {
        const { todo, toogleTodo, deleteTodo, showEditModal } = this.props;
        const { showTodoOptions } = this.state;

        if (todo === undefined) return <></>;

        return (
            <TouchableOpacity
                onPress={() => toogleTodo(todo.id)}
                onLongPress={() => this.toogleOptions()}
            >
                <View style={styles.view}>
                    <Icon
                        style={styles.checkIcon}
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
                            style={
                                todo.text.length < 80
                                    ? styles.shortText
                                    : styles.longText
                            }
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
                        <View style={styles.buttonsView}>
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
                        </View>
                    )}
                </View>
            </TouchableOpacity>
        );
    }
}
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
        color: "gray"
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
        // borderBottomColor: "#47315a",
        borderBottomWidth: 0.3,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
        marginTop: 5
    }
});

export default TodoItem;
