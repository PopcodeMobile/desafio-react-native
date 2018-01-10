/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import {
  localAsyncLoadTasks,
  openCloseCreateEditTaskModal,
  taskCompleted,
  addNewTask,
  removeTask
} from '../actions';

import Header from './Header';
import FloatRoundButton from './FloatRoundButton';
import Task from './Task';
import CreateEditTask from './CreateEditTask';
import FilterTaskModal from './FilterTasksModal';


import type { task } from '../flow/FlowTypes';

 type Props = {
   localAsyncLoadTasks: any,
   openCloseCreateEditTaskModal: any,
   taskCompleted: any,
   addNewTask: any,
   removeTask: any,
   taskArray: Array<task>
 };

type taskToRenderItem = {
  task: task,
  key: number
};

type State = {
  hidingTasksCompleted: boolean,
  tasksToRender: Array<taskToRenderItem>,
  isfilterByTagModalVisible: boolean
};

class Todo extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      tasksToRender: [],
      hidingTasksCompleted: false,
      isfilterByTagModalVisible: false
    }
  }

  /*
   * Confere se houve alteração no array de tasks (taskArray) após a atualização
   * do componente, se houve, passa essa atualização para o estado, renderiza o
   * componente novamente e tenta salvar as novas tarefas
  */
  componentDidUpdate(previousProps, previousState) {
    if (previousProps.taskArray !== this.props.taskArray) {
      this.setState({
        tasksToRender: this.getAllTasksWithKey()
      })
      if (this.state.hidingTasksCompleted) {
        this.hideTasksCompleted()
      }
      this._saveTasks(this.props.taskArray);
    }
  }

  /*
   * Tenta salvar as tarefas criadas nesta seção através do Async Storage
  */
  async _saveTasks(tasks: Array<task>) {
    try {
      await AsyncStorage.setItem("taskArray", JSON.stringify(tasks));
    } catch (error) {
      alert('Error saving tasks ):');
      console.log(error);
    }
  }

  /*
   * Quando é finalizada a montagem do componente, tenta-se carregar tarefas
   * criadas em uma seção anterior através do Async Storage. Caso haja error
   * é apresentado um alerta e as tasks salvas são resetadas
  */
  async componentDidMount() {
    try {
      const tasks = JSON.parse(await AsyncStorage.getItem("taskArray"));
      if (tasks) {
        this.props.localAsyncLoadTasks(tasks)
      }
    } catch (error) {
      alert('Error loading tasks ):');
      console.log(error);
      this._saveTasks([]);
    }
  }

  /*
   * Quando o componente está para ser desmontado, tenta-se salvar as tarefas
   * criadas nesta seção através do Async Storage
  */
  componentWillUnmount() {
    this._saveTasks(this.props.taskArray);
  }

  /*
  * Retorna um task component renderizável representando o taskItem (parametro)
  */
  prepareTaskToRender(taskItem: taskToRenderItem) {
    return (
        <Task key={taskItem.key}
            keyValue={taskItem.key} task={taskItem.task}
            onPress={() => this.props.taskCompleted(taskItem.key)}
            onLongPress={()=> this.props.openCloseCreateEditTaskModal(true, taskItem.key)}
            onDelete={() => this.props.removeTask(taskItem.key)}
        />
    )
  }

  /*
   * Retorna um array ordenado (tarefas concluídas por último) com tasks components
   * prontos para serem renderizados
  */
  getTasksReadyToRender(taskArray) {
    const completedTasks = this.state.tasksToRender.filter(item => item.task.complete);
    const remainingTasks = this.state.tasksToRender.filter(item => !item.task.complete);

    return ([
      ...remainingTasks.map((taskItem: taskToRenderItem) =>
                                            this.prepareTaskToRender(taskItem)),
      ...completedTasks.map((taskItem: taskToRenderItem) =>
                                            this.prepareTaskToRender(taskItem))
    ]);
  }

  /*
   * Oculta todas as tarefas completas no array tasksToRender
  */
  hideTasksCompleted() {
    const completedTasks = this.getAllTasksWithKey().filter(item => !item.task.complete);

    this.setState({
      tasksToRender: completedTasks,
      hidingTasksCompleted: true
    });
  }

  /*
  * Retorna um objeto com task e key (posição no taskArray) para cada tarefa
  */
  getAllTasksWithKey() {
    return this.props.taskArray.map((task: task, key:number) => ({ task, key }));
  }

  /*
   * Coloca todas as tarefas no array tasksToRender (remove os filtros)
  */
  showAllTasks() {
    this.setState({
      tasksToRender: this.getAllTasksWithKey(),
      hidingTasksCompleted: false
    });
  }

  /*
   * Callback do botao hide completed, esconde ou mostra as tarefas completas
  */
  onPressHideTasksCompleted() {
    if (!this.state.hidingTasksCompleted){
      this.hideTasksCompleted();
    } else {
      this.showAllTasks();
    }
  }

  /*
   * Adiciona ao array tasksToRender apenas as tarefas que tenham a tag pesquisada pelo
   * usuario
  */
  filterTasksByTag(tag) {
    const tasksWithTag = this.getAllTasksWithKey().filter(item =>
                          item.task.tag.toUpperCase() === tag.toUpperCase()
                         );

    this.setState({
      tasksToRender: tasksWithTag
    });

    this.onPressFilterByTag();
  }

  /*
  * Define a visibilidade da barra de pesquisa de tag (modal)
  */
  onPressFilterByTag() {
    this.setState({
      isfilterByTagModalVisible: !this.state.isfilterByTagModalVisible
    });
  }

  /*
  * Callback do botão de cancelar pertencente ao modal de pesquisa de tag
  */
  filterTasksCancel() {
    this.onPressFilterByTag();
    this.showAllTasks();
  }

  /*
  * Retorna a quantia de tarefas completas
  */
  countTasksCompleted() {
    const tasksCompleted = this.props.taskArray.filter((task : task) => task.complete);
    return tasksCompleted.length
  }

  /*
  * Retorna a quantia de tarefas não completas
  */
  countTasksRemaining() {
    const tasksRemaining = this.props.taskArray.filter((task : task) => !task.complete);
    return tasksRemaining.length
  }

  render() {
    let tasksToRender = this.getTasksReadyToRender(this.state.tasksToRender);

    return (
      <View style={styles.container}>

        <Header
          style={styles.header}
          headerTitle='Task List'
          isHidingTasksCompleted={this.state.hidingTasksCompleted}
          onFilter={() => this.onPressFilterByTag()}
          onShowCompletes={() => this.onPressHideTasksCompleted()}
        />

        <ScrollView style={styles.scrollContainer}>
          {tasksToRender}
        </ScrollView>

        <View style={styles.footer}>
          <Text style={styles.tasksLeft}>
            ── {this.countTasksCompleted()} tasks completed  ──
          </Text>
          <Text style={styles.tasksLeft}>
            ── {this.countTasksRemaining()} tasks remaining ──
          </Text>
        </View>

        <FloatRoundButton
          style={styles.addButton}
          addTask={() => this.props.openCloseCreateEditTaskModal() }
        />

        <CreateEditTask/>

        <FilterTaskModal
          visibleFilterTaskModal={this.state.isfilterByTagModalVisible}
          onPressFilter={(tag) => this.filterTasksByTag(tag)}
          onPressCancel={() => this.filterTasksCancel()}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: '#424242'
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 20
  },
  footer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#424242',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
  tasksLeft: {
    color: '#fff',
    fontSize: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)'
  },
  addButton: {
    backgroundColor: '#212121'
  }
});

const mapStateToProps = ({ tasks }) => {
  const { taskArray } = tasks;
  return { taskArray };
};

export default connect(mapStateToProps, {
  localAsyncLoadTasks,
  openCloseCreateEditTaskModal,
  addNewTask,
  taskCompleted,
  removeTask
})(Todo);
