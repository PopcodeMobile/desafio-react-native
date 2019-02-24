// @flow

import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Creators as TodoActions } from 'store/ducks/todo';

import { TodoModel } from 'models';

import { Checkbox, Icon } from 'components';

import styles from './styles';

type Props = {
  todo: TodoModel,
  edit: () => mixed,
  todoUpdateRequest: (todo: TodoModel) => mixed,
  todoRemoveRequest: (id: number) => mixed,
}

const todoItem = (props: Props) => {
  const { todo } = props;
  const editItem = (): void => {
    props.edit();
  };

  const switchItemDone = (): void => {
    props.todoUpdateRequest({ ...todo, done: !todo.done });
  };

  const removeItem = (): void => {
    props.todoRemoveRequest(todo.id);
  };

  return (
    <View style={[styles.container, props.todo && props.todo.done && styles.completed]}>
      <Checkbox
        style={[styles.checkbox, todo.done && styles.doneText]}
        checked={todo.done}
        onPress={switchItemDone}
      />
      <TouchableOpacity style={styles.textContainer} onPress={editItem}>
        <Text style={[styles.text, todo.done && styles.doneText]}>{todo.description}</Text>
        {todo.dueDate && (
          <Text style={[todo.done && styles.doneText]}>
            Vence em:
            {' '}
            {todo.dueDate}
          </Text>
        )}
      </TouchableOpacity>
      <Icon name="close" style={styles.removeIcon} onPress={removeItem} />
    </View>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(null, mapDispatchToProps)(todoItem);
