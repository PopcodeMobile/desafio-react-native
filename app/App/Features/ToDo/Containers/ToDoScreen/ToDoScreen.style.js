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
  },
  filterContainer: {
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
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
