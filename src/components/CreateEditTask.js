/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Modal,
  StyleSheet
} from 'react-native';
import {
  openCloseCreateEditTaskModal,
  taskTextChanged,
  taskDeadlineChanged,
  taskTagChanged,
  updateTask,
  addNewTask
} from '../actions';
import type {
  destructuredTask,
  initialTaskStateType
} from '../flow/FlowTypes';

import CalendarModal from './CalendarModal';
import { CardSection } from './CardSection';
import { Button } from './Button';

type Props = {
  taskText: string,
  taskDeadline: string,
  taskTag: string,
  visibleCreateEditTaskModal: boolean,
  onEditMode: boolean,
  openCloseCreateEditTaskModal: any,
  taskTextChanged: any,
  taskDeadlineChanged: any,
  taskTagChanged: any,
  updateTask: any,
  addNewTask: any
}

type State = {
  error: string,
  calendarMarkedDate: string,
  isCalendarModalVisible: boolean
}

class CreateEditTask extends Component<Props, State> {

  state = {
    error: '',
    calendarMarkedDate: '',
    isCalendarModalVisible: false
  }

  /*
   * Confere se houve alteração na data selecionada no calendario após a atualização
   * do componente, se houve, passa essa atualização para o estado e o renderiza novamente
  */
  componentDidUpdate(previousProps, previousState) {
    if (previousProps.taskDeadline !== this.props.taskDeadline) {
      this.setState({
        calendarMarkedDate: this.props.taskDeadline
      });
    }
  }

  /*
  * Checa se a tarefa tem título, se não tiver apresenta um erro
  */
  taskHasTitle() {
    if (this.props.taskText) {
      this.setState({ error: '' });
      return true;
    } else {
      this.setState({ error: 'Your task needs a name!' });
      return false;
    }
  }

  /*
  * Callback do botao de confirmacao (updateTask | addNewTask)
  */
  onPressConfirm() {
    if (this.taskHasTitle()) {
      (this.props.onEditMode)? this.props.updateTask()
                             : this.props.addNewTask();
    }
  }

  // auxiliar para renderizar o botao de confirmacao, decide se o texto será Add or Update
  renderAddUpdateButton() {
    const buttonText = this.props.onEditMode && 'Update' || 'Add';
    return <Button onPress={() => this.onPressConfirm()}> {buttonText} </Button>
  }

  // callback do botao de cancelar, fecha o modal e esquece o erro
  onPressCancel() {
    this.setState({ error: '' });
    this.props.openCloseCreateEditTaskModal();
  }

  // callback da mudança de deadline, fecha o calendario e atualiza a propriedade
  onChangeDeadline(deadline) {
    this.setState({
      isCalendarModalVisible: false
    });
    this.props.taskDeadlineChanged(deadline);
  }

  /* auxiliar para renderizar o título do modal
  * se em modo de edicao 'UPDATE ..', senão 'CREATE ...'
  */
  renderTitle() {
    return (
      <Text style={styles.titleText}>
        { this.props.onEditMode? 'UPDATE YOUR TASK' : 'CREATE A NEW TASK' }
      </Text>
    )
  }

  // auxiliar para renderizar mensagem de erro
  renderError() {
    return (this.state.error)
      ? <View><Text style={styles.errorText}> {this.state.error} </Text></View>
      : null
  }

  render() {
    return (
      <Modal
        visible={this.props.visibleCreateEditTaskModal}
        transparent
        animationType="fade"
        onRequestClose={()=>{}}
      >
        <View style={styles.container}>

          <CardSection style={{flexDirection: 'column'}}>

            { this.renderTitle() }

            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.textInput}
                placeholder='MY AWESOME TASK'
                value={this.props.taskText}
                onChangeText={(text) => this.props.taskTextChanged(text)}
                underlineColorAndroid='rgba(0, 0, 0, 0.2)'
              />
            </View>

            { this.renderError() }

            <View style={{flexDirection: 'row'}}>
              <TouchableWithoutFeedback
                onPress={() => this.setState({ isCalendarModalVisible: true })}
              >
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <TextInput
                    style={styles.textInput}
                    placeholder='SET A DEADLINE'
                    value={this.props.taskDeadline}
                    editable={false}
                  />
                </View>
            </TouchableWithoutFeedback>
            </View>

            <CalendarModal
              isCalendarModalVisible={this.state.isCalendarModalVisible}
              calendarMarkedDate={this.props.taskDeadline}
              taskDeadlineChanged={(deadline) => this.onChangeDeadline(deadline)}
            />

            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.textInput}
                value={this.props.taskTag}
                placeholder='MY FAVORITE TAG'
                onChangeText={(tag) => this.props.taskTagChanged(tag)}
                underlineColorAndroid='rgba(0, 0, 0, 0.2)'
              />
            </View>

            <View style={styles.buttonsContainer}>
              { this.renderAddUpdateButton() }

              <Button onPress={() => this.onPressCancel()}>
                Cancel
              </Button>

            </View>
          </CardSection>

        </View>
      </Modal>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative'
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 30,
  },
  errorText: {
    color: 'rgb(255, 0, 0)',
    fontSize: 12
  },
  buttonsContainer: {
    justifyContent: 'center',
    marginTop: 10,
    padding: 5,
    flexDirection: 'row',
    position: 'relative'
  },
  textInput: {
    flex: 1,
    color: 'rgba(0, 0, 0, 0.5)'
  }
});

const mapStateToProps = ({ tasks }) => {
  type destructuredVisibleModalType = { visibleCreateEditTaskModal: boolean,
                                        onEditMode: boolean };
  const { taskText, taskDeadline, taskTag } : destructuredTask = tasks;
  const { visibleCreateEditTaskModal, onEditMode } : destructuredVisibleModalType = tasks;
  return {
    taskText,
    taskDeadline,
    taskTag,
    onEditMode,
    visibleCreateEditTaskModal
  };
};

export default connect(mapStateToProps, {
  openCloseCreateEditTaskModal,
  taskTextChanged,
  taskDeadlineChanged,
  taskTagChanged,
  updateTask,
  addNewTask
})(CreateEditTask);
