import { StyleSheet } from 'react-native';
import { Colors } from '../../../Themes';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    padding: 10,
    paddingLeft: 30,
    fontSize: 18,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#E3E4E6',
    color: Colors.c400
  },
  picker: {
    position: 'absolute',
    left: 230,
    width: 200,
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
