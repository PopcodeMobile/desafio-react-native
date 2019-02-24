import { StyleSheet } from 'react-native';

import { metrics, general, colors } from 'styles';

const styles = StyleSheet.create({
  bold: {
    ...general.bold,
  },
  container: {
    minHeight: metrics.screenHeight,
    padding: metrics.basePadding,
  },
  headerContainer: {
    ...general.headerContainer,
  },
  itemsLeftText: {
    color: colors.warning,
    fontSize: 14,
    marginBottom: metrics.baseMargin / 2,
    marginTop: metrics.baseMargin,
  },
  title: {
    ...general.title,
  },
});

export default styles;
