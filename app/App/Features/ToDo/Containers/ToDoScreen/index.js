// @flow
import React, { useCallback, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { StackNavigationProp } from '@react-navigation/stack'
import { View, ImageBackground, Image, TouchableOpacity, FlatList } from 'react-native'

// Components
import ToDo from '../../Components/ToDo'
import Header from '../../Components/Header'
import EmptyListFromToDo from '../../Components/EmptyListFromToDo'
import TogglableText from '../../Components/TogglableText'

import { actions as ToDosUIActions } from '../../Redux/Ui'
import ToDoEntitySelectors from '../../Selectors/Entity'
import ToDoUISelections from '../../Selectors/Ui'

import styles from './ToDoScreen.style'
import { Images } from '../../../../Themes'

type Props = {
  navigation: StackNavigationProp
}

const ToDoScreen = ({ navigation }: Props) => {
  // Redux Actions
  const dispatch = useDispatch()
  const getToDos = useCallback(() => dispatch(ToDosUIActions.request()))

  // State
  const [selectedFilterIndex, setFilterIndex] = useState(0)

  // Selectors
  const sortedToDos = useSelector(ToDoEntitySelectors.sortedToDos)
  const fetching = useSelector(ToDoUISelections.fetching)
  const error = useSelector(ToDoUISelections.error)

  // Lifecycle Methods
  useEffect(() => {
    getToDos()
  }, [])

  function handleChangeOptions (index) {
    setFilterIndex(index)
  }

  // Consts
  const filterList = ['All', 'Today', 'This week', 'This month']
  // setFilterIndex
  return (
    <ImageBackground source={Images.appBackground} style={styles.background}>
      <Header onPressSearch={() => {}} />
      <View style={styles.tasksContainer}>
        <FilterListContainer
          filterList={filterList}
          selectedFilter={selectedFilterIndex}
          onPressFilter={handleChangeOptions}
        />
        {!fetching && !error && !!sortedToDos ? (
          <FlatList
            style={{ marginLeft: 12 }}
            data={sortedToDos}
            keyExtractor={(item, index) => `${item.id}-${index}-${item.title}`}
            renderItem={({ item }) => (
              <ToDo onPressText={() => {}} toggleToDo={() => {}} text={item.title} toggled={item.isDone} />
            )}
          />
        ) : (
          <EmptyListFromToDo />
        )}
      </View>
      <FloatingButton onPress={() => navigation.navigate('AddNewToDo')} />
    </ImageBackground>
  )
}

const FloatingButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.floatingButton}>
    <Image source={Images.add['36px']} />
  </TouchableOpacity>
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

export default ToDoScreen
