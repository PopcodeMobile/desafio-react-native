import React, { useState } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Images } from '../../../../Themes'
import styles from './styles'

export default function AddNewToDo ({ navigation }) {
  const [, setTitle] = useState('')

  return (
    <KeyboardAvoidingView behavior='padding'>
      <ImageBackground source={Images.appBackground} style={styles.background}>
        <View style={styles.tasksContainer}>
          <View style={styles.containerButtonClose}>
            <TouchableOpacity style={styles.buttonClose} onPress={() => navigation.goBack()}>
              <Icon name='close' color='#757575' size={20} type='MaterialIcons' />
            </TouchableOpacity>
          </View>
          <View style={styles.containerTitle}>
            <TextInput
              style={styles.reminderTitle}
              placeholder='Novo Lembrete'
              placeholderTextColor='#e0e0e0'
              onChangeText={text => setTitle(text)}
            />
          </View>
          <View>
            <TouchableOpacity style={styles.containerButtons}>
              <View style={styles.containerButtonsTextAndIcon}>
                <Icon name='add-alert' color='#bdbdbd' size={30} />
                <Text style={styles.textButton}>Lembrar-me</Text>
              </View>
              <Text style={styles.rightTextButton}>Selecionar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerButtons}>
              <View style={styles.containerButtonsTextAndIcon}>
                <Icon name='assistant-photo' color='#bdbdbd' size={30} />
                <Text style={styles.textButton}>Prioridade</Text>
              </View>
              <Text style={styles.rightTextButton}>Selecionar</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.buttonAdd}>
            <Text style={styles.buttonAddText}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}
