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
import {
    createTodo,
    toogleTodo,
    deleteTodo,
    editTodo
} from "../store/actions";
import type { Action } from "../store/actions";
// @flow
import TodoInput from "./../components/TodoInput";
import TodoItem from "./../components/TodoItem";
import EditTodoModal from "./../components/EditTodoModal";
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
    deleteTodo: (todoId: string) => void,
    editTodo: (todoId: string, todo: TodoInputValue) => void
};

type State = {
    showEditModal: boolean,
    editTodoId: string
};

type Dispatch = (action: Action) => void;
class TodoList extends React.Component<Props, State> {
    state = { showEditModal: false, editTodoId: "" };

    showEditModal = (todoId: string): void => {
        this.setState({
            showEditModal: true,
            editTodoId: todoId
        });
    };

    hideEditModal = (): void => {
        this.setState({
            showEditModal: false,
            editTodoId: ""
        });
    };

    renderTodoItem = ({ item }) => {
        const { toogleTodo, deleteTodo } = this.props;
        return (
            <TodoItem
                todo={item}
                toogleTodo={toogleTodo}
                deleteTodo={deleteTodo}
                showEditModal={this.showEditModal}
            />
        );
    };

    handleEditTodo = (todo: TodoInputValue): void => {
        this.props.editTodo(this.state.editTodoId, todo);
        this.hideEditModal();
    };

    render(): React.Node {
        const title: string = "Hugo's To Do List";
        const { todos, createTodo } = this.props;
        const { showEditModal, editTodoId } = this.state;
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
                        <TodoInput
                            handleSubmit={createTodo}
                            action="ADD"
                        />
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
                    <EditTodoModal
                        showEditModal={showEditModal}
                        hideEditModal={this.hideEditModal}
                        todo={todos[editTodoId]}
                        handleEditTodo={this.handleEditTodo}
                    />
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
        deleteTodo: (todoId: string) => dispatch(deleteTodo(todoId)),
        editTodo: (todoId: string, todo: TodoInputValue) =>
            dispatch(editTodo(todoId, todo))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
