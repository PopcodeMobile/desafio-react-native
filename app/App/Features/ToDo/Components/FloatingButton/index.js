import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import { Images } from '../../../../Themes'
import styles from './styles'

export default function FloatingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.floatingButton}>
      <Image source={Images.add['36px']} />
    </TouchableOpacity>
  )
}
