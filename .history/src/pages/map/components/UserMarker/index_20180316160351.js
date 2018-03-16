import React from 'react';
import PropTypes from 'prop-types';

import { View, Image } from 'react-native';

const UserMarker = ({ avatar }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: avatar }} />
  </View>
);

UserMarker.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default UserMarker;
