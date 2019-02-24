// @flow

import React, { Component } from 'react';

import {
  View, Modal, Text,
} from 'react-native';

import { TextInputMask } from 'react-native-masked-text';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Button, Input } from 'components';

import { TodoModel } from 'models';

import { Creators as TodoActions } from 'store/ducks/todo';

import styles from './styles';

type Props = {
  visible: boolean,
  hideModal: () => mixed,
  todo: TodoModel,
  onChangeTodo: (todo: TodoModel) => mixed,
  todoCreateRequest: (todo: TodoModel) => mixed,
  todoUpdateRequest: (todo: TodoModel) => mixed,
};

type State = {
  firstChange: boolean,
  dateError: boolean,
  descriptionError: boolean,
};

const initialState = {
  firstChange: true,
  descriptionError: false,
  dateError: false,
};

class AddTodo extends Component<Props, State> {
  state = initialState

  dateInputRef: any = null;

  hideAndReset = () => {
    this.resetState();
    this.props.hideModal();
    return true;
  }

  resetState = () => {
    this.setState({ ...initialState });
  }

  handleSubmit = () => {
    const {
      todo,
    } = this.props;
    if (todo && todo.id) {
      this.props.todoUpdateRequest(todo);
    } else {
      this.props.todoCreateRequest(todo);
    }
    this.hideAndReset();
  }

  render() {
    return (
      <Modal onRequestClose={this.hideAndReset} animationType="slide" transparent={false} visible={this.props.visible}>
        <View style={styles.modal}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Adicionar todo</Text>
            <Button
              color="danger"
              label="Cancelar"
              onPress={() => {
                this.hideAndReset();
              }}
            />
          </View>
          <View>
            <Input
              label="Descrição*"
              autofocus
              returnKeyType="next"
              placeholder="Fazer atividade, jogar o lixo, etc"
              value={this.props.todo.description}
              onChangeText={(description) => {
                this.setState({
                  descriptionError: (!description || !description.length),
                  firstChange: false,
                });
                this.props.onChangeTodo({
                  ...this.props.todo,
                  description,
                });
              }}
              onSubmitEditing={() => {
                if (this.dateInputRef) {
                  console.log(this.dateInputRef);
                  this.dateInputRef.getElement().focus();
                }
              }}
            />
            {
              !this.state.firstChange
              && this.state.descriptionError
              && <Text style={styles.errorMsg}>Por favor, digite uma descrição válida.</Text>
            }
            <Text style={styles.inputLabel}>Data de vencimento</Text>
            <TextInputMask
              type="datetime"
              style={styles.input}
              options={{
                format: 'DD/MM/YYYY',
              }}
              placeholder="dd/mm/aaaa"
              value={this.props.todo.dueDate}
              onChangeText={(dueDate) => {
                const dateError = !!(this.dateInputRef && !this.dateInputRef.isValid());
                this.setState({ dateError, firstChange: false });
                this.props.onChangeTodo({
                  ...this.props.todo,
                  dueDate,
                });
              }}
              ref={(ref) => {
                this.dateInputRef = ref;
              }}
              onSubmitEditing={this.handleSubmit}
            />
            {
              !this.state.firstChange
              && this.state.dateError
              && <Text style={styles.errorMsg}>Por favor, digite uma data válida.</Text>}
          </View>
          <Button
            color="success"
            label="Salvar"
            disabled={
              this.state.firstChange
              || (this.state.descriptionError || this.state.dateError)
            }
            onPress={this.handleSubmit}
          />
        </View>
      </Modal>
    );
  }
}

// const mapStateToProps = state => ({
//   todos: state.todo.todos,
// });

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(
  null, // mapStateToProps,
  mapDispatchToProps,
)(AddTodo);
