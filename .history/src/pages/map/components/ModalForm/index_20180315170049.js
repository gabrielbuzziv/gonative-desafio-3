import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Modal, Text, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

import styles from './styles';

class ModalForm extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
  };

  addUser = () => {};

  render() {
    return (
      <Modal transparent={false} visible={this.props.visible}>
        <View style={styles.container}>
          <Text>Add a user here.</Text>

          <TouchableOpacity onPress={this.addUser}>
            <Text>ADD</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  visible: state.users.modalVisible,
});

export default connect(mapStateToProps)(ModalForm);
