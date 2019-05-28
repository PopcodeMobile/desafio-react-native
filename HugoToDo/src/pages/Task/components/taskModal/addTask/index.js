import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Feather';
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
  title: { color: 'white', fontSize: 18, fontWeight: '400' },
  containerIcons: {
    flex: 1,
    justifyContent: 'center',
  },
  contentButtonIcon: { paddingRight: 60 },
  formContainer: { flex: 1, marginTop: 5, paddingHorizontal: 10 },
  formTitle: { color: 'black', marginBottom: 5 },
  formInput: {
    height: 40,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    marginHorizontal: 3,
    color: '#858585',
    paddingLeft: 10,
  },
  formInputTextArea: {
    height: 80,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    marginHorizontal: 3,
    color: '#858585',
    paddingLeft: 10,
  },
  formInputDate: {
    height: 40,
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#858585',
    marginHorizontal: 3,
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconCalendar: { paddingRight: 12 },
  formYesNoContainer: { flexDirection: 'row' },
  formYesNoContentYes: { flexDirection: 'row', paddingLeft: 3, paddingRight: 20 },
  formYesNoContentNo: { flexDirection: 'row' },
  formTitleYesNo: { color: 'black', paddingHorizontal: 5 },
  formButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  formButton: {
    width: '90%',
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#3274ea',
    borderRadius: 20,
  },
  formButtonTitle: { color: 'white', textAlign: 'center', fontSize: 14 },
});

const AddTask = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState(moment().format('L'));
  const [completed, setCompleted] = useState('');

  const handlerText = (text) => {
    const newText = text
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\/\d{4})\d+?$/, '$1');
    setDueDate(newText);
  };

  const handlerAddTask = () => {
    const data = {
      title,
      description,
      dueDate,
      completed,
    };
    props.addTask(data);
    props.hideModalAddTask();
  };

  return (
    <Modal animationType="slide" transparent={false} visible={props.state.todos.showModalAddTask}>
      <View style={style.container}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => props.hideModalAddTask()}
          style={style.contentButtonIcon}
        >
          <Icon name="chevron-left" size={30} color="white" />
        </TouchableOpacity>
        <View style={style.containerIcons}>
          <Text style={style.title}>Add Task</Text>
        </View>
      </View>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={{ flex: 1 }}
        >
          <View style={style.formContainer}>
            <Text style={style.formTitle}>Title</Text>
            <TextInput
              placeholder="Add Title"
              selectionColor="#858585"
              style={style.formInput}
              value={title}
              onChangeText={text => setTitle(text)}
            />
            <Text style={[style.formTitle, { marginTop: 10 }]}>Description</Text>
            <TextInput
              placeholder="Write Description"
              selectionColor="#858585"
              multiline
              numberOfLines={3}
              style={style.formInputTextArea}
              value={description}
              onChangeText={text => setDescription(text)}
            />
            <Text style={[style.formTitle, { marginTop: 10 }]}>Due Date</Text>
            <View style={style.formInputDate}>
              <TextInput
                placeholder={moment().format('L')}
                selectionColor="#858585"
                value={dueDate}
                onChangeText={text => handlerText(text)}
                keyboardType="numeric"
              />
              <Icon name="calendar" size={24} style={style.iconCalendar} />
            </View>
            <Text style={[style.formTitle, { marginTop: 10 }]}>Task already completed?</Text>
            <View style={style.formYesNoContainer}>
              <View style={style.formYesNoContentYes}>
                {completed ? (
                  <Icon name="disc" size={20} color="#3274ea" />
                ) : (
                  <TouchableOpacity onPress={() => setCompleted(true)}>
                    <Icon name="circle" size={20} />
                  </TouchableOpacity>
                )}
                <Text style={style.formTitleYesNo}>Yes</Text>
              </View>
              <View style={style.formYesNoContentNo}>
                {!completed ? (
                  <Icon name="disc" size={20} color="#3274ea" />
                ) : (
                  <TouchableOpacity onPress={() => setCompleted(false)}>
                    <Icon name="circle" size={20} />
                  </TouchableOpacity>
                )}
                <Text style={style.formTitleYesNo}>No</Text>
              </View>
            </View>
            <View style={style.formButtonContainer}>
              <TouchableOpacity
                onPress={() => handlerAddTask()}
                activeOpacity={0.8}
                style={style.formButton}
              >
                <Text style={style.formButtonTitle}>ADD TASK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </Modal>
  );
};

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTask);
