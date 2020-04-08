// @flow
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, ImageBackground, FlatList } from 'react-native'

// Components
import ToDo from '../../Components/ToDo/index'
import Header from '../../Components/Header'
import FloatingButton from '../../Components/FloatingButton'
import EmptyListFromToDo from '../../Components/EmptyListFromToDo'
import FilterListContainer from '../../Components/FilterListContainer'

// actions
import { getAllToDo, filterList, updateItemToDoIsDone, setItemToDo } from '../../Action/Todo'

// styles
import styles from './ToDoScreen.style'
import { Images } from '../../../../Themes'

const ToDoScreen = ({ navigation }) => {
  // Redux Actions
  const dispatch = useDispatch()
  const allToDo = useSelector(state => state.todo.todo)

  // State
  const [selectedFilterIndex, setFilterIndex] = useState(0)

  function handleChangeOptions(index) {
    setFilterIndex(index)
    let filter

    if (index > 1) {
      filter = filterListArray[index].split(' ')[1]
    } else {
      filter = filterListArray[index]
    }

    dispatch(filterList(filter))
  }
  // Consts
  const filterListArray = ['All', 'Today', 'This week', 'This month']

  useEffect(() => {
    dispatch(getAllToDo())
  }, [])

  return (
    <ImageBackground source={Images.appBackground} style={styles.background}>
      <Header onPressSearch={() => {}} />
      <View style={styles.tasksContainer}>
        <FilterListContainer
          filterList={filterListArray}
          selectedFilter={selectedFilterIndex}
          onPressFilter={handleChangeOptions}
        />
        {allToDo !== false ? (
          <FlatList
            style={{ marginLeft: 12 }}
            data={allToDo}
            keyExtractor={(item, index) => `${item.id}-${index}-${item.title}`}
            renderItem={({ item }) => (
              <ToDo
                onPressText={() => {
                  dispatch(setItemToDo(item))
                  navigation.navigate('UpdateItem')
                }} 
                toggleToDo={() => {
                  dispatch(updateItemToDoIsDone(item))
                }}
                text={item.title}
                toggled={item.isDone}
              />
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

export default ToDoScreen
