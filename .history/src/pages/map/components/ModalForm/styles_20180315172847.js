import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    marginHorizontal: metrics.basePadding,
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {},
});
