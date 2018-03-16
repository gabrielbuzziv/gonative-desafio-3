import React from 'react';
import PropTypes from 'prop-types';

import { View, Image } from 'react-native';

import styles from './styles';

const UserMarker = ({ avatar }) => <Image style={styles.image} source={{ uri: avatar }} />;

UserMarker.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default UserMarker;
