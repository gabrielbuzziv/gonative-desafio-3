import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Modal, Text, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

import styles from './styles';

class ModalForm extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
  };

  addUser = () => {
    console.tron.log('Add user right now.');
  };

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          alert('Modal has been closed.');
        }}
      >
        <View style={{ marginTop: 22 }}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
            >
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  visible: state.users.modalVisible,
});

export default connect(mapStateToProps)(ModalForm);
