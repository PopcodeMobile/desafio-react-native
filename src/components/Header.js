/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import DotsMenu from './DotsMenu';

type propsHeader = {
  headerTitle : string,
  style? : Object,
  onFilter : any,
  onShowCompletes : any,
  isHidingTasksCompleted: boolean
};

const Header = ({headerTitle, style, onFilter, onShowCompletes, isHidingTasksCompleted} : propsHeader ) => (
    <View style={style? [styles.header, style] : styles.header}>
        <Text style={{color:'transparent'}}>Right</Text>

        <Text style={styles.headerText}> {headerTitle} </Text>

        <DotsMenu
          style={styles.menu}
          onFilter={onFilter}
          onShowCompletes={onShowCompletes}
          isHidingTasksCompleted={isHidingTasksCompleted}
        />
    </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#E91E63',
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 3
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 20
  },
  menu: {
    margin: 20
  }
})

export default Header;
