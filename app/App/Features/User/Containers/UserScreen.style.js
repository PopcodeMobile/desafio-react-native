import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'rgba(188,200,204,0.4)',
    paddingVertical: 20,
    paddingHorizontal: 16
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorMessage: {
    fontSize: 34,
    fontWeight: '500'
  },
  errorDescription: {
    color: '#707273',
    fontSize: 17,
    marginBottom: 20
  },
  fetchingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userName: {
    fontSize: 24,
    fontWeight: '500',
    marginVertical: 20,
    textAlign: 'center'
  },
  containerAvatar: {
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.4)',
    alignSelf: 'center'
  }
})

export default styles
