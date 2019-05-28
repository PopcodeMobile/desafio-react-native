import React from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback,
} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Feather';

const style = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: 'row',
    marginLeft: 5,
    borderColor: '#cacaca',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  calendarioContainer: { alignItems: 'center', paddingHorizontal: 10 },
  calendarioContent: {
    width: 60,
    height: 60,
    borderColor: '#a1bff5',
  },
  calendarioMesContainer: {
    height: '40%',
    width: '100%',
    backgroundColor: '#3274ea',
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
    borderColor: '#3274ea',
    borderWidth: 1,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    height: '60%',
  },
  calendarioDiaTexto: { color: '#3274ea', fontWeight: 'bold', fontSize: 20 },
  infoContainer: { flex: 1 },
  infoContent: { paddingVertical: 5 },
  infoTitle: { color: '#202020', fontSize: 18, fontWeight: '500' },
  infoDescription: { color: '#747474', fontSize: 10, fontWeight: '300' },
});

export default function taskItem({ todo, handlerClick, handlerClickAction }) {
  return (
    <View style={style.container}>
      <TouchableWithoutFeedback onPress={() => handlerClickAction(todo)}>
        <View style={style.calendarioContainer}>
          <View style={style.calendarioContent}>
            <View
              style={[
                style.calendarioMesContainer,
                todo.completed && {
                  backgroundColor: '#999999',
                },
              ]}
            >
              <Text
                style={[
                  style.calendarioMesTexto,
                  todo.completed && {
                    color: 'white',
                  },
                ]}
              >
                {moment(todo.dueDate, 'MMDDYYYY').format('MMM')}
              </Text>
            </View>
            <View
              style={[
                style.calendarioDiaContainer,
                todo.completed && {
                  borderColor: '#999999',
                },
              ]}
            >
              <Text
                style={[
                  style.calendarioDiaTexto,
                  todo.completed && {
                    color: '#999999',
                  },
                ]}
              >
                {moment(todo.dueDate, 'MMDDYYYY').format('DD')}
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      
      <TouchableWithoutFeedback onPress={() => {}}>
        <View style={style.infoContainer}>
          <View style={style.infoContent}>
            <Text
              style={[
                style.infoTitle,
                todo.completed && {
                  color: '#999999',
                },
              ]}
            >
              {todo.title}
            </Text>
            <Text style={style.infoDescription}>{todo.description}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>

      <TouchableOpacity
        onPress={() => {
          handlerClick(todo.id);
        }}
        activeOpacity={0.6}
        style={{
          backgroundColor: todo.completed ? '#7bce7e' : 'transparent',
          width: '8%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Icon name="check" size={20} color={todo.completed ? 'white' : '#3274ea'} />
      </TouchableOpacity>
    </View>
  );
}
