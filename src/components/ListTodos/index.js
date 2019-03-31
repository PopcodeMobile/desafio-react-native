import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, FlatList, Text } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import * as allActions from '../../store/actions/todoList';
import Todo from '../Todo';

const ListTodos = ({ navigation, todos, markTodo, deleteTodo }) => {

    const situation = (navigation.state.key === "Finished") ? (true) : (false);
    
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
    const ar = todos.filter((hero) => hero.pendding === true);
    return (
        <View style={styles.container}>
            <View style={styles.count}>
                <Text>{(todos.length > 0) ? (`${sum(ar)}/${todos.length}`) : (`Você não possui nenhuma tarefa`)}</Text>
            </View>
            <FlatList
                style={styles.flat} 
                data={todos.filter(res => res.pendding === situation )}
                keyExtractor={item => `${item._id}`}
                renderItem={this.renderItem}
            />
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

