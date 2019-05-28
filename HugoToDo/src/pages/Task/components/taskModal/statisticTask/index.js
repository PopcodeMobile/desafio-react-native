import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  View, TouchableOpacity, Text, Modal, StyleSheet,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../../../../../store/actions/todos';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#3274ea',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    height: 60,
  },
  calendarioContainer: { alignItems: 'center', paddingHorizontal: 10, marginVertical: 20 },
  calendarioContent: {
    width: 60,
    height: 60,
    borderColor: '#a1bff5',
  },
  calendarioMesContainer: {
    height: '40%',
    width: '100%',
    backgroundColor: '#25a2f6',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarioMesTexto: { color: 'white' },
  calendarioDiaContainer: {
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#25a2f6',
    borderWidth: 1,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    height: '60%',
  },
  calendarioDiaTexto: { color: '#25a2f6', fontWeight: 'bold', fontSize: 20 },
  title: { color: 'white', fontSize: 18, fontWeight: '400' },
  containerIcons: {
    flex: 1,
    justifyContent: 'center',
  },
  contentButtonIcon: { paddingRight: 60 },
});

const StatisticTask = ({
  state: {
    todos: {
      showModalStatisticTask, completedTask, totalTask, pendingTask,
    },
  },
  hideModalStatisticTask,
}) => (
  <Modal animationType="slide" transparent={false} visible={showModalStatisticTask}>
    <View style={style.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => hideModalStatisticTask()}
        style={style.contentButtonIcon}
      >
        <Icon name="chevron-left" size={30} color="white" />
      </TouchableOpacity>
      <View style={style.containerIcons}>
        <Text style={style.title}>Statistic</Text>
      </View>
    </View>
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          backgroundColor: '#e8f8ff',
          width: '100%',
          height: 40,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ color: 'black' }}>Total Task</Text>
        <View
          style={{
            backgroundColor: '#20a1f6',
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white' }}>{totalTask}</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#ceffec',
          width: '100%',
          height: 40,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          marginVertical: 10,
        }}
      >
        <Text style={{ color: 'black' }}>Completed Task</Text>
        <View
          style={{
            backgroundColor: '#0a905d',
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white' }}>{completedTask}</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#fff9dc',
          width: '100%',
          height: 40,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ color: 'black' }}>Pending Task</Text>
        <View
          style={{
            backgroundColor: '#ffdb3e',
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white' }}>{pendingTask}</Text>
        </View>
      </View>
    </View>
  </Modal>
);

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StatisticTask);
