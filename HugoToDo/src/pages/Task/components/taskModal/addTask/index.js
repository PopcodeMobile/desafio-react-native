import React, { useState } from 'react';
import {
  View, Text, Modal, StyleSheet, TouchableOpacity, TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ModalActions from '../../../../../store/actions/modal';

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
    marginTop: 20,
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

const AddTask = ({ modal, hideModalAddTask }) => {
  const [check, setCheck] = useState(false);
  return (
    <Modal animationType="slide" transparent={false} visible={modal.status}>
      <View style={style.container}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => hideModalAddTask()}
          style={style.contentButtonIcon}
        >
          <Icon name="chevron-left" size={30} color="white" />
        </TouchableOpacity>
        <View style={style.containerIcons}>
          <Text style={style.title}>Add Task</Text>
        </View>
      </View>
      <View style={style.formContainer}>
        <Text style={style.formTitle}>Title</Text>
        <TextInput placeholder="Add Title" selectionColor="#858585" style={style.formInput} />
        <Text style={[style.formTitle, { marginTop: 10 }]}>Description</Text>
        <TextInput
          placeholder="Write Description"
          selectionColor="#858585"
          multiline
          numberOfLines={3}
          style={style.formInputTextArea}
        />
        <Text style={[style.formTitle, { marginTop: 10 }]}>Due Date</Text>
        <View style={style.formInputDate}>
          <TextInput placeholder="23/05/2019" selectionColor="#858585" />
          <Icon name="calendar" size={24} style={style.iconCalendar} />
        </View>
        <Text style={[style.formTitle, { marginTop: 10 }]}>Task already completed?</Text>
        <View style={style.formYesNoContainer}>
          <View style={style.formYesNoContentYes}>
            {check ? (
              <Icon name="disc" size={20} color="#3274ea" />
            ) : (
              <TouchableOpacity onPress={() => setCheck(true)}>
                <Icon name="circle" size={20} />
              </TouchableOpacity>
            )}
            <Text style={style.formTitleYesNo}>Yes</Text>
          </View>
          <View style={style.formYesNoContentNo}>
            {!check ? (
              <Icon name="disc" size={20} color="#3274ea" />
            ) : (
              <TouchableOpacity onPress={() => setCheck(false)}>
                <Icon name="circle" size={20} />
              </TouchableOpacity>
            )}
            <Text style={style.formTitleYesNo}>No</Text>
          </View>
        </View>
        <View style={style.formButtonContainer}>
          <TouchableOpacity activeOpacity={0.8} style={style.formButton}>
            <Text style={style.formButtonTitle}>ADD TASK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTask);
