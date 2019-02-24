import { StyleSheet } from 'react-native';

import { metrics, colors } from 'styles';

const styles = StyleSheet.create({
  checkbox: {
    color: colors.info,
    flex: 0.2,
    fontSize: 36,
  },
  completed: {
    borderColor: colors.success,
  },
  container: {
    alignItems: 'center',
    borderColor: colors.info,
    borderRadius: metrics.baseRadius,
    borderWidth: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: metrics.baseMargin / 2,
    padding: metrics.basePadding,
  },
  doneText: {
    color: colors.success,
    textDecorationLine: 'line-through',
  },
  removeIcon: {
    alignSelf: 'flex-start',
    color: colors.danger,
    flex: 0.1,
    fontSize: 30,
  },
  text: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 0.7,
  },
});

export default styles;
