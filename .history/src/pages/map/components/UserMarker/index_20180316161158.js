import React from 'react';
import PropTypes from 'prop-types';

import { View, Image } from 'react-native';
import { Marker } from 'react-native-maps';

import styles from './styles';

const UserMarker = ({ user }) => (
  <Marker
    coordinate={user.coordinates}
    title={user.name}
    description={user.description}
    key={user.id}
  >
    <Image style={styles.image} source={{ uri: user.avatar }} />
  </Marker>
);

UserMarker.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default UserMarker;
