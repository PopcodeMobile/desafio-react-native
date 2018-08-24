import React, {Component} from 'react';
import { Button } from 'react-native';
import { Icon } from 'react-native-elements'
import { Router, Scene, Stack } from 'react-native-router-flux';

import TodoList from './components/TodoList';
import EditTodo from './components/EditTodo';
import NewTodo from './components/NewTodo';

export default class App extends Component<{}> {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="list" component={TodoList} title="Todo List" renderRightButton={() => <Icon name="heartbeat" type="font-awesome" />} initial />
          <Scene key="editTodo" component={EditTodo} title="Edit Todo Item" />
          <Scene key="newTodo" component={NewTodo} title="New Todo Item" />
        </Stack>
      </Router>
    )
  }
}