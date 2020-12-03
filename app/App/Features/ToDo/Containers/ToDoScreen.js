// @flow
import React, { useContext } from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity, FlatList } from 'react-native'
import { useQuery } from 'react-query'
import API from '../../../Services/Api'

import ToDo from '../Components/ToDo'
import TogglableText from '../Components/TogglableText'

import styles from './ToDoScreen.style'
import { Images } from '../../../Themes'

import type { StackNavigationProp } from '@react-navigation/stack'

import { ToDoContext } from '../Context/TodoContext'
import MomentConfig from '../../../Config/MomentConfig'
import moment from 'moment'

type Props = {
  navigation: StackNavigationProp
}

const api = API.create()

MomentConfig.setLanguage()

const ToDoScreen = ({ navigation }: Props) => {
  const context = useContext(ToDoContext)

  const getToDos = () =>
    api.getToDos().then(response => {
      return response.data
    })

  const { data, refetch, isLoading, isFetching, isError } = useQuery('fetchToDo', getToDos)

  const renderItem = ({ item }) => (
    <ToDo onPressText={() => {}} toggleToDo={() => {}} text={item.title} toggled={item.isDone} />
  )
  const keyExtractor = item => `${item.id}`
  const refresh = () => refetch()

  return (
    <ImageBackground source={Images.appBackground} style={styles.background}>
      <HeaderContainer onPressSearch={() => {}} />
      <View style={styles.tasksContainer}>
        <FilterListContainer
          filterList={context.filterList}
          selectedFilter={context.selectedFilterIndex}
          handlePressFilter={context.setFilterIndex}
        />

        {!isLoading && !isError && (
          <FlatList
            onRefresh={refresh}
            refreshing={!isLoading && isFetching}
            style={{ marginLeft: 12 }}
            data={data}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
          />
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

const FilterListContainer = ({ filterList, selectedFilter, handlePressFilter }) => (
  <View style={styles.filterContainer}>
    <FlatList
      bounces={false}
      keyboardShouldPersistTaps='handled'
      showsHorizontalScrollIndicator={false}
      horizontal
      data={filterList}
      keyExtractor={(item, index) => `${index}-${item}`}
      renderItem={({ item, index }) => (
        <TogglableText toggled={selectedFilter === index} text={item} onPressText={() => handlePressFilter(index)} />
      )}
    />
  </View>
)

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
export default ToDoScreen
