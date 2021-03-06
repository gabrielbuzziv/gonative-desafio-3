import React, { Component } from 'react';

import { View, Modal, Text } from 'react-native';

import styles from './styles';

export default class ModalForm extends Component {
  static state = {
    visible: false,
  };

  render() {
    return (
      <Modal transparent={false} visible={this.state.visible}>
        <View style={styles.container}>
          <Text>Add a user here.</Text>
        </View>
      </Modal>
    );
  }
}
