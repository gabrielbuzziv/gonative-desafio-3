import React from 'react';

import { View } from 'react-native';
import MapView from 'react-native-maps';

import styles from './styles';

const Map = () => (
  <View style={styles.container}>
    <MapView
      initialRegion={{ latitude: -27.2177659, longitude: -49.6451598 }}
    />
  </View>
);

export default Map;
