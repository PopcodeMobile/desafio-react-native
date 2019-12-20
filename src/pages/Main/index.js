import React, {Component} from 'react';
import {Keyboard} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import Dialog, {
  DialogFooter,
  DialogButton,
  DialogContent,
  SlideAnimation,
  DialogTitle,
} from 'react-native-popup-dialog';
import DateTimePicker from 'react-native-modal-datetime-picker';

import {
  Container,
  Form,
  SubmitButton,
  Input,
  List,
  ToDoItem,
  ToDoText,
  TabsContainer,
  TabItem,
  TabText,
  TabBox,
  TabNum,
  IconButton,
  ChangeInput,
} from './styles';

export default class Main extends Component {
  static propTypes = {
    navigation: PropTypes.shape({navigate: PropTypes.func}).isRequired,
  };

  state = {
    newTask: '',
    tasks: [],
    completedTasks: [],
    deletedTasks: [],
    key: '',
    popup: false,
    editK: '',
    isDateTimePickerVisible: false,
    date: '',
  };

  async componentDidMount() {
    const tasks = await AsyncStorage.getItem('tasks');
    const deletedTasks = await AsyncStorage.getItem('deletedTasks');
    const completedTasks = await AsyncStorage.getItem('completedTasks');

    if (tasks) {
      this.setState({tasks: JSON.parse(tasks)});
    }
    if (deletedTasks) {
      this.setState({deletedTasks: JSON.parse(deletedTasks)});
    }
    if (completedTasks) {
      this.setState({completedTasks: JSON.parse(completedTasks)});
    }
  }

  componentDidUpdate(_, prevState) {
    const {tasks} = this.state;
    const {deletedTasks} = this.state;
    const {completedTasks} = this.state;

    AsyncStorage.setItem('tasks', JSON.stringify(tasks));

    if (prevState.completedTasks !== completedTasks) {
      AsyncStorage.setItem('completedTasks', JSON.stringify(completedTasks));
    }

    if (prevState.deletedTasks !== deletedTasks) {
      AsyncStorage.setItem('deletedTasks', JSON.stringify(deletedTasks));
    }
  }

  handleAddTask = () => {
    const {newTask, tasks, key, date} = this.state;

    const data = {
      key: Math.random(),
      description: newTask,
      date,
    };

    this.setState({
      tasks: [...tasks, data],
      newTask: '',
      key,
      date,
    });

    Keyboard.dismiss();
  };

  handleEditTask = () => {
    const {newTask, tasks, editK, date} = this.state;
    let i = 0;

    const newData = {
      key: editK,
      description: newTask,
      date,
    };

    tasks.forEach(function(item, index) {
      if (item.key === editK) {
        i = index;
        tasks.splice(i, 1, newData);
      }
    });

    this.setState({
      tasks,
      newTask: '',
      popup: false,
    });

    Keyboard.dismiss();
  };

  handleCompletedTask = item => {
    const {tasks, completedTasks} = this.state;

    this.setState({
      completedTasks: [...completedTasks].concat(tasks.filter(t => t === item)),
      tasks: tasks.filter(t => t !== item),
    });
  };

  handleDeletedTask = item => {
    const {tasks, deletedTasks} = this.state;

    this.setState({
      deletedTasks: [...deletedTasks].concat(tasks.filter(t => t === item)),
      tasks: tasks.filter(t => t !== item),
    });
  };

  handleCompletedNavigation = completed => {
    const {navigation} = this.props;

    navigation.navigate('Completed', {completed});
  };

  handleDeletedNavigation = deleted => {
    const {navigation} = this.props;

    navigation.navigate('Deleted', {deleted});
  };

  setVisible = bool => {
    this.setState({popup: bool});
  };

  setNewTask = item => {
    this.setState({
      editK: item.key,
      popup: true,
    });
  };

  showDateTimePicker = bool => {
    this.setState({isDateTimePickerVisible: bool});
  };

  setDate = date => {
    this.setState({
      date,
    });
    this.handleAddTask();
    this.showDateTimePicker(false);
  };

  renderITem = ({item}) => (
    <ToDoItem>
      <IconButton onPress={() => this.handleDeletedTask(item)}>
        <Icon name="close" size={24} color="#4a4a4a" />
      </IconButton>

      <ToDoText onPress={() => this.setNewTask(item)}>
        <TabText>{item.description}</TabText>
      </ToDoText>

      <IconButton onPress={() => this.handleCompletedTask(item)}>
        <Icon name="check" size={24} color="#4a4a4a" />
      </IconButton>
    </ToDoItem>
  );

  numbers = () => {
    const {tasks} = this.state;
    if (typeof tasks !== 'undefined' && tasks !== null) {
      return tasks.length;
    }
    return 0;
  };

  render() {
    console.disableYellowBox = true;
    const {
      tasks,
      newTask,
      completedTasks,
      deletedTasks,
      popup,
      isDateTimePickerVisible,
    } = this.state;

    return (
      <Container>
        <Form>
          <Input
            placeholder="O que precisa ser feito?"
            value={newTask}
            onChangeText={text => this.setState({newTask: text})}
            returnKeyType="send"
            onSubmitEditing={() => this.showDateTimePicker(true)}
          />
          <SubmitButton onPress={() => this.showDateTimePicker(true)}>
            <Icon name="add" size={18} color="#4a4a4a" />
            <DateTimePicker
              value={new Date()}
              mode="date"
              is24Hour
              isVisible={isDateTimePickerVisible}
              onConfirm={this.setDate}
              onCancel={() => this.showDateTimePicker(false)}
              minimumDate={new Date()}
            />
          </SubmitButton>
        </Form>
        <List
          data={tasks}
          keyExtractor={task => task.key}
          renderItem={this.renderITem}
        />
        <Dialog
          visible={popup}
          dialogAnimation={new SlideAnimation({slideFrom: 'bottom'})}
          dialogTitle={
            <DialogTitle
              title="Você quer editar essa tarefa?"
              style={{backgroundColor: '#c1dbcf'}}
              textStyle={{color: '#4a4a4a'}}
            />
          }
          onTouchOutside={() => this.setVisible(false)}
          footer={
            <DialogFooter>
              <DialogButton
                text="Salvar"
                onPress={() => this.handleEditTask()}
                style={{backgroundColor: '#c1dbcf'}}
                textStyle={{color: '#4a4a4a'}}
              />
            </DialogFooter>
          }>
          <DialogContent
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              color: '#c1dbcf',
            }}>
            <ChangeInput
              placeholder="Edite aqui"
              value={newTask}
              onChangeText={text => this.setState({newTask: text})}
              returnKeyType="send"
              onSubmitEditing={() => this.handleEditTask()}
            />
          </DialogContent>
        </Dialog>

        <TabsContainer>
          <TabItem onPress={() => this.handleDeletedNavigation(deletedTasks)}>
            <Icon name="indeterminate-check-box" size={26} color="#4a4a4a" />
            <TabText>Não feitos</TabText>
          </TabItem>
          <TabBox>
            <TabText>Você tem</TabText>
            <TabNum>{this.numbers()}</TabNum>
            <TabText>atividades pendentes</TabText>
          </TabBox>
          <TabItem
            onPress={() => this.handleCompletedNavigation(completedTasks)}>
            <Icon name="check-box" size={26} color="#4a4a4a" />
            <TabText>Feitos</TabText>
          </TabItem>
        </TabsContainer>
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'DoList',
};
