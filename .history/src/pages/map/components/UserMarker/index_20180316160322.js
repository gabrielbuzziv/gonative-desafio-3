import React from 'react';
import PropTypes from 'prop-types';

import { View, Image } from 'react-native';

const Marker = ({ avatar }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: avatar }} />
  </View>
);

Marker.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Marker;
