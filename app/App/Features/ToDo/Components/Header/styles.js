import { StyleSheet } from 'react-native'

import { Colors } from '../../../../Themes'

const styles = StyleSheet.create({
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
  searchContainer: {
    height: 44,
    width: 44,
    borderRadius: 44 / 2,
    backgroundColor: Colors.a420,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default styles
