import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const circleRadius = 100;

export default StyleSheet.create({
  container: {
    borderRadius: circleRadius,
    padding: 3,
    backgroundColor: colors.white,
  },

  image: {
    height: 45,
    width: 45,
    borderRadius: circleRadius,
  },
});
