import React from 'react'
import { View, FlatList } from 'react-native'

import TogglableText from '../TogglableText'

import styles from './styles'

export default function FilterListContainer({ filterList, selectedFilter, onPressFilter }) {
  return (
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
  );
}
