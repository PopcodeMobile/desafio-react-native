/* @flow */

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

type Props = {
  onFilter: any,
  onShowCompletes: any,
  isHidingTasksCompleted: boolean
}

function onShowCompletesMenuText(isHidingTasksCompleted) {
  return isHidingTasksCompleted? 'Show completes' : 'Hide completes';
}

const DotsMenu = ({ onFilter, onShowCompletes, isHidingTasksCompleted } : Props) => (
  <Menu>
    <MenuTrigger>
      <Text style={styles.trigger}> ... </Text>
    </MenuTrigger>
    <MenuOptions style={styles.menu}>
      <MenuOption onSelect={onFilter} text='Filter by tag' style={styles.paragraph} />
      <MenuOption
        onSelect={onShowCompletes}
        text={onShowCompletesMenuText(isHidingTasksCompleted)}
      />
    </MenuOptions>
  </Menu>
);

const styles = StyleSheet.create({
  trigger: {
    color: '#fff',
    fontSize: 20,
    padding: 2,
    fontWeight: 'bold',
    transform: [{ rotate: '90deg'}]
  },
  menu: {
    backgroundColor: '#efefef'
  }
});

export default DotsMenu;
