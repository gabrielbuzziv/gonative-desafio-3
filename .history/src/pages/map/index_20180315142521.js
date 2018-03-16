import React from 'react';

import { View } from 'react-native';
import MapView from 'react-native-maps';

import styles from './styles';

const Map = () => (
  <View style={styles.container}>
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta 0,
      }}
    />
  </View>
));

export default Map;
