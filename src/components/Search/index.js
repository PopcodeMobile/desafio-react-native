import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';
import { connect } from 'react-redux'
import * as allActions from '../../store/actions/todoList';
import Todo from '../Todo';

class Search extends Component {
    constructor(props) {
      super(props);
  
      this.todos = this.props.todos;
      this.state = {
        searchString: '',
        todos: this.props.todos,
      };
      this.handle = this.handle.bind(this);
    }
    
    regexResult = (string) => {return regex = new RegExp(string, 'gi')};
    
    handle = (value) => {(value !== '') ? (this.setState({ searchString: value })) : 
        ((this.todos = this.props.todos) && (this.setState({ searchString: '' })))};
    
    renderItem = ({ item }) => (
        <Todo 
            navigation={this.props.navigation} 
            item={item}
            markTodo={this.props.markTodo}
            deleteTodo={this.props.deleteTodo}
            situation={[]} 
        />
    )

    render() {
        
      const regex = `(^|)(${this.state.searchString})(?=|)`;  
      this.todos = (this.state.searchString !== '') ? 
                    (this.todos.filter(a => this.regexResult(regex).test(a.title) ||
                     this.regexResult(regex).test(a.description) ||
                      this.regexResult(regex).test(a.date_created) || 
                        this.regexResult(regex).test(a.date_due))) : (this.props.todos)

      return (
        <View style={styles.container}>
            <View style={styles.bar}>
                <TextInput 
                    style={styles.input}
                    placeholder="Digite aqui"
                    multiline={true}
                    onChangeText={(e) => this.handle(e) }
                >
                </TextInput>
            </View>
            <View style={styles.listItems}>    
                <FlatList
                    style={styles.flat} 
                    data={this.todos}
                    keyExtractor={item => `${item._id}`}
                    renderItem={this.renderItem}
                />
            </View>
        </View>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    markTodo: (_id) => dispatch(allActions.markTodo(_id)),
    deleteTodo: (_id) => dispatch(allActions.deleteTodo(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);