import { StyleSheet } from 'react-native'
import { Colors } from '../../../../Themes'

const styles = StyleSheet.create({
  background: {
    // flex: 1,
    justifyContent: 'flex-end'
  },
  tasksContainer: {
    // zIndex: 1,
    height: '80%',
    backgroundColor: Colors.a420,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  containerButtonClose: {
    alignSelf: 'flex-end'
  },
  buttonClose: {
    backgroundColor: '#e0e0e0',
    padding: '01%',
    borderRadius: 20
  },
  reminderTitle: {
    marginLeft: '10%',
    marginRight: '10%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: '10%'
  },
  containerTitle: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  containerButtons: {
    padding: '3%',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  containerButtonsTextAndIcon: {
    flexDirection: 'row'
  },
  textButton: {
    fontSize: 20,
    color: '#9e9e9e',
    marginLeft: '5%'
  },
  rightTextButton: {
    fontSize: 20,
    color: '#bdbdbd'
  },
  buttonAdd: {
    backgroundColor: '#0277bd',
    padding: '04%',
    marginTop: '10%',
    marginLeft: '30%',
    marginRight: '30%',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 14
  },
  buttonAddText: {
    fontSize: 20,
    color: '#9e9e9e'
  }
})

export default styles
