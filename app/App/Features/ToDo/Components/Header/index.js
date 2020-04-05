import React from 'react'
import moment from 'moment'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Images } from '../../../../Themes'

import styles from './styles'

export default function Header ({ onPressSearch }) {
  return (
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
}
