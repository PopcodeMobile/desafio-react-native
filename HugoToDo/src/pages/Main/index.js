import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, Button } from 'react-native';
import * as TodoActions from '../../store/actions/todos';

// import { Container } from './styles';

const Main = ({ todos, addTodo }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    {todos.map(todo => (
      <Text key={todo.id}>{todo.text}</Text>
    ))}
    <Button title="Add" onPress={() => addTodo('Desafio PopCode')} />
  </View>
);

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
