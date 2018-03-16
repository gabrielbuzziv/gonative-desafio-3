import { StyleSheet } from 'react-native';
import { metrics } from 'styles';

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    minHeight: metrics.screenHeight,
    width: metrics.screenHeight,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 20,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
