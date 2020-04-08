import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import ModalDropdown from 'react-native-modal-dropdown'
import { format } from 'date-fns'

import { deleteItemToDo, updateItemToDo } from '../../Action/Todo'
import ModalSelectTime from '../../Components/ModalSelectTime'

import { Images } from '../../../../Themes'
import styles from './styles'

export default function UpdateItem({ navigation }) {
  const dispatch = useDispatch()
  const itemToDo = useSelector(state => state.todo.itemToDo)
  const [title, setTitle] = useState(itemToDo.title)
  const [date, setDate] = useState(new Date())
  const [priority, setPriority] = useState(itemToDo.priority)
  const [stateModal, setStateModal] = useState(false)
  const selecPriority = ['none', 'low (!)', 'medium (!!)', 'high (!!!)']

  function handleNewTodo() {
    if (!title) return

    const newToDo = {
      id: itemToDo.id,
      title: title,
      isDone: itemToDo.isDone,
      reminder: date.toISOString(),
      priority: priority ? priority : 'none'
    }

    dispatch(updateItemToDo(newToDo))
    navigation.goBack()
  }

  function handleDelete() {
    dispatch(deleteItemToDo(itemToDo.id))
    navigation.goBack()
  }

  return (
    <ImageBackground source={Images.appBackground} style={styles.background}>
      <View style={styles.tasksContainer}>
        <View style={styles.containerButtonClose}>
          <TouchableOpacity style={styles.buttonClose} onPress={handleNewTodo}>
            <Icon name='close' color='#757575' size={20} type='MaterialIcons' />
          </TouchableOpacity>
        </View>
        <View style={styles.containerTitle}>
          <TextInput
            style={styles.reminderTitle}
            value={title}
            placeholder='Novo Lembrete'
            placeholderTextColor='#e0e0e0'
            onChangeText={text => setTitle(text)}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.containerButtons} onPress={() => setStateModal(true)}>
            <View style={styles.containerButtonsTextAndIcon}>
              <Icon name='add-alert' color='#bdbdbd' size={30} />
              <Text style={styles.textButton}>Lembrar-me</Text>
            </View>
            <Text style={styles.rightTextButton}>{format(date, "d 'de' MMMM', at 'H':'m")}</Text>
          </TouchableOpacity>
          <ModalDropdown
            options={selecPriority}
            dropdownStyle={{ width: '50%' }}
            dropdownTextStyle={{ fontSize: 15 }}
            onSelect={value => setPriority(selecPriority[value])}
          >
            <View style={styles.containerButtons}>
              <View style={styles.containerButtonsTextAndIcon}>
                <Icon name='add-alert' color='#bdbdbd' size={30} />
                <Text style={styles.textButton}>Lembrar-me</Text>
              </View>
              <Text style={styles.rightTextButton}>{priority ? priority : 'Selecionar'}</Text>
            </View>
          </ModalDropdown>
        </View>
        <TouchableOpacity style={styles.buttonAdd} onPress={handleDelete}>
          <Text style={styles.buttonAddText}>Deletar</Text>
          <Icon name='delete' size={22} color='#ff1744' />
        </TouchableOpacity>
        <ModalSelectTime state={stateModal} setState={setStateModal} date={date} setDate={setDate} />
      </View>
    </ImageBackground>
  )
}
