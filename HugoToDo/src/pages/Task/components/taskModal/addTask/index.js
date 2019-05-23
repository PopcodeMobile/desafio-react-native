import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#16b7fd',
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

export default function header() {
  return (
    <View style={style.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => {}} style={style.contentButtonIcon}>
        <Icon name="chevron-left" size={24} color="white" />
      </TouchableOpacity>
      <View style={style.containerIcons}>
        <Text style={style.title}>Task List</Text>
      </View>
    </View>
  );
}
