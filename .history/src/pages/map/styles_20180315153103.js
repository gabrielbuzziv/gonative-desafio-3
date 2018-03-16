import { StyleSheet } from 'react-native';
import { metrics } from 'styles';

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    minHeight: metrics.screenHeight,
    width: metrics.screenHeight,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});