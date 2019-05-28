import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../../../../store/actions/todos';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#3274ea',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 17,
    height: 60,
  },
  title: { color: 'white', fontSize: 16, fontWeight: '500' },
  containerIcons: {
    flexDirection: 'row',
  },
  contentButtonIcon: { paddingRight: 20 },
});

const Header = ({
  todos,
  showModalStatisticTask,
  filterTaskDone,
  filterReset,
  filterTaskPending,
  filterTaskToday,
}) => {
  const isIconSearch = !!todos.data.length;
  const [visibleSearch, setVisibleSearch] = useState(false);
  const [visibleDone, setVisibleDone] = useState(false);
  const [visiblePending, setVisiblePending] = useState(false);
  const [visibleToday, setVisibleToday] = useState(false);

  return (
    <View style={[style.container, { height: visibleSearch ? 100 : 60 }]}>
      {!visibleSearch && <Text style={style.title}>Task List</Text>}
      {visibleSearch && (
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
            <TouchableOpacity
              disabled={visibleToday}
              onPress={() => {
                filterTaskToday();
                setVisibleToday(!visibleToday);
                setVisibleDone(false);
                setVisiblePending(false);
              }}
              style={{
                backgroundColor: visibleToday ? 'transparent' : 'white',
                width: '30%',
                height: 30,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: visibleToday ? 'white' : 'transparent',
                borderWidth: 1,
              }}
            >
              <Text
                style={{
                  color: visibleToday ? 'white' : '#3274ea',
                  fontSize: 10,
                  fontWeight: 'bold',
                }}
              >
                Today
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={visiblePending}
              onPress={() => {
                filterTaskPending();
                setVisiblePending(!visiblePending);
                setVisibleDone(false);
                setVisibleToday(false);
              }}
              style={{
                backgroundColor: visiblePending ? 'transparent' : 'white',
                width: '40%',
                height: 30,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: visiblePending ? 'white' : 'transparent',
                borderWidth: 1,
              }}
            >
              <Text
                style={{
                  color: visiblePending ? 'white' : '#3274ea',
                  fontSize: 10,
                  fontWeight: 'bold',
                }}
              >
                Pendent
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={visibleDone}
              onPress={() => {
                filterTaskDone();
                setVisibleDone(!visibleDone);
                setVisiblePending(false);
                setVisibleToday(false);
              }}
              style={{
                backgroundColor: visibleDone ? 'transparent' : 'white',
                width: '30%',
                height: 30,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: visibleDone ? 'white' : 'transparent',
                borderWidth: 1,
              }}
            >
              <Text
                style={{
                  color: visibleDone ? 'white' : '#3274ea',
                  fontSize: 10,
                  fontWeight: 'bold',
                }}
              >
                Done
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <View style={style.containerIcons}>
        {!visibleSearch && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => showModalStatisticTask()}
            style={[style.contentButtonIcon]}
          >
            <Icon name="bar-chart" size={24} color="white" />
          </TouchableOpacity>
        )}
        {isIconSearch && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setVisibleSearch(!visibleSearch);
              setVisibleDone(false);
              setVisiblePending(false);
              filterReset();
            }}
            style={[
              style.contentButtonIcon,
              { paddingLeft: visibleSearch ? 30 : 0, paddingRight: visibleSearch ? 0 : 20 },
            ]}
          >
            {visibleSearch ? (
              <Icon name="x" size={24} color="white" />
            ) : (
              <Icon name="search" size={24} color="white" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToPros = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToPros,
)(Header);
