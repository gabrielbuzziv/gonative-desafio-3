import React, { Component } from 'react';

import { View, Modal, Text } from 'react-native';

import { connect } from 'react-redux';

import styles from './styles';

class ModalForm extends Component {
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

const mapStateToProps = state => ({
  visible: state.users.modalVisible,
});

export default connect()(ModalForm);
