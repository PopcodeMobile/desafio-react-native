import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  input: {
    borderColor: colors.black,
    borderRadius: metrics.baseRadius,
    borderWidth: 2,
    margin: metrics.baseMargin / 2,
    padding: metrics.basePadding / 2,
  },
  label: {
    color: colors.black,
  },
});

export default styles;
