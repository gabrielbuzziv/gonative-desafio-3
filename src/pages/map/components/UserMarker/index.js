import React from 'react';
import PropTypes from 'prop-types';

import { View, Image } from 'react-native';
import { Marker } from 'react-native-maps';

import styles from './styles';

const UserMarker = ({ user }) => (
  <Marker coordinate={user.coordinates} title={user.name} description={user.description}>
    <Image style={styles.image} source={{ uri: user.avatar }} />
  </Marker>
);

UserMarker.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    avatar: PropTypes.string,
    coordinates: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }).isRequired,
  }),
};

export default UserMarker;
