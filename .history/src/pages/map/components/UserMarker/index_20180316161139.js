import React from 'react';
import PropTypes from 'prop-types';

import { View, Image } from 'react-native';
import { Marker } from 'react-native-maps';

import styles from './styles';

const UserMarker = ({ avatar }) => (
  <Marker coordinate={user.coordinates} key={user.id}>
    <Image style={styles.image} source={{ uri: avatar }} />
  </Marker>
);

UserMarker.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default UserMarker;
