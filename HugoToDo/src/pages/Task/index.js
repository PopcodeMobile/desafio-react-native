import React from 'react';
import { StyleSheet, View } from 'react-native';
import TaskList from './components/taskList';
import Header from './components/header';
import ButtonAddTask from './components/buttonAddTask';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});

export default function Task() {
  return (
    <View style={style.container}>
      <Header />
      <TaskList />
      <ButtonAddTask />
    </View>
  );
}
