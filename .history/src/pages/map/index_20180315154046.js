import React, { Component } from 'react';

import { View } from 'react-native';
import MapView from 'react-native-maps';

import styles from './styles';

export default class Map extends Component {
  state = {
    users: [],
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -27.2177659,
            longitude: -49.6451598,
            latitudeDelta: 0.0042,
            longitudeDelta: 0.0031,
          }}
        />
      </View>
    );
  }
}
