import { StyleSheet } from 'react-native'
import { Colors } from '../../../../Themes'

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    right: 24,
    bottom: 58,
    height: 64,
    width: 64,
    borderRadius: 20,
    backgroundColor: Colors.a220,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles