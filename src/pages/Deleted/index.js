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
    deletedTasks: [],
    erase: false,
  };

  async componentDidMount() {
    const {navigation} = this.props;
    const deletedTasks = navigation.getParam('deleted');

    this.setState({deletedTasks});
  }

  componentDidUpdate() {
    const {deletedTasks, erase} = this.state;

    if (erase) {
      AsyncStorage.setItem('deletedTasks', JSON.stringify(deletedTasks));
    }
  }

  deleteTasks = () => {
    const {deletedTasks} = this.state;

    deletedTasks.splice(0, deletedTasks.length);

    this.setState({deletedTasks, erase: true});
  };

  render() {
    const {deletedTasks} = this.state;

    return (
      <Container>
        <List
          data={deletedTasks}
          keyExtractor={task => task.key}
          renderItem={({item}) => (
            <ToDoItem>
              <Icon name="close" size={24} color="#4a4a4a" />
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
  title: 'Tarefas excluídas',
};
