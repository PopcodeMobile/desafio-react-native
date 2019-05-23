import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

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

export default function ButtonAddTask() {
  return (
    <TouchableOpacity onPress={() => {}} style={style.container}>
      <Icon name="plus" color="white" size={32} />
    </TouchableOpacity>
  );
}
