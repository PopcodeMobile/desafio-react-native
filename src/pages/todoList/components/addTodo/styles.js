import { StyleSheet } from 'react-native';

import { metrics, general, colors } from 'styles';

const styles = StyleSheet.create({
  errorMsg: {
    color: colors.danger,
    marginBottom: metrics.baseMargin,
    marginTop: metrics.baseMargin / 3,
  },
  headerContainer: {
    ...general.headerContainer,
  },
  input: {
    ...general.input,
  },
  label: {
    ...general.inputLabel,
  },
  modal: {
    margin: metrics.baseMargin,
  },
  title: {
    ...general.title,
  },
});

export default styles;
