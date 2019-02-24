// @flow

import React, { Component } from 'react';

import { FlatList, View, Text } from 'react-native';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Button } from 'components';
import { TodoModel, TodoListModel } from 'models';

import { TodoItem, AddTodo, Filter } from './components';
import styles from './styles';

type State = {
  modalVisible: boolean,
  filter: 'ALL' | 'ACTIVE' | 'COMPLETED',
  selectedTodo: TodoModel,
};

class TodoList extends Component<TodoListModel, State> {
  state = {
    modalVisible: false,
    filter: 'ALL',
    selectedTodo: {},
  };

  extractKey = (todoItem: TodoModel): string => todoItem.id.toString();

  renderItem = ({ item }: { item: TodoModel }): any => (
    <TodoItem
      todo={item}
      edit={() => {
        this.setState({ selectedTodo: item, modalVisible: true });
      }}
    />
  );

  setFilter = (filter: 'ALL' | 'ACTIVE' | 'COMPLETED'): void => {
    this.setState({ filter });
  };

  itemsLeft = (): number => (
    this.props.todos.reduce((prev, curr) => (curr.done ? prev : prev + 1), 0)
  );

  filteredItems = () => {
    const { todos } = this.props;
    switch (this.state.filter) {
      case 'ALL':
        return todos;
      case 'ACTIVE':
        return todos.filter(value => !value.done);
      case 'COMPLETED':
        return todos.filter(value => value.done);
      default:
        return todos;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Lista de todos</Text>
          <Button
            color="warning"
            label="Adicionar"
            onPress={() => {
              this.setState({ modalVisible: true });
            }}
          />
        </View>
        <Text style={styles.itemsLeftText}>
          Itens a fazer:
          {' '}
          <Text style={styles.bold}>
            {this.itemsLeft()}
          </Text>
        </Text>
        <Filter filter={this.state.filter} setFilter={this.setFilter} />
        <FlatList
          data={this.filteredItems()}
          keyExtractor={this.extractKey}
          renderItem={this.renderItem}
          ListEmptyComponent={<Text>Não há itens a serem exibidos.</Text>}
        />
        <AddTodo
          visible={this.state.modalVisible}
          hideModal={() => {
            this.setState({ modalVisible: false, selectedTodo: {} });
          }}
          onChangeTodo={(todo: TodoModel) => {
            this.setState({ selectedTodo: todo });
          }}
          todo={this.state.selectedTodo}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todo.todos,
});

// const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(TodoList);
