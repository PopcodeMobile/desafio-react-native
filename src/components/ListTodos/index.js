import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, FlatList, Text } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import * as allActions from '../../store/actions/todoList';
import Todo from '../Todo';
import FloatingButton from '../FloatingButton';

const ListTodos = ({ navigation, todos, markTodo, deleteTodo }) => {

    const situation = (navigation.state.key === "Finalizadas") ? (true) : (false);
    
    renderItem = ({ item }) => (
        <Todo 
            navigation={navigation} 
            item={item}
            markTodo={markTodo}
            deleteTodo={deleteTodo}
            situation={situation} 
        />
    )

    const sum = (todos) => todos.reduce((total, item) => total+= 1, 0);
    const complete = todos.filter((hero) => hero.pendding === true);
    
    return (
        <View style={styles.container}>
            <View style={styles.count}>
                <Text style={styles.textCount}>{(todos.length > 0) ? (`Você possui ${todos.length - sum(complete)} tarefa(s) pendente(s) `) : ('Sem tarefas cadastradas...')}</Text>
            </View>
            <FlatList
                style={styles.flat} 
                data={todos.filter(res => res.pendding === situation )}
                keyExtractor={item => `${item._id}`}
                renderItem={this.renderItem}
            />
            <FloatingButton />
        </View>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    markTodo: (_id) => dispatch(allActions.markTodo(_id)),
    deleteTodo: (_id) => dispatch(allActions.deleteTodo(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(ListTodos));

