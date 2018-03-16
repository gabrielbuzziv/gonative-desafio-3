import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

export default StyleSheet.create({
  container: {
    borderRadius: 100,
    padding: metrics.baseMargin,
    backgroundColor: colors.white,
  },

  image: {
    height: 45,
    width: 45,
    borderRadius: 100,
  },
});
