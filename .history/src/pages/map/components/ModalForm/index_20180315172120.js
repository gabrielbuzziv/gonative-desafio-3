import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Modal, Text, TouchableHighlight } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from 'store/ducks/users';

import styles from './styles';

class ModalForm extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
  };

  addUser = () => {
    this.props.toggleModal(false);
    console.tron.log('Add user right now.');
  };

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.visible}
        onRequestClose={() => {
          alert('Modal has been closed.');
        }}
      >
        <View style={{ marginTop: 22 }}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight onPress={this.addUser}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    );
  }
}

const mapState = state => ({
  visible: state.users.modalVisible,
});

const mapActions = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(mapState, mapActions)(ModalForm);
