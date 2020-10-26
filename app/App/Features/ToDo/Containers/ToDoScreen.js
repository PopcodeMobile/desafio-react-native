// @flow
import React, { useCallback, useState, useEffect } from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity, FlatList, ActivityIndicator, Modal, Picker } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import ToDo from '../Components/ToDo'
import TogglableText from '../Components/TogglableText'

import { actions as ToDosUIActions } from '../Redux/Ui'
import ToDoEntitySelectors from '../Selectors/Entity'
import ToDoUISelections, { fetching } from '../Selectors/Ui'

import styles from './ToDoScreen.style'
import { Images } from '../../../Themes'

import type { StackNavigationProp } from '@react-navigation/stack'

import moment from 'moment' //data-hora
import { TextInput } from 'react-native-gesture-handler'
import colors from '../../../Themes/Colors'
import { values } from 'lodash'



type Props = {
  navigation: StackNavigationProp
}


const ToDoScreen = ({ navigation }: Props) => {
  // Redux Actions
  const dispatch = useDispatch()
  const getToDos = useCallback(() => dispatch(ToDosUIActions.request()))

  // State
 const [selectedFilterIndex, setFilterIndex] = useState(0)
 const [add, setAdd] = useState(false)
 const [open, setOpen] = useState(false)
 const [date, setDate] = useState(new Date())

  // Selectors
  const sortedToDos = useSelector(ToDoEntitySelectors.sortedToDos)
  const fetching = useSelector(ToDoUISelections.fetching)
  const error = useSelector(ToDoUISelections.error)

  // Lifecycle Methods
  useEffect(() => {
    getToDos()
  }, [])


  // Consts
  const filterList = ['All', 'Today', 'This week', 'This month']
  console.tron.logImportant({sortedToDos,fetching,error})

  //Add
  //const [texts,setText] = useState(item || null)
  /*const [todo, setTodo] = useState ({title:null, reminder:null,priority: null})

  function setTitle(title:String){
    setText({...texts, title})
  }
  */

  return (
    <ImageBackground source={Images.appBackground} style={styles.background}>
      <HeaderContainer onPressSearch={() => {}} />
      <View style={styles.tasksContainer}>
        <FilterListContainer
          filterList={filterList}
          selectedFilter={selectedFilterIndex} //--
          onPressFilter={setFilterIndex}
        />
      <ListContainer
        sortedToDos = {sortedToDos}
        fetching = {fetching}
        error = {error}
      />
      </View>
      <FloatingButton onPress={() => setOpen(true)} />
      <Modal transparent={true} visible ={open} animationType="slide">
        <View style={styles.container}>
          <View style={styles.flexModalContainer}>
            <CloseButton onPress = {() => setOpen(false)}/>
            <TextInput style={styles.textInput} placeholder='Novo Lembrete' placeholderTextColor ={colors.c600}/>
            <AddDate/>
            <PriorityList/>
            <FloatingButtonAdd onPress = {() => setAdd(true)}/>
          </View>
        </View>
      </Modal> 
    </ImageBackground>
  )
}

const HeaderContainer = ({ onPressSearch }) => (
  <View style={styles.headerContainer}>
    <View>
      <Text style={styles.displayDateName}>Today</Text>
      <Text style={styles.date}>{moment().format('dddd, DD MMMM')}</Text>
    </View>
    <TouchableOpacity activeOpacity={0.7} onPress={onPressSearch} style={styles.searchContainer}>
      <Image source={Images.search['24px']} />
    </TouchableOpacity>
  </View>
)

const FilterListContainer = ({ filterList, selectedFilter, onPressFilter }) => (
  <View style={styles.filterContainer}>
    <FlatList
      bounces={false}
      keyboardShouldPersistTaps='handled'
      showsHorizontalScrollIndicator={false}
      horizontal
      data={filterList}
      keyExtractor={(item, index) => `${index}-${item}`}
      renderItem={({ item, index }) => (
        <TogglableText toggled={selectedFilter === index} text={item} onPressText={() => onPressFilter(index)} />
      )}
    />
  </View>
)

const ListContainer = ({sortedToDos,fetching,error}) => (
  <>
    {!!fetching && 
      <View style = {styles.fetchingCircle}>
        <ActivityIndicator size="large" color = "#000"/>
      </View> 
    }
    {Object.entries(sortedToDos).length == 0 ? <EmptyContainer/> : 
        <>
        <FlatList
          style={{ marginLeft: 12 }}
          data={sortedToDos}
          keyExtractor={(item, index) => `${item.id}-${index}-${item.title}`}
          renderItem={({ item }) => (
            <ToDo onPressText={() => {}} toggleToDo={() => {console.warn(item.isDone)}} text={item.title} toggled={item.isDone} />
          )}
        />
        </>
    }
  </>
)

const EmptyContainer = () => (
  <View style={styles.emptyContainer}>
    <Image source={Images.sol['36px']} />
    <Text style = {styles.displayEmptyName}>Tudo Limpo!</Text>
    <Text style = {styles.displayEmptyText}>Adicione um novo lembrete tocando no '+'.</Text>
  </View>
)

const FloatingButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.floatingButton}>
    <Image source={Images.add['36px']} />
  </TouchableOpacity>
)

const FloatingButtonAdd = ({ onPress }) => (
  <TouchableOpacity style ={styles.floatingButtonAdd} onPressText={onPress}>
    <Text style={styles.textAdd}>Adicionar</Text>
  </TouchableOpacity>
)

const CloseButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image source={Images.close['24px']} />
  </TouchableOpacity>
)

const AddDate = ({}) => (
  <View>
    <TouchableOpacity onPress={() => {}} style={styles.addDateTouch}>
      <Image style={styles.addDateImage} source={Images.bell['24px']} />
      <Text style = {styles.addDateText}>Lembrar-me</Text>
    </TouchableOpacity>
    </View>
)

const PriorityList = () =>{
  const [priorityList, setPriorityList] = useState('Selecionar')
  return (
    <View style ={styles.container}>
      <Image style={styles.addDateImage}  source ={Images.flag['24px']}/>
      <Text style={styles.textPicker}>Prioridade</Text>
      <Picker style = {styles.picker} priorityList = {priorityList} onValueChange = {(value, index) => setPriorityList(index)}>
        <Picker.Item label='Selecionar' value='0'/>
        <Picker.Item label='Baixa' value='1'/>
        <Picker.Item label='Media' value='2'/>
        <Picker.Item label='Alta' value='3'/>
      </Picker>
    </View>
  ) 
}


export default ToDoScreen
