// @flow
import * as React from "react";
import { FlatList, StyleSheet } from "react-native";
import { Container, Content, Root, H3 } from "native-base";
import { connect } from "react-redux";
import {
    createTodo,
    toogleTodo,
    deleteTodo,
    editTodo,
    setFilter
} from "../store/actions";
import type { Action } from "../store/actions";
// @flow
import TodoHeader from "./../components/TodoHeader";
import TodoInput from "./../components/TodoInput";
import TodoItem from "./../components/TodoItem";
import EditTodoModal from "./../components/EditTodoModal";
import type {
    TodoInputValue,
    TodoState,
    Todo
} from "./../types/todoTypes";
import { getVisibleTodos, getActiveItensTotal } from "../selectors";

type Props = {
    todosIds: Array<string>,
    todos: TodoState,
    todosArray: Array<Todo>,
    filter: string,
    activeItensTotal: number,
    createTodo: (todo: TodoInputValue) => void,
    toogleTodo: (todoId: string) => void,
    deleteTodo: (todoId: string) => void,
    editTodo: (todoId: string, todo: TodoInputValue) => void,
    setFilter: (filter: string) => void
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

    renderTodoItem = ({ item }: Todo): React.Node => {
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
        const {
            todos,
            createTodo,
            todosArray,
            setFilter,
            activeItensTotal,
            filter
        } = this.props;
        const { showEditModal, editTodoId } = this.state;
        const emptyText: string =
            "So far so good, add new todos and keep going!";
        return (
            <Root>
                <Container>
                    <TodoHeader
                        setFilter={setFilter}
                        activeItensTotal={activeItensTotal}
                        filter={filter}
                    />
                    <Content padder>
                        <TodoInput
                            handleSubmit={createTodo}
                            action="ADD"
                        />
                        <FlatList
                            ListEmptyComponent={
                                <H3 style={styles.emptyText}>
                                    {emptyText}
                                </H3>
                            }
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

const styles = StyleSheet.create({
    emptyText: { marginTop: 10 }
});

function mapStateToProps(reducer: TodoState) {
    return {
        todos: reducer.todos,
        filter: reducer.visibilityFilter,
        todosArray: getVisibleTodos(reducer),
        activeItensTotal: getActiveItensTotal(reducer)
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        createTodo: (todo: TodoInputValue) => dispatch(createTodo(todo)),
        toogleTodo: (todoId: string) => dispatch(toogleTodo(todoId)),
        deleteTodo: (todoId: string) => dispatch(deleteTodo(todoId)),
        editTodo: (todoId: string, todo: TodoInputValue) =>
            dispatch(editTodo(todoId, todo)),
        setFilter: (filter: string) => dispatch(setFilter(filter))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
