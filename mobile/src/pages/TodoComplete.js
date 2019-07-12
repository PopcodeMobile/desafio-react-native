import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as TodoActions } from "../store/redux/todosRedux";

import NotTodo from './components/NotTodo';
import FlatListItemComplete from './components/FlatListItemComplete';
import api from '../services/api';

import styles from './Styles/TodoCompleteStyles';

import garbage from '../assets/garbage.png';


class TodoComplete extends Component {

    handleRemoveTodo = async id => {
        await api.delete(`/todo/${id}`);
        this.props.removeTodo(id);
    }

    itemsCompleted = todos => todos.filter(todo => todo.complete === true);

    render() {
        const { todos } = this.props;
        const completeTodos = this.itemsCompleted(todos);
        return (
            <View style={styles.appContainer}>
                {completeTodos.length > 0
                    ?
                    <View style={styles.flatList}>
                        <Text style={styles.title} >Completed</Text>
                        <FlatList
                            data={completeTodos}
                            keyExtractor={todo => '' + todo.id}
                            renderItem={({ item }) => (
                                <FlatListItemComplete
                                    item={item}
                                    garbage={garbage}
                                    removeTodo={this.handleRemoveTodo}
                                />
                            )
                            }
                        />
                    </View>
                    : <NotTodo
                        title={'You have not completed tasks yet :('}
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoComplete);
