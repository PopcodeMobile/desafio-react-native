// @flow
import * as React from "react";
import { Platform, FlatList } from "react-native";
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
    Root,
    H3
} from "native-base";
import { connect } from "react-redux";
import { createTodo, toogleTodo, deleteTodo } from "../store/actions";
import type { Action } from "../store/actions";
// @flow
import TodoInput from "./../components/TodoInput";
import TodoItem from "./../components/TodoItem";
import type {
    TodoInputValue,
    TodoState,
    Todo
} from "./../types/todoTypes";

type Props = {
    todosIds: Array<string>,
    todos: TodoState,
    createTodo: (todo: TodoInputValue) => void,
    toogleTodo: (todoId: string) => void,
    deleteTodo: (todoId: string) => void
};

type Dispatch = (action: Action) => void;
class TodoList extends React.Component<Props> {
    renderTodoItem = ({ item }) => {
        const { toogleTodo, deleteTodo } = this.props;
        return <TodoItem todo={item} toogleTodo={toogleTodo} />;
    };

    render(): React.Node {
        const title: string = "Hugo's To Do List";
        const { todos, createTodo } = this.props;
        const todosArray: Array<Todo> = Object.values(todos);
        const emptyText: string =
            "So far so good, add new todos and keep going!";
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
                        <Text>{JSON.stringify(todosArray)}</Text>
                        <FlatList
                            ListEmptyComponent={<H3>{emptyText}</H3>}
                            data={todosArray}
                            keyExtractor={(item, index) =>
                                index.toString()
                            }
                            renderItem={this.renderTodoItem}
                        />
                    </Content>
                </Container>
            </Root>
        );
    }
}

function mapStateToProps(reducer: TodoState) {
    return {
        todos: reducer.todos
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        createTodo: (todo: TodoInputValue) => dispatch(createTodo(todo)),
        toogleTodo: (todoId: string) => dispatch(toogleTodo(todoId)),
        deleteTodo: (todoId: string) => dispatch(deleteTodo(todoId))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
