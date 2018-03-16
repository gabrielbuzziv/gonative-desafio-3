import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from 'store/ducks/users';

import ModalForm from './components/ModalForm';

import styles from './styles';

class Map extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        avatar: PropTypes.string,
        coordinates: PropTypes.shape({
          latitude: PropTypes.number,
          longitude: PropTypes.number,
        }).isRequired,
      }),
    ),
    toggleModal: PropTypes.func.isRequired,
  };

  addUser = ({ coordinate }) => {
    this.props.toggleModal(true, coordinate);
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

        {this.props.users.map(user => (
          <Marker coordinate={user.coordinates} image={require(user.avatar)} key={user.id}>
            <Text>{user.name}</Text>
          </Marker>
        ))}

        <ModalForm />
      </View>
    );
  }
}

const mapState = state => ({
  users: state.users.data,
});
const mapActions = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(mapState, mapActions)(Map);
