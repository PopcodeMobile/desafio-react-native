// @flow
import React from 'react';

import { View } from 'react-native';
import { Button } from 'components';

import styles from './styles';

type Props = {
  filter: 'ALL' | 'ACTIVE' | 'COMPLETED',
  setFilter: (filter: string) => mixed,
};

const filter = (props: Props) => (
  <View style={styles.filterContainer}>
    <Button
      active={props.filter === 'ALL'}
      color="light"
      label="Todos"
      onPress={() => props.setFilter('ALL')}
      style={styles.filterButton}
    />
    <Button
      active={props.filter === 'ACTIVE'}
      color="light"
      label="Ativos"
      onPress={() => props.setFilter('ACTIVE')}
      style={styles.filterButton}
    />
    <Button
      active={props.filter === 'COMPLETED'}
      color="light"
      label="Completos"
      onPress={() => props.setFilter('COMPLETED')}
      style={styles.filterButton}
    />
  </View>
);

export default filter;
