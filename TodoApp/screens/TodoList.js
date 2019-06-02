// @flow
import * as React from "react";
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
    Text,
    Root
} from "native-base";
import { connect } from "react-redux";
import { createTodo } from "../store/actions";
import type { Action } from "../store/actions";
// @flow
import TodoInput from "./../components/TodoInput";
import type { TodoInputValue, TodoState } from "./../types/todoTypes";

type Props = {
    todosIds: Array<string>,
    todos: TodoState,
    createTodo: (todo: TodoInputValue) => void
};

type Dispatch = (action: Action) => void;
class TodoList extends React.Component<Props> {
    handleCreateTodo = (todo: TodoInputValue) => {
        this.props.createTodo(todo);
    };

    render(): React.Node {
        const title: string = "Hugo's ToDo List";
        const { todosIds, todos, createTodo } = this.props;
        return (
            <Root>
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
                        <TodoInput handleSubmit={createTodo} />
                        <Text>
                            Header with noLeft prop, eliminates Left
                            component for Android
                        </Text>
                        <Text>{JSON.stringify(todosIds)}</Text>
                        <Text>{JSON.stringify(todos)}</Text>
                    </Content>
                </Container>
            </Root>
        );
    }
}

function mapStateToProps(todos: TodoState) {
    return {
        todos: todos.todosById,
        todosIds: todos.todosIds
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        createTodo: (todo: TodoInputValue) => dispatch(createTodo(todo))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
