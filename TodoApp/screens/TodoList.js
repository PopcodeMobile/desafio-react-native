// @flow
import React from "react";
import { Platform } from "react-native";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Left,
    Body,
    Text
} from "native-base";
import { connect } from "react-redux";
import { createTodo } from "../store/actions";
import type { Action } from "../store/actions";

type TodoInput = {
    text: string,
    dueDate?: Date
};

type Props = {
    todosIds: Array<string>,
    todos: Object,
    createTodo: (todo: TodoInput) => void
};

type Dispatch = (action: Action) => void;
class TodoList extends React.Component<Props> {
    handleCreateTodo = (todo: TodoInput) => {
        this.props.createTodo(todo);
    };

    render() {
        const title = "Hugo's ToDo List";
        const { todosIds, todos } = this.props;
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon
                                name={
                                    Platform.OS === "ios"
                                        ? "ios-list"
                                        : "md-list"
                                }
                            />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{title}</Title>
                    </Body>
                </Header>
                <Content padder>
                    <Text>
                        Header with noLeft prop, eliminates Left component
                        for Android
                    </Text>
                    <Text>{JSON.stringify(todosIds)}</Text>
                    <Text>{JSON.stringify(todos)}</Text>
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(todos: Object) {
    return {
        todos: todos.todosById,
        todosIds: todos.todosIds
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        createTodo: todo => dispatch(createTodo(todo))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
