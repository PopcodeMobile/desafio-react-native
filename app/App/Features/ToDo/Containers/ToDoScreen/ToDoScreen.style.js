import { StyleSheet } from 'react-native'
import { Colors } from '../../../../Themes'

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 24,
    marginBottom: 24
  },
  displayDateName: {
    color: Colors.a420,
    fontSize: 34,
    lineHeight: 41,
    letterSpacing: 0.37,
    fontWeight: 'bold'
  },
  date: {
    color: Colors.c400,
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24
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
  searchContainer: {
    height: 44,
    width: 44,
    borderRadius: 44 / 2,
    backgroundColor: Colors.a420,
    alignItems: 'center',
    justifyContent: 'center'
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
