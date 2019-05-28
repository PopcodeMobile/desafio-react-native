import React, { useEffect, useState } from 'react';
import {
  ScrollView, StyleSheet, View, Text,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import * as TodoActions from '../../../../store/actions/todos';

import TaskItem from '../taskItem';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const TaskList = ({
  state: { todos },
  addTaskCompleted,
  showModalDeleteTask,
  showModalCompletedTask,
}) => {
  const [tasks, setTasks] = useState(todos.data);

  useEffect(() => {
    switch (todos.filter) {
      case 'all':
        return setTasks(todos.data);
      case 'done':
        return setTasks(todos.data.filter(todo => todo.completed));
      case 'pending':
        return setTasks(todos.data.filter(todo => !todo.completed));
      case 'today':
        return setTasks(todos.data.filter(todo => todo.dueDate === moment().format('L')));
      default:
        return todos.data;
    }
  }, [todos.data, todos.filter]);

  const renderTask = () => tasks.map(todo => (
    <TaskItem
      key={todo.id}
      todo={todo}
      handlerClick={addTaskCompleted}
      handlerClickAction={todo.completed ? showModalCompletedTask : showModalDeleteTask}
    />
  ));
  return (
    <ScrollView style={style.container}>
      {tasks.length ? (
        renderTask()
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>No Tasks</Text>
        </View>
      )}
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskList);
