// @flow
import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, ImageBackground, Image, TouchableOpacity, FlatList, ActivityIndicator, Modal, Picker } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import ToDo from '../Components/ToDo'
import TogglableText from '../Components/TogglableText'

import { actions as UIActions } from '../Redux/Ui'
import { actions as EntityActions} from '../Redux/Entity'

import ToDoEntitySelectors from '../Selectors/Entity' //obs
import ToDoUISelections from '../Selectors/Ui' //obs

import styles from './ToDoScreen.style'
import { Images } from '../../../Themes'

import { Filters } from '../Constants'

import type { StackNavigationProp } from '@react-navigation/stack'

import MomentConfig from '../../../Config/MomentConfig'
import moment from 'moment'
import colors from '../../../Themes/Colors'
import lodash from 'lodash'

type Props = {
  navigation: StackNavigationProp
}

//Tranlate Moment 
MomentConfig.setLanguage()

const ToDoScreen = ({ navigation }: Props) => {
  // Redux Actions
  const dispatch = useDispatch()
  //const getToDos = useCallback(() => dispatch(ToDosUIActions.request()))

  // State
 const [selectedFilterIndex, setFilterIndex] = useState(0)
 const [add, setAdd] = useState(false)
 const [isOpenScreenAdd, setIsOpenScreenAdd] = useState(false)

  // Selectors
  const sortedToDos = useSelector(ToDoEntitySelectors.sortedToDos)
  //const selectedFilterIndex = useSelector(ToDoUISelections.selectedFilterIndex)
  const fetching = useSelector(ToDoUISelections.fetching)
  const error = useSelector(ToDoUISelections.error)

  // Lifecycle Methods
  useEffect(() => {
    dispatch(UIActions.request())
  }, [dispatch])

  useEffect (() => {})

  return (
    <ImageBackground source={Images.appBackground} style={styles.background}>
      <HeaderContainer onPressSearch={() => {}} />
      <View style={styles.tasksContainer}>
        <FilterListContainer
          filterList={Filters}
          selectedFilter={selectedFilterIndex} //--
          onPressFilter={setFilterIndex}
        />
      <ListContainer
        sortedToDos = {sortedToDos}
        fetching = {fetching}
        error = {error}
        dispatch = {dispatch}
      />
      </View>
      <FloatingButton onPress={() => setIsOpenScreenAdd(true)} />
      <Modal transparent={true} visible ={isOpenScreenAdd} animationType="slide">
        <View style={styles.container}>
          <View style={styles.flexModalContainer}>
            <CloseButton onPress = {() => setIsOpenScreenAdd(false)}/>
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
      <Text style={styles.displayDateName}>Hoje</Text>
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

const ListContainer = ({sortedToDos,fetching,error,dispatch}) => (
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
            <ToDo onPressText={() => {}} toggleToDo={() => {
              dispatch(EntityActions.toggleToDo({id: item.id}))}} 
              text={item.title} toggled={item.isDone} />
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
