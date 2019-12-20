import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';

import {Container, List, ToDoItem, ToDoText, DeleteButton} from './styles';

export default class Completed extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    completedTasks: [],
    erase: false,
  };

  async componentDidMount() {
    const {navigation} = this.props;
    const completedTasks = navigation.getParam('completed');

    this.setState({completedTasks});
  }

  componentDidUpdate() {
    const {completedTasks, erase} = this.state;

    if (erase) {
      AsyncStorage.setItem('completedTasks', JSON.stringify(completedTasks));
    }
  }

  deleteTasks = () => {
    const {completedTasks} = this.state;

    completedTasks.splice(0, completedTasks.length);

    this.setState({completedTasks, erase: true});
  };

  render() {
    const {completedTasks} = this.state;
    return (
      <Container>
        <List
          data={completedTasks}
          keyExtractor={task => task.key}
          renderItem={({item}) => (
            <ToDoItem>
              <Icon name="check" size={24} color="#4a4a4a" />
              <ToDoText>{item.description}</ToDoText>
            </ToDoItem>
          )}
        />
        <DeleteButton onPress={() => this.deleteTasks()}>
          <Icon name="delete" size={24} color="#4a4a4a" />
        </DeleteButton>
      </Container>
    );
  }
}
Completed.navigationOptions = {
  title: 'Tarefas concluídas',
};
