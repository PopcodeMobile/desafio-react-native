import { StyleSheet } from 'react-native'
import { Colors } from '../../../../Themes'

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  tasksContainer: {
    height: '70%',
    backgroundColor: Colors.a420,
    borderTopLeftRadius: 32,
    paddingHorizontal: 16,
    paddingVertical: 12
  }
})

export default styles
