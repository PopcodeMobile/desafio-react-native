import { StyleSheet } from 'react-native';
import { Colors } from '../../../Themes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  radioButton: {
    width: 28,
    height: 28,
    borderRadius: 28 / 2,
    borderWidth: 1,
    borderColor: Colors.c600,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggledRadioButton: {
    backgroundColor: Colors.a120,
  },
  text: {
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
    marginLeft: 12,
    color: Colors.a120,
  },
  toggledText: {
    textDecorationLine: 'line-through',
    color: Colors.c300,
  },
});

export default styles;
