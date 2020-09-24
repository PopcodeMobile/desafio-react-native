import { StyleSheet } from 'react-native';
import { Colors } from '../../../Themes';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    position: 'absolute',
    backgroundColor: 'red',
    color: 'red'
  },
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 22,
    paddingLeft: 30,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#E3E4E6',
    color: Colors.c400
  },
  textTouchable: {
    position: 'absolute',
    left: 30,
    fontSize: 18,
    color: Colors.c400
  },
  textDateTime: {
    position: 'absolute',
    right: 0,
    fontSize: 16,
    color: Colors.c400
  },
  image: {
    position: 'absolute',
    padding: 8,
    top: 12,
    left: 0
  },
});

export default styles;
