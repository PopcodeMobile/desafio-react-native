import { StyleSheet } from 'react-native';

import { metrics, general } from 'styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    ...general.title,
    marginBottom: metrics.baseMargin,
  },
});

export default styles;
