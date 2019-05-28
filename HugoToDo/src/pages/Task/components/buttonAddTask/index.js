import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ModalActions from '../../../../store/actions/todos';

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginBottom: 20,
    marginRight: 25,
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: '#23a2f6',
    borderColor: '#23a2f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ButtonAddTask = ({ showModalAddTask }) => (
  <TouchableOpacity onPress={() => showModalAddTask()} style={style.container}>
    <Icon name="plus" color="white" size={32} />
  </TouchableOpacity>
);

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(ButtonAddTask);
