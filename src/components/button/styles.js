import { StyleSheet } from 'react-native';

import { metrics, colors, general } from 'styles';

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: metrics.baseRadius * 2,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: metrics.baseMargin / 3,
    padding: metrics.basePadding / 2,
  },
  buttonText: {
    ...general.bold,
    color: colors.white,
  },
  danger: {
    backgroundColor: colors.danger,
  },
  disabledButton: {
    backgroundColor: colors.disabled,
  },
  iconButton: {
    borderRadius: 15,
  },
  info: {
    backgroundColor: colors.info,
  },
  light: {
    backgroundColor: colors.light,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  success: {
    backgroundColor: colors.success,
  },
  warning: {
    backgroundColor: colors.warning,
  },
});

export default styles;
