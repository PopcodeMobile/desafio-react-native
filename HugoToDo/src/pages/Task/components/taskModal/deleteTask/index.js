import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  View, TouchableOpacity, Text, Modal, StyleSheet, ScrollView,
} from 'react-native';
import moment from 'moment';

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

const DeleteTask = ({
  state: {
    todos: { current, showModalDeleteTask },
  },
  hideModalDeleteTask,
  deleteTask,
}) => (
  <Modal animationType="slide" transparent={false} visible={showModalDeleteTask}>
    <View style={style.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => hideModalDeleteTask()}
        style={style.contentButtonIcon}
      >
        <Icon name="chevron-left" size={30} color="white" />
      </TouchableOpacity>
      <View style={style.containerIcons}>
        <Text style={style.title}>Delete Task</Text>
      </View>
    </View>
    <ScrollView>
      {current && (
        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: '#ffd106',
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 10,
            }}
          >
            PENDING
          </Text>
          <View style={style.calendarioContainer}>
            <View style={style.calendarioContent}>
              <View style={[style.calendarioMesContainer]}>
                <Text style={[style.calendarioMesTexto]}>
                  {moment(current.dueDate, 'MMDDYYYY').format('MMM')}
                </Text>
              </View>
              <View style={[style.calendarioDiaContainer]}>
                <Text style={[style.calendarioDiaTexto]}>
                  {moment(current.dueDate, 'MMDDYYYY').format('DD')}
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              color: '#25a2f6',
              fontSize: 18,
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            {moment(current.dueDate, 'MMDDYYYY').fromNow()}
          </Text>

          <View
            style={{
              justifyContent: 'space-between',
              paddingHorizontal: 5,
              marginVertical: 20,
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#989898', fontSize: 10, marginRight: 10 }}>Title</Text>
              <Text style={{ color: 'black', fontSize: 14 }}>{current.title}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#989898', fontSize: 10, marginRight: 10 }}>Description</Text>
              <Text style={{ color: 'black', fontSize: 14 }}>{current.description}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#989898', fontSize: 10, marginRight: 10 }}>Created on</Text>
              <Text style={{ color: 'black', fontSize: 14 }}>{current.created}</Text>
            </View>
          </View>

          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <TouchableOpacity
              onPress={() => {
                hideModalDeleteTask();
                deleteTask(current);
              }}
              style={{
                backgroundColor: '#f44336',
                width: '80%',
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}
            >
              <Text style={{ color: 'white', fontSize: 14, fontWeight: '800' }}>DELETE TASK</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  </Modal>
);

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeleteTask);
