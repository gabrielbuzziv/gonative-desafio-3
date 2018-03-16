import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from 'store/ducks/users';

import ModalForm from './components/ModalForm';

import styles from './styles';

class Map extends Component {
  static propTypes = {
    toggleModal: PropTypes.func.isRequired,
  };

  addUser = ({ coordinate, position }) => {
    console.tron.log(coordinate);
    console.tron.log(position);
    this.props.toggleModal(true);
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
          onLongPress={e => this.addUser(e.nativeEvent)}
        />
      </View>

      <ModalForm />
    );
  }
}

const mapActions = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(null, mapActions)(Map);
