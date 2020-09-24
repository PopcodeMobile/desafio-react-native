// @flow
import React, { useCallback, useState, useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
  Keyboard
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import Api from '../../../Services/Api';

import ToDo from '../Components/ToDo';
import PriorityPicker from '../Components/PriorityPicker';
import TogglableText from '../Components/TogglableText';
import DateTimePicker from '../Components/DateTimePicker';

import { actions as ToDosUIActions } from '../Redux/Ui';
import ToDoEntitySelectors from '../Selectors/Entity';
import ToDoUISelections from '../Selectors/Ui';

import styles from './ToDoScreen.style';
import { Images } from '../../../Themes';

import type { StackNavigationProp } from '@react-navigation/stack';

import moment from 'moment';
import colors from '../../../Themes/Colors';
import { set } from 'lodash';

type Props = {
  navigation: StackNavigationProp
};

const ToDoScreen = ({ navigation }: Props) => {
  // Redux Actions
  const dispatch = useDispatch();
  const getToDos = useCallback(() => dispatch(ToDosUIActions.request()));

  // State
  const [selectedFilterIndex, setFilterIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSearchOpen, setModalSearchOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [add, setAdd] = useState(false);

  // Selectors
  const sortedToDos = useSelector(ToDoEntitySelectors.sortedToDos);
  const fetching = useSelector(ToDoUISelections.fetching);
  const error = useSelector(ToDoUISelections.error);

  // Lifecycle Methods
  useEffect(() => {
    getToDos();
  }, []);

  // Segue um conflito, mas atualizando conseguirá visualizar o layout da aplicação e animações
  async function loadTodos() {
    if (loading) {
      return;
    }

    if (total > 0 && todos.length == total) {
      return;
    }

    setLoading(true);

    const Response = await Api.get('todos');

    setTodos([...todos, ...Response.data]);
    setTotal(Response.data);
    setLoading(false);
  }

  useEffect(() => {
    loadTodos();
  }, []);

  // Consts
  const filterList = ['Todos', 'Hoje', 'Esta Semana', 'Atrasados '];

  const HeaderContainer = ({ onPressSearch }) => (
    <View style={modalSearchOpen ? 'overflow: hidden' : styles.headerContainer}>
      <View>
        <Text style={modalSearchOpen ? 'overflow: hidden' : styles.displayDateName}>Hoje</Text>
        <Text style={modalSearchOpen ? 'overflow: 0' : styles.date}>
          {modalSearchOpen ? '' : moment().format('dddd, DD MMMM')}
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPressSearch}
        style={modalSearchOpen ? 'overflow: hidden' : styles.searchContainer}
      >
        <Image source={Images.search['24px']} />
      </TouchableOpacity>
    </View>
  );

  const NavigateToBack = ({ onPress }) => (
    <View style={modalSearchOpen ? styles.arrowLeft : 'overflow: hidden'}>
      <TouchableOpacity onPress={onPress}>
        <Icon name='arrow-left' {...arrowProps} />
      </TouchableOpacity>
    </View>
  );

  if (add) {
    var buttonProps = {
      style: styles.floatingButtonDel
    };
  } else {
    var buttonProps = {
      style: styles.floatingButtonAdd
    };
  }

  const FloatingButtonAdd = ({ onPressAdd }) => (
    <TouchableOpacity onPress={onPressAdd} {...buttonProps}>
      <Text style={styles.textFloatingButtonAdd}>Adicionar</Text>
    </TouchableOpacity>
  );

  const FloatingButton = ({ onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.floatingButton}>
      <Image source={Images.add['36px']} />
    </TouchableOpacity>
  );

  const CloseModalButton = ({ onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.closeModalButton}>
      <Image source={Images.close['24px']} />
    </TouchableOpacity>
  );

  const FilterListContainer = ({ filterList, selectedFilter, onPressFilter }) => (
    <View style={styles.filterContainer}>
      <FlatList
        bounces={false}
        keyboardShouldPersistTaps="handled"
        showsHorizontalScrollIndicator={false}
        horizontal
        data={filterList}
        keyExtractor={(item, index) => `${index}-${item}`}
        renderItem={({ item, index }) => (
          <TogglableText toggled={selectedFilter === index} text={item} onPressText={() => onPressFilter(index)} />
        )}
      />
    </View>
  );

  if (modalSearchOpen) {
    var arrowProps = {
      size: 20,
      color: '#ffffff',
    };
    var inputProps = {
      style: styles.inputSearch,
      autoFocus: true,
    };
    var iconSearchProps = {
      style: styles.iconSearch,
      size: 20,
    };
  } else {
    arrowProps = {
      size: 0
    };
    inputProps = {
      width: 0,
      height: 0,
      size: 0,
      onPress: Keyboard.dismiss(),
    };
    iconSearchProps = {
      size: 0,
    };
  }

  return (
    <ImageBackground source={Images.appBackground} style={styles.background}>
      <NavigateToBack onPress={() => setModalSearchOpen(false)} />
      <TextInput {...inputProps} />
      <Icon name='search' {...iconSearchProps} />
      <HeaderContainer onPressSearch={() => setModalSearchOpen(true)} />
      <View style={modalSearchOpen ? styles.modalSearch : styles.tasksContainer}>
        <FilterListContainer
          filterList={filterList}
          selectedFilter={selectedFilterIndex}
          onPressFilter={setFilterIndex}
        />
        {!fetching && !error && !!sortedToDos && (
          <FlatList
            style={{ marginLeft: 12 }}
            data={sortedToDos}
            keyExtractor={(item, index) => `${item.id}-${index}-${item.title}`}
            onEndReached={loadTodos}
            onEndReachedThreshold={0.2}
            renderItem={({ item: todo }) => (
              <ToDo onPressText={() => {}} toggleToDo={() => {}} text={todo.title} toggled={todo.isDone} />
            )}
          />
        )}
      </View>
      <FloatingButton onPress={() => setModalOpen(true)} />
      <Modal transparent={true} visible={modalOpen} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.viewModal}>
            <CloseModalButton onPress={() => setModalOpen(false)} />
            <TextInput style={styles.textInputMain} placeholder='Novo Lembrete...' placeholderTextColor={colors.c600} />
            <DateTimePicker />
            <PriorityPicker />
            <FloatingButtonAdd onPress={() => setAdd(true)} />
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

export default ToDoScreen;
