import colors from './colors';
import metrics from './metrics';

export default {
  bold: {
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
    padding: metrics.basePadding,
  },
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.black,
  },
  input: {
    borderColor: colors.black,
    borderRadius: metrics.baseRadius,
    borderWidth: 2,
    margin: metrics.baseMargin / 2,
    padding: metrics.basePadding / 2,
  },
  inputLabel: {
    color: colors.black,
  },
};
