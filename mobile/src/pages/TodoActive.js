import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as TodoActions } from "../store/redux/todosRedux";
import api from '../services/api';

import styles from './Styles/TodoActiveStyles';

import NotTodo from './components/NotTodo';
import FlatListItemActive from './components/FlatListItemActive';

import garbage from '../assets/garbage.png';
import done from '../assets/checked.png';
import edit from '../assets/edit.png';

class TodoActive extends Component {

    handleRemoveTodo = async id => {
        await api.delete(`/todo/${id}`);
        this.props.removeTodo(id);
    }

    handleToggleTodo = async id => {
        await api.put(`/todo/${id}`);
        this.props.toggleTodo(id);
    }

    itemsNotCompleted = todos => todos.filter(todo => !todo.complete === true);

    render() {
        const { todos, editTodo } = this.props;
        const notCompleteTodos = this.itemsNotCompleted(todos);
        return (
            <View style={styles.appContainer}>
                {notCompleteTodos.length > 0
                    ?
                    <View style={styles.flatList}>
                        <Text style={styles.title} >Active</Text>
                        <FlatList
                            data={notCompleteTodos}
                            keyExtractor={todo => '' + todo.id}
                            renderItem={({ item }) => (
                                <FlatListItemActive
                                    item={item}
                                    garbage={garbage}
                                    edit={edit}
                                    done={done}
                                    toggleTodo={this.handleToggleTodo}
                                    editTodo={editTodo}
                                    removeTodo={this.handleRemoveTodo}
                                />
                            )
                            } />
                    </View>
                    : <NotTodo
                        title={'You have not active tasks yet :/'}
                    />
                }
            </View>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoActive);

