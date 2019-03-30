import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import * as allActions from '../../store/actions/todoList';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const ListTodos = ({ navigation, todos, markTodo }) => {

    const situation = (navigation.state.key === "Finished") ? (true) : (false);
    
    renderItem = ({ item }) => (
        <View style={styles.card}>
            <TouchableOpacity onPress={() => markTodo(item._id)}>
                <View>
                    <Text style={(situation) ? (styles.titleMark) : (styles.title)}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </TouchableOpacity>    
            <View style={styles.cardFooter}>
                <View style={styles.options}>
                    <Text style={styles.dates}>{`criação: ${item.date_created} \nprazo final: ${item.date_created}`}</Text>
                </View>
                <View style={styles.options}>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate("Todo", { item: item })} 
                        style={styles.edit}
                    >
                        <EvilIcons name='pencil' size={30} style={styles.editIcon} color='purple' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.delete}>
                        <EvilIcons name='trash' size={30} style={styles.deleteIcon} color='purple' />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
    
    return (
        <View style={styles.container}>
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
    todos: state
})

const mapDispatchToProps = dispatch => ({
    markTodo: (_id) => dispatch(allActions.markTodo(_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(ListTodos));

