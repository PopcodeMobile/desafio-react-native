// @flow
import React, { useCallback, useState, useEffect } from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import ToDo from '../../Components/ToDo'
import TogglableText from '../../Components/TogglableText'

import { actions as ToDosUIActions } from '../../Redux/Ui'
import ToDoEntitySelectors from '../../Selectors/Entity'
import ToDoUISelections from '../../Selectors/Ui'

import styles from './ToDoScreen.style'
import { Images } from '../../../../Themes'

import type { StackNavigationProp } from '@react-navigation/stack'

import moment from 'moment'

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

  // Consts
  const filterList = ['All', 'Today', 'This week', 'This month']

  return (
    <ImageBackground source={Images.appBackground} style={styles.background}>
      <HeaderContainer onPressSearch={() => {}} />
      <View style={styles.tasksContainer}>
        <FilterListContainer
          filterList={filterList}
          selectedFilter={selectedFilterIndex}
          onPressFilter={setFilterIndex}
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
        ): (
          <Text>sem items</Text>
        )}
      </View>
      <FloatingButton onPress={() => {}} />
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
export default ToDoScreen
